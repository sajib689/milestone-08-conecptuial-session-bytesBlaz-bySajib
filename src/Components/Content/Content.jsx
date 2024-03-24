
import placeholderImage from '../../assets/404.jpg'

const Content = () => {
    const blog = useLoaderData()
    const {
        id,
        cover_image,
        public_reactions_count,
        title,
        comments_count,
        description,
        published_at,
        reading_time_minutes,
        tags
      } = blog;
    return (
        <div
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || placeholderImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
         {title}
        </h3>
        <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
        <p>
          {description}
        </p>
      </div>
    </div>
    );
};

export default Content;