import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainHome from "../Pages/MainHome/MainHome";
import Blogs from "../Pages/Blogs/Blogs";
import BookMarks from "../Pages/BookMarks/BookMarks";
import Blog from "../Pages/Blog/Blog";
import Content from "../Components/Content/Content";
import Author from "../Components/Author/Author";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/",
          element: <MainHome/>
        },
        {
          path: "/blogs",
          element: <Blogs/>,
          loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
          path: "/bookmarks",
          element: <BookMarks/>
        },
        {
          path: "/blog/:id",
          element: <Blog/>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children: [
            {
                index: true,
                element: <Content></Content>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path: 'author',
                element: <Author></Author>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
          ],
        },
      ]
    },
  ]);

  export default router