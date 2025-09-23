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

const API_URL = import.meta.env.VITE_API_URL;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface RecentBlogsProps {
  excludeId?: string | number;
}

const RecentBlogs: React.FC<RecentBlogsProps> = ({ excludeId }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

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
          : "https://via.placeholder.com/400x300",
      }));

      // ✅ filter out current blog, sort by date, take only 3
      const filteredBlogs = mappedBlogs
        .filter((blog) => blog.id.toString() !== excludeId?.toString())
        .sort(
          (a, b) =>
            new Date(b.blogDate).getTime() - new Date(a.blogDate).getTime()
        )
        .slice(0, 3); // ✅ ensures max 3 blogs

      setBlogs(filteredBlogs);
    });
  }, [excludeId]);

  if (blogs.length === 0) return null;

  return (
    <div className="xl:px-[150px] md:px-13 px-6 xl:py-20 md:py-13 py-16 bg-servicesB xl:mt-38 md:mt-31 mt-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Recent Blogs</h2>
        <a
          href="/blogs"
          className="bg-primary text-white px-12 py-3 rounded-md hover:bg-green-800 transition"
        >
          View all
        </a>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
