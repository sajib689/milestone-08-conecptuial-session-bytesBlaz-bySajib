import { useEffect, useState } from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { deleteBlogs, getBlogs } from "../../Utitlits";
import NoData from "../../Components/NoData/NoData";

const BookMarks = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() =>{
        const storeBlogs = getBlogs()
        setBlogs(storeBlogs)
    },[]);
    const handleDelete = id => {
        deleteBlogs(id)
        const storeBlogs = getBlogs()
        setBlogs(storeBlogs)
      }
      if(blogs.length < 1) return <NoData/>
    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
				blogs.map(blog => <BlogCard handleDelete={handleDelete} deleteable={true} key={blog.id} blog={blog}></BlogCard>)
			}
			
		</div>
    );
};

export default BookMarks;