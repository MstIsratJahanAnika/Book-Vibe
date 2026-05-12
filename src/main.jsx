import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';

import { router } from './routes/Routes';
import BookProvider from './context/BookContext';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* use of context API */}
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)


// BookProvider er moddhe entire application, shob children hishebe receive korbe BookProvider