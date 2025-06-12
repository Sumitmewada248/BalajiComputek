
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import RegistrationPage from "./Pages/Register page";
import Dashboard from "./Pages/Dashboard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
