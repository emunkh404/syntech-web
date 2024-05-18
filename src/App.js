import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home-page/Home";
import About from "./screens/about-us/About";
import Services from "./screens/services/Services";
import Pricing from "./screens/pricing/Pricing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
      {/*<Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
