import {
  useMutation,
  useQuery,
  useQueryClient,
  type UseQueryResult,
} from '@tanstack/react-query';
import {
  deleteBlog,
  getBlog,
  updateBlog,
  uploadImage,
  type IUpdateBlogArgs,
  type TransformedBlog,
} from '../api/blogApi';

export function useUploadImage() {
  return useMutation({
    mutationFn: uploadImage,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export function useDeleteBlog() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
}

export function useUpdateBlog() {
  return useMutation({
    mutationFn: (blog: IUpdateBlogArgs) => updateBlog(blog.id, blog),
  });
}

export function useGetBlogs(
  page: number = 1,
  limit: number = 10,
  search: string = ''
): UseQueryResult<
  {
    data: TransformedBlog[];
    total: number;
    page: number;
    limit: number;
  },
  Error
> {
  return useQuery({
    queryKey: ['blogs', page, limit, search],
    queryFn: () => getBlog({ page, limit, search }),
  });
}
export type { TransformedBlog };
