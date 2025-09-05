import React, { useEffect, useState } from "react";
import axios from "axios";
import { image1, image2 } from "../../../exports";

interface Blog {
  id: number;
  attributes: {
    title: string;
    shortDesc: string;
    blogDate: string;
    category: string;
    banner: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const API_URL = "https://adbbackend.xyzdemowebsites.com/api/add-blogs?populate=*"; 

const LatestBlog: React.FC = () => {
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchLatestBlog = async () => {
      try {
        const res = await axios.get(API_URL);
        const blogs: Blog[] = res.data.data;
        // sort by blogDate descending to get latest
        const sorted = blogs.sort(
          (a, b) =>
            new Date(b.attributes.blogDate).getTime() -
            new Date(a.attributes.blogDate).getTime()
        );
        setBlog(sorted[0]); // pick latest
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };

    fetchLatestBlog();
  }, []);

  if (!blog) return null;

  const { title, shortDesc, blogDate, category, banner } = blog.attributes;
  const imgUrl = banner?.data?.attributes?.url
  ? `https://adbbackend.xyzdemowebsites.com${banner.data.attributes.url}`
  : "https://via.placeholder.com/400x300";

  return (
    <div className="relative mx-auto px-[150px] mt-38">
      <img className='w-[150px] h-[209px] z-1 absolute bottom-[-56px] left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
      <img className='w-[150px] h-[209px] z-1 absolute top-[-82px] right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>
      <div className="grid md:grid-cols-2 gap-9 w-full items-center bg-white overflow-hidden">
        {/* Image */}
        <div className="h-full">
          <img
            src={imgUrl}
            alt={title}
            className="w-full object-cover h-[370px] rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between">
          {/* Category + Date */}
          <div className="flex justify-between items-center mb-3">
            <span className="bg-Yellow/12 text-Yellow text-sm px-4 py-1 rounded-md">
              {category}
            </span>
            <span className="text-gray-500 text-sm">
              {new Date(blogDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-3">{title}</h2>

          {/* Short Description */}
          <p className="text-gray-600 mb-10">{shortDesc}</p>

          {/* Button */}
          <a
            href={`/blog/${blog.id}`}
            className="inline-block bg-primary text-white px-5 py-2 mr-auto  rounded-md"
          >
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
