import React from 'react';
import Cart from './components/Cart';
import './App.css';
import MyCarousel from "./components/Carousel";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MyCarousel />,
  },
  {
    path: "/cart",
    element: <Cart />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
