import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import AllCourses from './Components/AllCourses/AllCourses';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import OneCourse from './Components/OneCourse/OneCourse'
import Profile from './Components/Profile/Profile';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllCourses" element={<AllCourses />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/OneCourse" element={<OneCourse />} />
        <Route path="/Profile" element={<Profile />} />


      </Routes>
    </Router>
  );
}

export default App;
