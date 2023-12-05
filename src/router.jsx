import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import UserSelect from "./pages/UserSelect";
import Protected from "./pages/Protected";
import Homepage from "./pages/Homepage";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Music from "./pages/Music";
import Videocall from "./pages/Videocall";
import Sports from "./pages/Sports";
import Education from "./pages/Education";
import Books from "./pages/Books";
import Radio from "./pages/Radio";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/user-select" element={<UserSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home-page" element={<Homepage />} />
        <Route path="/protected" element={<Protected />} />     
        <Route path="/news" element={<News />} />  
        <Route path="/Videocall" element={<Videocall />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="//Sports" element={<Sports />} />
        <Route path="/Radio" element={<Radio />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Books" element={<Books />} />
        <Route path="*" element={<Navigate to="/" />} />
      {/* </Route> */}
    </>
  ),
  // { basename: import.meta.env.DEV ? "/" : "/react-face-auth/" }
  { basename: "/" }
);

export default router;
