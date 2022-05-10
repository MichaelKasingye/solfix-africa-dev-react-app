import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import type { RouteObject } from "react-router-dom";
// import { Outlet, Link, useRoutes, useParams, Router } from "react-router-dom";
import Tapp from "./Pages/App";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// const Routings = () => {
//   let routes = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "about", element: <About /> },
//     // ...
//   ]);
//   return routes;
// };

function App() {
  // const routes = [
  //   {
  //     path: "/",
  //     element: <Tapp />,
  //     children: [
  //       { index: true, element: <Home /> },
  //       { path: "/about", element: <About /> },
  //       // {
  //       //   path: "/courses",
  //       //   element: <Courses />,
  //       //   children: [
  //       //     { index: true, element: <CoursesIndex /> },
  //       //     { path: "/courses/:id", element: <Course /> },
  //       //   ],
  //       // },
  //       { path: "*", element: <Error /> },
  //     ],
  //   },
  // ];
  // let element = useRoutes(routes);

  return (
    // <div>
    // <Router>
    //   <Routings />
    // </Router>
    // </div>

    <BrowserRouter>
  <Routes>
      <Route index element={<Home />} />
  <Route path="/test" element={<Tapp />} />
    <Route path="/about" element={<About />}/>
    <Route path="*" element={<Error/>}/>

  </Routes>
</BrowserRouter>
  );
}

export default App;
