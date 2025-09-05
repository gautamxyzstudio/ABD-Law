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
  const API_URL = "https://adbbackend.xyzdemowebsites.com/api/add-blogs?populate=*";

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      const mappedBlogs: Blog[] = res.data.data.map((item: any) => ({
        id: item.id,
        title: item.attributes.title,
        shortDesc: item.attributes.shortDesc,
        blogDate: item.attributes.blogDate,
        category: item.attributes.category,
        banner: item.attributes.banner?.data?.attributes?.url
          ? "https://adbbackend.xyzdemowebsites.com" + item.attributes.banner.data.attributes.url
          : "https://via.placeholder.com/400x300",
      }));
      setBlogs(mappedBlogs);
    });
  }, []);

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
