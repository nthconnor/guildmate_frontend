import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/dashboard/*"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
