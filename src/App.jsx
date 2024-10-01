import "./App.css";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

export default App;
