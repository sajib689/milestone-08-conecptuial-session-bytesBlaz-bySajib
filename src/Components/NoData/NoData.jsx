import { Link } from "react-router-dom";


const NoData = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <h1 className="text-5xl font-bold">
           
            <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient">
              {" "}
              No Data Found
            </span>
          </h1>
          <Link
              to="/blogs"
              className="mt-3 relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
              <span className="relative text-black group-hover:text-white">
                Browse Blogs
              </span>
            </Link>
        </div>
    );
};

export default NoData;