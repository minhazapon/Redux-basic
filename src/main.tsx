import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Root from './Root';
import Redux from './Redux';
import { Provider } from 'react-redux';
import { store } from './redux/Store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>   ,
    children: [
       {
         path: "/",
         element: <Home></Home>   ,
       },
       {
         path: "/redux",
         element: <Redux></Redux>   ,
       },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider> 
  </StrictMode>,
)
