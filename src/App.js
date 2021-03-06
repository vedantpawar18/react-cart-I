import logo from './logo.svg';
import './App.css';
import Navbar from "../src/components/Navbar";
import { Routes, Route} from "react-router-dom";
import Home from '../src/pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Products from './pages/Products';
import Footer from './components/Footer';
import RequireAuth from './hoc/RequireAuth';
import Login from './pages/Login';



function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="Products" element={<RequireAuth><Products /></RequireAuth>} />
          <Route path="AboutUs" element={<AboutUs/>} />
          <Route path="ContactUs" element={<ContactUs/>} />
          <Route path="FAQ" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
