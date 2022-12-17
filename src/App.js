import Header from "./components/Structure/Header";
import Navbar from "./components/Structure/Navbar";
import Home from "./components/Structure/Home";
import {Routes, Route} from 'react-router-dom';
import Schooling from "./components/Structure/Schooling";
import Hostel from "./components/Structure/Hostel";
import Fee from "./components/Structure/Fee";
import Gallery from "./components/Structure/Gallery";
import Footer from "./components/Structure/Footer";

function App() {
  return (
    <div className="App container-fluid" style={{paddingLeft: "0", paddingRight: "0"}}>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/schooling-program" element={<Schooling/>}/>
        <Route path="/hostel-facility" element={<Hostel />}/>
        <Route path="/fee-payment" element={<Fee />}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
