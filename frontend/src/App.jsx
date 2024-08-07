import { useState, React, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./components/AuthContext";
import useAutoLogout from "./components/useAutoLogout";
import Header from "./components/Header";
import Orders from "./pages/Orders";

function App() {
  useAutoLogout();
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
