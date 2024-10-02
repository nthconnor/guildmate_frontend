import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Guild from "./pages/Guild"
import Dashboard from "./pages/Dashboard";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import CreateGuild from "./components/CreateGuild";
import ProtectedRoute from "./components/ProtectedRoute";

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
        <Route path="/guilds/:id" element={<Guild />} />
      </Routes>
    </div>
  );
}

export default App;
