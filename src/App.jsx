import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import CreateGuild from "./components/CreateGuild";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/dashboard/*"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          path="/create"
          element={<ProtectedRoute element={<CreateGuild />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
