import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/studentPages/Home";
import CoursesList from "./pages/studentPages/CoursesList";
import CourseDetails from "./pages/studentPages/CourseDetails";
import MyEnrollments from "./pages/studentPages/MyEnrollments";
import Player from "./pages/studentPages/Player";
import Loading from "./components/students/Loading";
import Educator from "./pages/educatorPages/Educator";
import Dashboard from "./pages/educatorPages/Dashboard";
import AddCourse from "./pages/educatorPages/AddCourse";
import MyCourses from "./pages/educatorPages/MyCourses";
import StudentsEnrolled from "./pages/educatorPages/StudentsEnrolled";
import Navbar from "./components/students/Navbar";

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");
  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="/educator" element={<Dashboard />} />
          <Route path="add-courses" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
