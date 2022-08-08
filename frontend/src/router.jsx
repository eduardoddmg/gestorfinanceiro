import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Register from "./pages/register";
import Error from "./pages/error";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router