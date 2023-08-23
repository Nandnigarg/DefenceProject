import Header from "./components/Structure/Header";
import Navbar from "./components/Structure/Navbar";
import Home from "./components/Structure/Home";
import {Routes, Route} from 'react-router-dom';
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
import Payment from "./components/Other comps/Payment";
import Hostel from "./components/Structure/Hostel";
import Aissee from "./components/Other comps/Aissee";
import NdaGallery from "./components/Other comps/NdaGallery";
import SainikGallery from "./components/Other comps/SainikGallery";
import Enquiry from "./components/Structure/Enquiry";
import Physical from "./components/Structure/Physical";
import Icons from "./components/Other comps/Icons";
import Ssb from "./components/Structure/Ssb";
import Foundation from "./components/Other comps/Foundation";
import NDAFaq from "./components/FAQS/NDAFaq";
import NdaAdmit from "./components/FAQS/NdaAdmit";
import NdaApp from "./components/FAQS/NdaApp";
import NdaCutoff from "./components/FAQS/NdaCutoff";
import NdaDates from "./components/FAQS/NdaDates";
import SsbFaq from "./components/FAQS/SsbFaq";
import IpTracker from "./IpTracker";
import NdaNoti from "./components/FAQS/NdaNoti";
import NdaResult from "./components/FAQS/NdaResult";
import NdaAnalysis from "./components/FAQS/NdaAnalysis";
import NdaSchooling from "./components/Other comps/NdaSchooling";
import NdaCoaching from "./components/Other comps/NdaCoaching";
import NdaOnline from "./components/Other comps/NdaOnline";
import NdaDelhi from "./components/Other comps/NdaDelhi";
import NdaChandigarh from "./components/Other comps/NdaChandigarh";
import Rms from "./components/Other comps/Rms";
import Rimc from "./components/Other comps/Rimc";
import Cds from "./components/Other comps/Cds";
import Afcat from "./components/Other comps/Afcat";
import Mns from "./components/Other comps/Mns";

function App() {
  const isRegistrationPage = window.location.pathname === "/branch-visiting-form";

  return (
    <div className="App container-fluid" style={{paddingLeft: "0", paddingRight: "0"}}>
      <IpTracker />
      <Header />
      <Icons />
      {!isRegistrationPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/eligibility" element={<Eligibility/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/enquiry-form" element={<Enquiry/>}/>
        <Route path="/scholarship-form" element={<Scholarship/>}/>
        <Route path="/nda-schooling" element={<NdaSchooling/>}/>
        <Route path="/nda-after-8th" element={<Nda8/>}/>
        <Route path="/nda-after-9th" element={<Nda9/>}/>
        <Route path="/nda-after-10th" element={<Nda10/>}/>
        <Route path="/nda-after-11th" element={<Nda11/>}/>
        <Route path="/nda-coaching" element={<NdaCoaching/>}/>
        <Route path="/nda-online" element={<NdaOnline/>}/>
        <Route path="/nda-delhi" element={<NdaDelhi/>}/>
        <Route path="/nda-chandigarh" element={<NdaChandigarh/>}/>
        <Route path="/nda-foundation" element={<Foundation/>}/>
        <Route path="/ssb-training" element={<Ssb/>}/>
        <Route path="/afpi" element={<Afpi/>}/>
        <Route path="/gurukul" element={<Gurukul/>}/>
        <Route path="/army-public-school" element={<Army/>}/>
        <Route path="/aissee" element={<Aissee/>}/>
        <Route path="/rms" element={<Rms/>}/>
        <Route path="/rimc" element={<Rimc/>}/>
        <Route  path="/cds" element={<Cds/>}/>
        <Route path="/afcat" element={<Afcat/>}/>
        <Route path="/mns" element={<Mns/>}/>
        <Route path="/school-integrated-programme" element={<Schooling/>}/>
        <Route path="/physical-ssb-training" element={<Physical/>}/>
        <Route path="/hostel-facility" element={<Hostel/>}/>
        <Route path="/branch-visiting-form" element={<Registration />}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/nda-gallery" element={<NdaGallery/>}/>
        <Route path="/sainik-school-gallery" element={<SainikGallery/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/nda-recruitment" element={<NDAFaq/>}/>
        <Route path="/nda-admit-card" element={<NdaAdmit/>}/>
        <Route path="/nda-application" element={<NdaApp/>}/>
        <Route path="/nda-dates" element={<NdaDates/>}/>
        <Route path="/nda-notification" element={<NdaNoti/>}/>
        <Route path="/nda-results" element={<NdaResult/>}/>
        <Route path="/nda-analysis" element={<NdaAnalysis/>}/>
        <Route path="/nda-cut-off" element={<NdaCutoff/>}/>
        <Route path="/ssb-faq" element={<SsbFaq/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
