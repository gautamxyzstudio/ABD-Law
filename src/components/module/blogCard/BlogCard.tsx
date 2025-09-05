import React from "react";

type BlogCardProps = {
  id: number;
  title: string;
  shortDesc: string;
  blogDate: string;
  category: string;
  banner: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  shortDesc,
  blogDate,
  category,
  banner,
}) => {
  return (
    <div className=" p-5 rounded-2xl border border-GrayL overflow-hidden hover:shadow-lg transition">
        
      {/* Blog Image */}
      <img
        src={banner}
        alt={title}
        className="w-full rounded-lg h-50 object-cover"
      />

      {/* Blog Content */}
      <div className="">
        <div className="flex mt-3 justify-between items-center text-xs text-gray-500">
          <span className="bg-Yellow/12 text-sm text-Yellow px-4 py-1 rounded-1">
            {category}
          </span>
          <span>{new Date(blogDate).toLocaleDateString("en-US", {
             day: "numeric",
             month: "short"         ,
             year: "numeric",
          })}</span>
        </div>

        <h3 className="text-2xl text-Black font-bold mt-4">{title}</h3>
        <p className="text-gray-600 text-base mt-3 leading-[24px]">{shortDesc}</p>

        <a
          href={`/blogs/${id}`}
          className="text-primary text-base font-bold mt-4 block leading-[24px]"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
