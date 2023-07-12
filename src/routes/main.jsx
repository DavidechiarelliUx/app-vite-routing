import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./home";
import Todo from "./Todo";
import Login from "../components/login";
import Dashboard from "./Dashboard";
import DefaultLayout from "../layouts/defaultLayout";
import Location from "./location";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>ABOUT</h1>} />
      <Route
       path="/location"
       element={<Location/>}
      />
      <Route
        path="/todo/:id"
        element={
            <Todo />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
);
