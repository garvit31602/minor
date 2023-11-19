import React from "react";
import Login from "./login";
import Signup from "./signup";
import Index from "./index1";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Profile from "./profile";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}/>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />}/>
        <Route path="profile" element={<Profile />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
