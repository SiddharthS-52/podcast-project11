import BlogPic from "../Components/BlogPic"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Suggest from "../Components/Suggest";
import './Blog.css';

function Blog() {
    return (
        <>
            <Navbar/>
            <BlogPic/>
            <Suggest/>
            <Footer/>
        </>
    )
}

export default Blog;