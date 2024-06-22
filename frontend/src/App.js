import MyCarousel from "./Components/Carousel";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function App() {
  let browserRouter = createBrowserRouter([
    {
      path: "",
      element: <MyCarousel />,
    },
    
  ]);
  return <RouterProvider router={browserRouter}></RouterProvider>;
}
