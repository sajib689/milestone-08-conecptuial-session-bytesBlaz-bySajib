import { Link } from "react-router-dom";
import placeholderImage from "../../assets/404.jpg";
import { MdDelete } from "react-icons/md";

const BlogCard = ({ blog, deleteable, handleDelete }) => {
  const { id, cover_image, title, description, published_at } = blog;

  return (
    <div className="flex relative m-4">
      <Link
        to={`/blog/${id}`}
        className=" max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <img
          role="presentation"
          className=" object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeholderImage}
        />

        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      <div className="absolute top-[-10px] right-0">
        {deleteable && (
          <div onClick={() => handleDelete(id)} className="text-3xl text-red-400 cursor-pointer">
            <MdDelete />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
