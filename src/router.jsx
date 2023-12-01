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
import News  from "./pages/News";
import Profile from "./pages/Profile";
import Music from "./pages/Music";
import Videocall from "./pages/Videocall";
import Sports from "./pages/Sports";
import Climate from "./pages/Climate";
import Education from "./pages/Education";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/user-select" element={<UserSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home-page" element={<Homepage />} />
        <Route path="/protected" element={<Protected />} />     
        <Route path="/news" element={<News />} />  
        <Route path="/Music" element={<Music />} />
        <Route path="/Videocall" element={<Videocall />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news/sports" element={<Sports />} />
        <Route path="/news/climate" element={<Climate />} />
        <Route path="/news/education" element={<Education />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Route>
    </>
  ),
  // { basename: import.meta.env.DEV ? "/" : "/react-face-auth/" }
  { basename: "/" }
);

export default router;
