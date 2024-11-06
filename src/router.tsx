import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import NowPlaying from "./pages/NowPlaying";
import NotFound from "./pages/NotFound";
import Likes from "./pages/Likes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/now-playing",
        element: <NowPlaying />,
      },
      {
        path: "/likes",
        element: <Likes />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
