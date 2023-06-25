import React, { useState } from "react";
import "./App.css";
import { Dashboard, LoginPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoutes";

function App() {
  const [profilePicture, setProfilePicture] = useState<string>("");

  return (
    <BrowserRouter basename="/board-dashboard">
      <Routes>
        <Route
          path="/"
          element={<LoginPage setProfilePicture={setProfilePicture} />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard profilePicture={profilePicture} />{" "}
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
