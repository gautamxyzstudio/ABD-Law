/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  styled,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import useSnackBarStore from "../../../../store/snackBarStore";
import { useUpdateBlog, useUploadImage } from "../../../../hooks/useBlog";
import { postBlog } from "../../../../api/blogApi";
import { useLoadingStore } from "../../../../store/loadingStore";
import Header from "../../../../components/adminHeader/AdminHeader";
import FormInput from "../../../../components/formInput/FormInput";
import DropdownInput from "../../../../components/dropdown-input/DropdownInput";
import { ENDPOINTS } from "../../../../api/endpoints";
import { BlogCategories } from "../../../../utils";

function slugify(input: string) {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

const AddNewBlog = () => {
  const { state } = useLocation();
  const blog = state?.blog;
  const editorRef = useRef<Editor | null>(null);
  const { setSnackBar } = useSnackBarStore();
  const { mutate: uploadImageMutation, isPending: isUploadingImage } =
    useUploadImage();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: postBlogMutation, isPending: isPostingBlog } = useMutation({
    mutationFn: postBlog,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
    onSuccess: () => {
      setSnackBar("Blog added successfully", "success");
      navigate("/manage-blogs");
    },
    onError: (error) => {
      setSnackBar(error?.message ?? "Something went wrong", "error");
    },
  });

  const { mutate: updateBlogMutation, isPending: isUpdatingBlog } =
    useUpdateBlog();

  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      metaTitle: "",
      category: BlogCategories.General,
      metaDescription: "",
      blogDate: new Date().toISOString().split("T")[0],
      shortDesc: "",
      blogTitle: "",
      blogSlug: "",
      blogImage: "",
      blogImageId: "",
    },
  });

  const [isSlugSynced, setIsSlugSynced] = useState(true);
  const blogTitle = watch("blogTitle");
  // console.log(blog?.category, 'blog category');

  useEffect(() => {
    if (blog) {
      setValue("blogTitle", blog?.title ?? "");
      setValue("shortDesc", blog?.shortDesc ?? "");
      setValue(
        "category",
        Object.entries(BlogCategories).find(
          ([, value]) => value === blog?.category
        )?.[0] ?? BlogCategories.General
      );
      // If thumbnailId doesn't exist, use the same imageId (assuming same image)
      setValue("blogDate", blog?.blogDate ?? "");
      setValue("metaTitle", blog?.metaTitle ?? "");
      setValue("metaDescription", blog?.metaDescr ?? "");
      setValue("blogImage", blog?.banner ?? "");
      setValue("blogImageId", blog?.imageId ?? "");
      setValue("blogSlug", blog?.blogSlug ?? "");
    }
  }, [blog, setValue]);

  useEffect(() => {
    if (isSlugSynced) setValue("blogSlug", slugify(blogTitle));
  }, [blogTitle, isSlugSynced, setValue]);

  const onSubmit = (data: {
    blogImage: string;
    blogTitle: string;
    shortDesc: string;
    metaDescription: string;
    category: string;
    metaTitle: string;
    blogImageId: string;
    blogDate: string;
    blogSlug: string;
  }) => {
    //@ts-ignore
    const editorContent = editorRef.current?.getContent();
    if (!editorContent) {
      setSnackBar("Blog Content is required", "error");
      return;
    }

    // Create a date with time set to current time
    const selectedDate = new Date(data.blogDate);

    postBlogMutation({
      banner: Number(data.blogImageId),
      title: data.blogTitle,
      blogSlug: data.blogSlug,
      blogData: editorContent,
      shortDesc: data.shortDesc,
      category: BlogCategories[data.category as keyof typeof BlogCategories],
      metaTitle: data.metaTitle,
      metaDescr: data.metaDescription,
      blogDate: selectedDate.toISOString(),
    });
  };

  // console.log(getValues('blogImage'));
  const onSubmitUpdate = (data: {
    blogImage: string;
    blogTitle: string;
    blogSlug: string;
    shortDesc: string;
    blogImageId: string;
    category: string;
    metaDescription: string;
    metaTitle: string;
    blogDate: string;
  }) => {
    // console.log('=-=-=-=-=-=-=DATA LOG START =-=-=-=-=-=-=-=-=');
    // console.log(data);
    // console.log('=-=-=-=-=-=-=DATA LOG END =-=-=-=-=-=-=-=-=');

    //@ts-ignore
    const editorContent = editorRef.current?.getContent();
    if (!editorContent) {
      setSnackBar("Blog Content is required", "error");
      return;
    }

    updateBlogMutation(
      {
        id: blog?.id.toString(),
        banner: Number(data.blogImageId),
        title: data.blogTitle,
        blogSlug: data.blogSlug,
        blogData: editorContent,
        shortDesc: data.shortDesc,
        metaTitle: data.metaTitle,
        category: BlogCategories[data.category as keyof typeof BlogCategories],
        metaDescr: data.metaDescription,
        blogDate: data.blogDate,
      },
      {
        onSuccess: () => {
          setSnackBar("Blog updated successfully", "success");
          queryClient.invalidateQueries({ queryKey: ["blogs"] });
          navigate("/manage-blogs");
        },
        onError: (error) => {
          setSnackBar(error?.message ?? "Something went wrong", "error");
        },
      }
    );
  };

  const { setLoading } = useLoadingStore();
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (file) {
      const imgPath = URL.createObjectURL(file);
      setValue("blogImage", imgPath);
      uploadImageMutation(file, {
        onSuccess: (data) => {
          if (data?.length > 0) {
            setValue("blogImageId", data[0]?.id);
          }
          setSnackBar("Banner uploaded successfully", "success");
        },
        onError: (error) => {
          setSnackBar(error?.message ?? "Something went wrong", "error");
        },
      });
    }
  };

  useEffect(() => {
    setLoading(isUploadingImage || isPostingBlog || isUpdatingBlog);
  }, [isUploadingImage, isPostingBlog, isUpdatingBlog]);

  useEffect(() => {
    if (errors.blogImage?.message) {
      setSnackBar(errors.blogImage?.message ?? "Something went wrong", "error");
      setTimeout(() => {
        setError("blogImage", { message: "" });
      }, 500);
    }
  }, [errors.blogImage?.message]);

  return (
    <>
      <Container
        sx={{
          maxWidth: "100%",
          padding: 0,
        }}
      >
        <Breadcrumbs sx={{ mt: 2, mb: 4 }}>
          <Link href="/">Home</Link>
          <Link href="/manage-blogs">Manage Blogs</Link>
          <Typography>{blog ? "Edit Blog" : "Add Blog"}</Typography>
        </Breadcrumbs>
        <Header
          title="Add New Blog"
          withSecondaryButton={false}
          withButton={false}
        />
        <div className="flex mt-10 gap-x-10 flex-row ">
          <Controller
            control={control}
            name="metaTitle"
            rules={{ required: "Meta Title is required" }}
            render={({ field }) => (
              <FormInput
                placeholder={"Meta Title"}
                label={"Meta Title"}
                errorMessage={errors.metaTitle?.message}
                value={field.value}
                containerClassName="w-[40%]"
                onChange={field.onChange}
              />
            )}
          />

          <div className="w-[40%]">
            <Controller
              control={control}
              name="category"
              render={({ field }) => (
                <DropdownInput
                  data={Object.entries(BlogCategories).map(([key]) => ({
                    label: key,
                    value: key,
                  }))}
                  label="Blog Category"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>

          <Controller
            control={control}
            name="metaDescription"
            rules={{ required: "Meta Description is required" }}
            render={({ field }) => (
              <FormInput
                placeholder={"Meta Description"}
                label={"Meta Description"}
                errorMessage={errors.metaDescription?.message}
                value={field.value}
                containerClassName="w-[40%]"
                onChange={field.onChange}
              />
            )}
          />
        </div>

        {/* Title & Slug */}
        <div className="flex mt-10 gap-x-10 flex-row ">
          <Controller
            control={control}
            rules={{ required: "Blog Title is required" }}
            name="blogTitle"
            render={({ field }) => (
              <FormInput
                placeholder="Blog Title"
                label="Blog Title"
                multiline
                rows={2}
                errorMessage={errors.blogTitle?.message}
                value={field.value}
                containerClassName="w-[50%]"
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="blogSlug"
            render={({ field }) => (
              <FormInput
                placeholder="Auto-generated slug"
                label="Blog Slug"
                value={field.value}
                containerClassName="w-[40%]"
                onChange={(e) => {
                  setIsSlugSynced(false);
                  field.onChange(slugify(e.target.value));
                }}
              />
            )}
          />
        </div>

        <div className="flex mt-10 gap-x-10 flex-row ">
          <Controller
            control={control}
            name="shortDesc"
            render={({ field }) => (
              <FormInput
                placeholder={"Short Description"}
                label={"Blog Description"}
                multiline
                rows={6}
                errorMessage={errors.shortDesc?.message}
                value={field.value}
                containerClassName="w-[75%]"
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div className="flex mt-10 gap-x-10 flex-row ">
          <Controller
            control={control}
            name="blogDate"
            render={({ field }) => (
              <FormInput
                placeholder={"Blog Date"}
                label={"Blog Date"}
                type="date"
                errorMessage={errors.blogDate?.message}
                value={field.value}
                containerClassName="w-[75%]"
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div className="flex mt-10 gap-x-10 flex-row ">
          <Controller
            control={control}
            rules={{ required: "Blog Banner is required" }}
            name="blogImage"
            render={() => (
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                {blog ? "Update Banner" : "Upload Banner"}
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => handleImageChange(event)}
                  multiple={false}
                />
              </Button>
            )}
          />
        </div>

        {getValues("blogImage") && (
          <Box
            mt={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="rounded-md"
            height="300px"
          >
            <img
              src={getValues("blogImage")}
              alt="image preview"
              className="max-h-full max-w-full rounded-lg"
            />
          </Box>
        )}

        <Box sx={{ mt: 4, width: "100%", height: "300px" }}>
          <Editor
            apiKey="hu5s7mnpfr8f0jgu9z04b77lk7qum6i84m2v8pmww6znrvlx"
            onInit={(_evt, editor) => (editorRef.current = editor)}
            initialValue={blog?.blogData || ""}
            ref={editorRef}
            init={{
              placeholder: "Describe the property!",
              height: 350,
              menubar: true,
              plugins: [
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "fullscreen",
                "wordcount",
                "insertdatetime",
                "media",
                "table",
                "code",
              ],
              toolbar:
                "blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "image | removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              automatic_uploads: true,
              file_picker_types: "image",
              images_reuse_filename: true,
              images_upload_url: ENDPOINTS.UPLOAD_IMAGE,
            }}
          />
        </Box>
      </Container>
      <div className="flex  mt-20">
        <Button
          onClick={blog ? handleSubmit(onSubmitUpdate) : handleSubmit(onSubmit)}
          size="large"
          variant="contained"
          color="info"
        >
          {blog ? "Update Blog" : "Add Blog"}
        </Button>
      </div>
    </>
  );
};

export default AddNewBlog;
