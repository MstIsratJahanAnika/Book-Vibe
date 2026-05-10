import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOut/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Books from "../Pages/Books/Books";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    // mainLayout er under a children
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/books',
        element: <Books />
      }
    ]
  }
]);