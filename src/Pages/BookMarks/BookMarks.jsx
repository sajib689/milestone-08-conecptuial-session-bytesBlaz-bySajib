import { useEffect, useState } from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { getBlogs } from "../../Utitlits";

const BookMarks = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() =>{
        const storeBlogs = getBlogs()
        setBlogs(storeBlogs)
    },[]);
    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
				blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
			}
			
		</div>
    );
};

export default BookMarks;