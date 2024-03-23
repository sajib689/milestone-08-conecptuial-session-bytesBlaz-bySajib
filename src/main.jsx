
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Blogs from './Pages/Blogs/Blogs';
import BookMarks from './Pages/BookMarks/BookMarks';
import MainHome from './Pages/MainHome/MainHome.jsx';

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
        element: <Blogs/>
      },
      {
        path: "/bookmarks",
        element: <BookMarks/>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
