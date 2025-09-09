/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;     // For API calls
const BASE_URL = import.meta.env.VITE_BASE_URL;  // For images

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/add-blogs/${id}?populate=*`)
      .then((res) => setBlog(res.data.data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  const { title, shortDesc, blogDate, category, banner } = blog.attributes;

  // ✅ Correct image URL
  const imgUrl = banner?.data?.attributes?.url
    ? `${BASE_URL}${banner.data.attributes.url}`
    : "https://via.placeholder.com/600x400";

  return (
    <div className="px-[150px] py-10 bg-white">
      {/* Banner */}
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-96 object-cover rounded-lg"
      />

      {/* Title + Meta */}
      <div className="mt-6">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <div className="flex justify-between text-gray-500 text-sm">
          <span>{category}</span>
          <span>
            {new Date(blogDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-700 leading-relaxed">
        <p>{shortDesc}</p>
        {/* If you have long content field (like blogData), render it with dangerouslySetInnerHTML */}
      </div>
    </div>
  );
};

export default BlogDetail;
