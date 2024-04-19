import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../Contailer/Hero";
import Works from "../Contailer/Works";
import Skills from "../Contailer/Skills";
import Experience from "../Contailer/Experience";
import Services from "../Contailer/Services";
import Blogs from "../Contailer/Blogs";
import Connect from "../Contailer/Connect";
import Navbar from "../Components/common/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Contact from "../Contailer/contact me/Contact";
import Footer from "../Contailer/Footer";
import NavbarRes from "../Components/common/NavbarRes";

const IndexRoutes = () => {
  const [serverStarting, setServerStarting] = useState(true);

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setServerStarting(false);
      } catch (error) {
        console.error("Failed to start server:", error);
      }
    };

    checkServerStatus();
  }, []);

  return (
    <div>
      {serverStarting ? (
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            style={{
              backgroundColor: "#8A2BE2", // Violet color
              height: "5px",
              width: "0%",
              borderRadius: "5px",
            }}
            animate={{ width: "100%", transition: { duration: 2, ease: "easeInOut" } }}
          />
        </motion.div>
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Hero />
                  <Services />
                  <Works />
                  <Experience />
                  <Skills />
                  <Blogs />
                  <Connect />
                  <Footer />
                </MainLayout>
              }
            />
            <Route
              path="/contact"
              element={
                <ContactLayout>
                  <Contact />
                  <Footer />
                </ContactLayout>
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
};

// MainLayout component for main pages
const MainLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// ContactLayout component for contact page
const ContactLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      <NavbarRes />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default IndexRoutes;
