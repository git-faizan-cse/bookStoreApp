import React from "react";
import Home from "./home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./courses/Courses";
import SignUp from "./components/SignUp";
import Contacts from "./contact/Contacts";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log("Navbar Auth User:", authUser);
  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signUp" />}
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
