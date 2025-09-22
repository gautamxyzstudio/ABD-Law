/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Testimonials from "../../components/home/testimonials/Testimonials";
import RecentBlogs from "../../components/blog/recentBlogs/RecentBlogs";
import { blogHero, image1, image2 } from "../../exports";
import PagesHero from "../../components/module/pagesHero/PagesHero";

const API_URL = import.meta.env.VITE_API_URL;     // For API calls
const BASE_URL = import.meta.env.VITE_API_BASE_URL;  // For images

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
    <div>
      <PagesHero
        title={title}
        imageBack={blogHero} />     
        {/* <div className="relative px-[150px] bg-primary w-full h-[392px] pt-[119px]">
        <h1 className="text-6xl text-white font-bold leading-[77px] text-left">{title}</h1> 
        <img className='w-[150px] h-[209px] z-1 absolute top-10 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>
      </div> */}
    <div className=" relative px-[150px] pt-16 bg-white">
      <img className='w-[150px] h-[209px] z-1 absolute top-70 left-0 rounded-2xl object-cover' src={image2} alt='ellipse'/>
      <img className='w-[150px] h-[209px] z-1 absolute top-5 right-0 rounded-2xl object-cover' src={image1} alt='ellipse'/>
       
      <div className="flex text-Black gap-3 text-sm">
          
          <span> Published on &nbsp;
            {new Date(blogDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
          <p className="text-Yellow">|</p>
          <span>{category}</span>

          
          
        </div> 
      {/* Banner */}
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-124 object-cover rounded-2xl mt-5"
      />

      {/* Title + Meta */}
      <div className="mt-6">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-700 leading-relaxed">
        <p>{shortDesc}</p>
        {/* If you have long content field (like blogData), render it with dangerouslySetInnerHTML */}
      </div>
    </div>

    <RecentBlogs excludeId={id} />
    <Testimonials/>
  </div>
  );
};

export default BlogDetail;
