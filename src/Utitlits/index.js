import toast from "react-hot-toast";
// save blogs
export const getBlogs = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs');
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs)

    }
    return blogs;
}

// save blogs
export const saveBlogs = blog => {
    let blogs = getBlogs();
    const isExiting = blogs.find(p => p.id === blog.id)
    if (isExiting) {
        return toast.error("Already have!.")
    }
    blogs.push(blog)
    localStorage.setItem("blogs", JSON.stringify(blogs))
    toast.success("Blog Bookmarked successfully")

}

// delete blogs
export const deleteBlogs = id => {
    let blogs = getBlogs();
    const remaining = blogs.filter(b => b.id !== id)

    localStorage.setItem("blogs", JSON.stringify(remaining))
    toast.success("Delete Success.")

}