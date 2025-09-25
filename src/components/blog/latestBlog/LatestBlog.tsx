/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { image1, image2 } from "../../../exports";
import { useLoadingStore } from "../../../store/loadingStore";

interface Blog {
  id: number;
  attributes: {
    title: string;
    shortDesc: string;
    blogDate: string;
    category: string;
    createdAt: string; // added createdAt
    banner: {
      data: {
        attributes: {
          url: string;
        };
      } | null;
    } | null;
  };
}

const LatestBlog: React.FC = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const navigate = useNavigate();
  const {setLoading} = useLoadingStore()

  useEffect(() => {
    const fetchLatestBlog = async () => {
      setLoading(true)
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/add-blogs?populate=*&sort[0]=createdAt:desc&pagination[limit]=1`
        );

        const latestBlog: Blog = res.data.data[0]; // latest added blog
        setBlog(latestBlog);
      } catch (err) {
        console.error("Error fetching latest blog:", err);
         setLoading(false)
      }finally{
        setLoading(false)
      }
    };

    fetchLatestBlog();
  }, []);

  if (!blog) return <p>Loading latest blog...</p>; // show loader or placeholder

  const { title, shortDesc, blogDate, category, banner } = blog.attributes;
  const imgUrl = banner?.data?.attributes?.url
    ? `${import.meta.env.VITE_API_BASE_URL}${banner.data.attributes.url}`
    : "https://via.placeholder.com/400x300";

  return (
    <div className="relative mx-auto xl:px-[150px] md:px-13 px-6 xl:mt-38 md:mt-31 mt-16">
      {/* Decorative Images */}
      <img
        className="w-[150px] h-[209px] z-1 xl:block hidden absolute bottom-[-56px] left-0 rounded-2xl object-cover"
        src={image2}
        alt="ellipse"
      />
      <img
        className="w-[150px] h-[209px] z-1 xl:block hidden absolute top-[-82px] right-0 rounded-2xl object-cover"
        src={image1}
        alt="ellipse"
      />

      <div className="flex xl:flex-row flex-col xl:gap-9 w-full items-center overflow-hidden">
        {/* Blog Image */}
        <div className="w-11/20 h-full">
          <img
            src={imgUrl}
            alt={title}
            className="w-full md:h-[322px] h-54 rounded-2xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between w-9/20 xl:py-6 py-4 px-4">
          {/* Category + Date */}
          <div className="flex justify-between items-center mt-3">
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
          <h2 className="text-2xl font-bold md:my-4 my-3">{title}</h2>

          {/* Short Description */}
          <p className="text-gray-600 md:mb-10 mb-6">{shortDesc}</p>

          {/* Read More Button */}
          <button
            onClick={() => {
              navigate(`/blogs/${blog.id}`);
              window.scrollTo(0, 0);
            }}
            className="inline-block bg-primary text-white px-5 py-2 mr-auto rounded-md"
          >
            Read Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
