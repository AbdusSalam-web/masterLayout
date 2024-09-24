import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LayoutOne from "./layouts/LayoutOne";
import LayoutTwo from "./layouts/LayoutTwo";
import Catalog from "./pages/Catalog";
import Places from "./pages/Places";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Telephone from "./pages/Telephone";
import Fax from "./pages/Fax";
import Email from "./pages/Email";
function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/places" element={<Places />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/layoutTwo" element={<Contact />} />
        </Route>
        <Route path="/layoutTwo" element={<LayoutTwo />}>
          <Route path="/layoutTwo/contact" element={<Contact />} />
          <Route path="/layoutTwo/telephone" element={<Telephone />} />
          <Route path="/layoutTwo/fax" element={<Fax />} />
          <Route path="/layoutTwo/email" element={<Email />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
}

export default App;
