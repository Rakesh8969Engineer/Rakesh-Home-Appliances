import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";
import ContactPage from "./Pages/ContactPage";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<ContactPage />}></Route>
      </Routes>
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/+918969949025"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>

    
    </>
  );
}

export default App;
