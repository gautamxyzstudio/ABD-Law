import BlogHero from "../../components/blog/blogHero/BlogHero"
import LatestBlog from "../../components/blog/latestBlog/LatestBlog"
import Testimonials from "../../components/home/testimonials/Testimonials"
import BlogList from "../../components/blog/blogList/BlogList"

const Blogs = () => {
  return (
    <>
     <BlogHero/>
     <LatestBlog/>
     <BlogList/>
     <Testimonials/>
    </>
  )
}

export default Blogs
