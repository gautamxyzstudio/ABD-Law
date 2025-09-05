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
          ? "https://yourdomain.com" + item.attributes.banner.data.attributes.url
          : "https://via.placeholder.com/400x300",
      }));
      setBlogs(mappedBlogs);
    });
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Recent Blogs</h2>
        <a
          href="/blogs"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
