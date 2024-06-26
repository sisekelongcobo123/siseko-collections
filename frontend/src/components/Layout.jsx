import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ flexGrow: 1, pt: 8, px: 3 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
