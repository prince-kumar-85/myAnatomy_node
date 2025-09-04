import React from "react";
import { motion } from "framer-motion";
import { Routes, Route, useNavigate } from "react-router-dom";
import App1 from "./App1";

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      {/* Landing Page */}
      <Route
        path="/"
        element={
          <section
            className="vh-100 d-flex align-items-center"
            style={{
              background: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
              color: "white",
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                {/* Left Branding */}
                <motion.div
                  className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {/* Logo */}
                  <motion.div
                    className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle shadow"
                    style={{
                      width: "100px",
                      height: "100px",
                      background: "rgba(255,255,255,0.2)",
                      fontSize: "2.5rem",
                      backdropFilter: "blur(6px)",
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      repeat: Infinity,
                      duration: 12,
                      ease: "linear",
                    }}
                  >
                    💠
                  </motion.div>

                  <h1 className="fw-bold display-2">HydroTrim</h1>
                  <p className="lead mt-3 fs-4">
                    Stay hydrated. Stay healthy. <br /> Your smart water
                    companion.
                  </p>

                  {/* 🚀 Button */}
                  <motion.button
                    className="btn btn-light btn-lg mt-4 px-5 py-3 fw-bold shadow"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/login")}
                  >
                    🚀 Get Started
                  </motion.button>
                </motion.div>

                {/* Right Stats */}
                <motion.div
                  className="col-lg-6 d-flex justify-content-center"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className="rounded-4 bg-white text-dark p-5 shadow-lg"
                    style={{
                      width: "320px",
                      height: "380px",
                      backdropFilter: "blur(10px)",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h4 className="fw-bold mb-3">Hydration Stats 💧</h4>
                    <p className="mb-2">
                      Today: <strong>2.3 L / 3.0 L</strong>
                    </p>
                    <div className="progress mb-3" style={{ height: "10px" }}>
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "76%" }}
                      ></div>
                    </div>
                    <p className="small text-muted">
                      Keep going! Almost at your daily goal 🚀
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        }
      />

      {/* All other routes handled by App1 */}
      <Route path="/*" element={<App1 />} />
    </Routes>
  );
}
