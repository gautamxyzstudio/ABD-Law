export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const ENDPOINTS = {
  LOGIN: `${BASE_URL}/api/auth/local?populate=*`,
  USERS: `${BASE_URL}/api/users?populate=*`,

  CREATE_USER: `${BASE_URL}/api/auth/local/register`,
  DELETE_LISTING: (listingId: string) =>
    `${BASE_URL}/api/all-property-listings/${listingId}`,
  DELETE_USER: (userId: string) => `${BASE_URL}/api/users/${userId}`,
  LISTINGS: `${BASE_URL}/api/Property-listings?populate=*`,
  ALL_LISTINGS: (page: number = 1, limit: number = 10) =>
    `${BASE_URL}/api/all-property-listings?populate=*&pagination[page]=${page}&pagination[pageSize]=${limit}`,
  FEATURED_LISTINGS: `${BASE_URL}/api/featured-lists?populate=*`,
  DELETE_FEATURED_LISTING: (listingId: string) =>
    `${BASE_URL}/api/featured-lists/${listingId}`,
  DELETE_SOLD_LISTING: (listingId: string) =>
    `${BASE_URL}/api/sold-properties/${listingId}`,
  SOLD: `${BASE_URL}/api/sold-properties?populate=*`,
  MOVE_TO_ALL: (listingId: string) =>
    `${BASE_URL}/api/sold-properties/${listingId}/move-to-all`,
  REGISTER: `${BASE_URL}/api/auth/register`,
  MOVE_TO_SOLD: (listingId: string) =>
    `${BASE_URL}/api/property-listings/${listingId}/move-to-sold`,
  SYNC: `${BASE_URL}/api/ddfauth/fetch-data`,
  BLOG: `${BASE_URL}/api/blogs?populate=*`,
  ADD_BLOG: (page: number = 1, limit: number = 10, search: string = "") =>
    `${BASE_URL}/api/add-blogs?populate=*&sort=blogDate:desc&pagination[page]=${page}&pagination[pageSize]=${limit}&filters[title][$containsi]=${search}`,
  POST_BLOG: `${BASE_URL}/api/add-blogs?populate=*`,
  UPLOAD_IMAGE: `${BASE_URL}/api/upload`,
  DELETE_BLOG: (blogId: string) => `${BASE_URL}/api/add-blogs/${blogId}`,
  UPDATE_BLOG: (blogId: string) => `${BASE_URL}/api/add-blogs/${blogId}`,
  UPDATE_LISTING: (listingId: string) =>
    `${BASE_URL}/api/all-property-listings/${listingId}`,
  UPDATE_SOLD_LISTING: (listingId: string) =>
    `${BASE_URL}/api/sold-properties/${listingId}`,
  UPDATE_FEATURED_LISTING: (listingId: string) =>
    `${BASE_URL}/api/all-property-listings/${listingId}/isfeatured`,
  TRASH_LIST: `${BASE_URL}/api/trash-properties?populate=*`,
  RESTORE_LISTING: (listingId: string) =>
    `${BASE_URL}/api/trash-properties/${listingId}/restore`,
  MOVE_TO_TRASH: (listingId: string) =>
    `${BASE_URL}/api/all-property-listings/${listingId}/move-to-trash`,
  NEWSLETTER_USERS: `${BASE_URL}/api/newsletter-lists?populate=*`,
  SYNC_DETAILS: `${BASE_URL}/api/sync-status`,
  MY_LISTINGS: `${BASE_URL}/api/myproperty?populate=*`,
  GET_LISTING_BY_ID: (listingId: string) =>
    `${BASE_URL}/api/all-property-listings/${listingId}?populate=*`,
  UPDATE_LISTING_FIELDS: (listingId: string) =>
    `${BASE_URL}/api/all-property-listings/${listingId}/update-fields`,
  UPDATE_LISTING_IMAGES_BY_ID: (listingId: string) =>
    `${BASE_URL}/api/all-property-listings/${listingId}/update-first-image`,
  ADD_MEDIA_IMAGE: (listingId: string) =>
    `${BASE_URL}/api/all-property-listings/${listingId}/add-media`,
  REORDER_MEDIA_IMAGE: (listingId: string) =>
    `${BASE_URL}/api/all-property-listings/${listingId}/reorder-media`,
  INACTIVE_LISTINGS: (page: number = 1, limit: number = 10) =>
    `${BASE_URL}/api/inactive-lists?populate=*&pagination[page]=${page}&pagination[pageSize]=${limit}`,
  DELETE_INACTIVE_LISTING: (listingId: string) =>
    `${BASE_URL}/api/inactive-lists/${listingId}`,
  INACTIVE_MOVE_TO_SOLD: (listingId: string) =>
    `${BASE_URL}/api/inactive-lists/${listingId}/move-to-sold`,
  DELETE_UPLOAD_FILE: (listingId: number) =>
    `${BASE_URL}/api/upload/files/${listingId}`,
};
