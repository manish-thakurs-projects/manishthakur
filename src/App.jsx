import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ParallaxProvider } from 'react-scroll-parallax';
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";


const App = () => { 
  return (
   <ParallaxProvider>
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        <Footer />
        <BottomNav/>
    </Router>
   </ParallaxProvider>

  );
};

export default App;
