import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOut/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";

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
      },
      {
        path: '/bookDetails/:id', //ei nam ei destructure korte hobe useParams a 
        Component: BookDetails,
        loader: () => fetch("/booksData.json")
      }
    ],
    errorElement: <ErrorPage />
  }
]);