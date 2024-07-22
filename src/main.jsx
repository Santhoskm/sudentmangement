import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Creat from "./components/Creat.jsx";
import Edit from "./components/Edit.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create-student" element={<Creat />} />
      <Route path="/edit-student/:id" element={<Edit />} />
    </Routes>
  </BrowserRouter>
);
