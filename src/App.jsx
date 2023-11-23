import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import VideoPage from "./Pages/VideoPage/VideoPage";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/feed", element: <Home /> },
      { path: "/trending", element: <Home /> },
      { path: "/video/:id", element: <VideoPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
