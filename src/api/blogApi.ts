import axios from "axios";
import { ENDPOINTS } from "./endpoints";
import { useAuthStore } from "../store/authStore";

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

interface ImageFormats {
  large: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  thumbnail: ImageFormat;
}

interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

interface BannerData {
  data: ImageData;
}

interface BlogAttributes {
  createdAt: string;
  updatedAt: string;
  category: string;
  publishedAt: string;
  blogData: string;
  title: string;
  blogSlug: string;
  shortDesc: string | null;
  metaDescr: string;
  metaTitle: string;
  blogDate: string | null;
  banner: BannerData;
  thumbnail: BannerData;
}

interface BlogResponse {
  id: number;
  attributes: BlogAttributes;
}

// interface ApiResponse {
//   data: BlogResponse[];
//   meta: {
//     pagination: {
//       page: number;
//       pageSize: number;
//       pageCount: number;
//       total: number;
//     };
//   };
// }

export interface TransformedBlog {
  id: number;
  title: string;
  shortDesc: string | null;
  blogData: string;
  blogSlug?: string;
  metaTitle: string;
  metaDescr: string;
  category: string;
  createdAt: string;
  smallBanner: string;
  updatedAt: string;
  publishedAt: string;
  blogDate: string | null;
  banner: string;
}

export const getBlog = async (params: {
  page: number;
  limit: number;
  search: string;
}) => {
  const response = await axios.get(
    ENDPOINTS.ADD_BLOG(params.page, params.limit, params.search)
  );
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const blogs = response.data.data.map((blog: BlogResponse) => ({
    id: blog.id,
    title: blog.attributes.title,
    blogSlug: blog.attributes.blogSlug,
    shortDesc: blog.attributes.shortDesc,
    blogData: blog.attributes.blogData,
    metaTitle: blog.attributes.metaTitle,
    category: blog.attributes.category,
    metaDescr: blog.attributes.metaDescr,
    createdAt: blog.attributes.createdAt,
    updatedAt: blog.attributes.updatedAt,
    publishedAt: blog.attributes.publishedAt,
    blogDate: blog.attributes.blogDate,
    imageId: blog?.attributes.banner?.data?.id,
    smallBanner: `${baseUrl}${blog?.attributes.banner?.data?.attributes?.formats?.small?.url}`,
    banner: blog?.attributes.banner?.data?.attributes?.url
      ? `${baseUrl}${blog.attributes.banner.data.attributes.url}`
      : "",
  }));
  return {
    data: blogs,
    total: response.data.meta.pagination.total,
    page: response.data.meta.pagination.page,
    limit: response.data.meta.pagination.pageSize,
  };
};

export const postBlog = async (blog: IBlogArgs) => {
  const { user } = useAuthStore.getState();
  const response = await axios.post(
    ENDPOINTS.POST_BLOG,
    { data: blog },
    {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }
  );
  return response.data;
};

export const deleteBlog = async (id: string) => {
  const { user } = useAuthStore.getState();
  const response = await axios.delete(`${ENDPOINTS.DELETE_BLOG(id)}`, {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });
  return response.data;
};

export const updateBlog = async (id: string, blog: IUpdateBlogArgs) => {
  const { user } = useAuthStore.getState();
  const response = await axios.put(
    ENDPOINTS.UPDATE_BLOG(id),
    {
      data: blog,
    },
    {
      headers: { Authorization: `Bearer ${user?.token}` },
    }
  );
  return response.data;
};

export const uploadImage = async (image: File) => {
  const formData = new FormData();
  formData.append("files", image);
  const response = await axios.post(ENDPOINTS.UPLOAD_IMAGE, formData);
  return response.data;
};

export interface IBlogArgs {
  banner: number;
  title: string;
  category: string;
  blogData: string;
  blogDate: string;
  blogSlug: string;
  shortDesc: string;
  metaTitle: string;
  metaDescr: string;
}

export interface IUpdateBlogArgs {
  banner: number;
  title: string;
  id: string;
  blogSlug: string;
  blogData: string;
  blogDate: string;
  shortDesc: string;
  category: string;
  metaTitle: string;
  metaDescr: string;
}
