/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../../module/blogCard/BlogCard";

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
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios.get(`${BASE_URL}/api/add-blogs?populate=*`).then((res) => {
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
  }, []);
  
  return (
    <div className="xl:px-[150px] md:px-13 px-6 xl:py-20 md:py-13 py-16 bg-servicesB xl:mt-38 md:mt-31 mt-16">
      <div className="flex justify-between items-center">
        <h2 className="text-5xl leading-[52px] font-bold">Recent Blogs</h2>
      </div>

      <div className="grid md:mt-10 mt-8 grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
