import React from "react";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import Courses from "./courses/Courses";
import SignUp from "./components/SignUp";
import Contacts from "./contact/Contacts";

const App = () => {
  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
