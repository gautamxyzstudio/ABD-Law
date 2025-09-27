export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const ENDPOINTS = {
  LOGIN: `${BASE_URL}/api/auth/local?populate=*`,
  USERS: `${BASE_URL}/api/users?populate=*`,

  CREATE_USER: `${BASE_URL}/api/auth/local/register`,
 
  SOLD: `${BASE_URL}/api/sold-properties?populate=*`,
  MOVE_TO_ALL: (listingId: string) =>
    `${BASE_URL}/api/sold-properties/${listingId}/move-to-all`,
  REGISTER: `${BASE_URL}/api/auth/register`,
  BLOG: `${BASE_URL}/api/blogs?populate=*`,
  ADD_BLOG: (page: number = 1, limit: number = 10, search: string = "") =>
    `${BASE_URL}/api/add-blogs?populate=*&sort=blogDate:desc&pagination[page]=${page}&pagination[pageSize]=${limit}&filters[title][$containsi]=${search}`,
  POST_BLOG: `${BASE_URL}/api/add-blogs?populate=*`,
  UPLOAD_IMAGE: `${BASE_URL}/api/upload`,
  DELETE_BLOG: (blogId: string) => `${BASE_URL}/api/add-blogs/${blogId}`,
  UPDATE_BLOG: (blogId: string) => `${BASE_URL}/api/add-blogs/${blogId}`,
};
