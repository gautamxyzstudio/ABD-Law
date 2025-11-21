import LatestBlog from "../../components/blog/latestBlog/LatestBlog"
import Testimonials from "../../components/home/testimonials/Testimonials"
import BlogList from "../../components/blog/blogList/BlogList"
import HeroSection from "../../components/heroSection/HeroSection"

const Blogs = () => {
  return (
    <>
     <HeroSection title="Our Latest Blog"/>
     <LatestBlog/>
     <BlogList/>
     <Testimonials/>
    </>
  )
}

export default Blogs
