/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../../components/module/blogCard/BlogCard";

type Blog = {
  id: number;
  title: string;
  shortDesc: string;
  blogDate: string;
  category: string;
  banner: string;
};

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const API_URL = import.meta.env.VITE_API_URL;       // for fetching blogs
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
  axios.get(`${API_URL}/add-blogs?populate=*`).then((res) => {
    const mappedBlogs: Blog[] = res.data.data.map((item: any) => ({
      id: item.id,
      title: item.attributes.title,
      shortDesc: item.attributes.shortDesc,
      blogDate: item.attributes.blogDate,
      category: item.attributes.category,
      banner: item.attributes.banner?.data?.attributes?.url
        ? `${BASE_URL}${item.attributes.banner.data.attributes.url}`
        : "https://via.placeholder.com/600x400",

        
    }));
    setBlogs(mappedBlogs);
  });
}, [API_URL, BASE_URL]);
  console.log()
  return (
    <div className="px-[150px] py-20 bg-servicesB mt-38">
      <div className="flex justify-between items-center">
        <h2 className="text-5xl leading-[52px] font-bold">Recent Blogs</h2>
      </div>

      <div className="grid mt-13 grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
