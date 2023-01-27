import Header from "./components/Structure/Header";
import Navbar from "./components/Structure/Navbar";
import Home from "./components/Structure/Home";
import {Routes, Route} from 'react-router-dom';
import Faq from "./components/Structure/Faq";
import Schooling from "./components/Structure/Schooling";
import Registration from "./components/Structure/Registration";
import Gallery from "./components/Structure/Gallery";
import Footer from "./components/Structure/Footer";
import Nda8 from "./components/Other comps/Nda8";
import Nda9 from "./components/Other comps/Nda9";
import Nda10 from "./components/Other comps/Nda10";
import Nda11 from "./components/Other comps/Nda11";
import Scholarship from "./components/Structure/Scholarship";
import Afpi from "./components/Other comps/Afpi";
import Gurukul from "./components/Other comps/Gurukul";
import Army from "./components/Other comps/Army";
import Eligibility from "./components/Other comps/Eligibility";
import Contact from "./components/Structure/Contact";

function App() {
  return (
    <div className="App container-fluid" style={{paddingLeft: "0", paddingRight: "0"}}>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/eligibility" element={<Eligibility/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/scholarship" element={<Scholarship/>}/>
        <Route path="/nda-after-8th" element={<Nda8/>}/>
        <Route path="/nda-after-9th" element={<Nda9/>}/>
        <Route path="/nda-after-10th" element={<Nda10/>}/>
        <Route path="/nda-after-11th" element={<Nda11/>}/>
        <Route path="/afpi" element={<Afpi/>}/>
        <Route path="/gurukul" element={<Gurukul/>}/>
        <Route path="/army-public-school" element={<Army/>}/>
        <Route path="/schooling-program" element={<Schooling/>}/>
        <Route path="/hostel-facility" element={<Registration />}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
