import { Link } from 'react-router-dom';
import "../Structure/glow.css";
import {Helmet} from "react-helmet";

function NdaCoaching(){
    return(
        <div className="container-fluid" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <Helmet>
                <title>NDA Coaching in Chandigarh | NDA Coaching in Delhi - Delhi Career Group</title>
                <meta name="description" content="1.  NDA coaching in Chandigarh: Delhi Career Group is the top leading brand of Chandigarh for NDA Exam Preparation. Offer study materials, Current Affairs and test series are updated as per NDA Exam Pattern. 2. Delhi Career Group is the Best NDA Coaching Institute in Chandigarh. Delhi Career Group is one of the top NDA coaching Centre in Chandigarh." />
            </Helmet>
            <div className="container mt-5 mb-5" style={{ textAlign: "justify" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }} className="text text-danger">NDA Coaching</h1>
                <hr /><br />
                <div style={{textAlign: "center"}}><iframe width="80%" height="400" src="https://www.youtube.com/embed/l_BiGgcGeiQ" title="How to Crack NDA Exam in First Attempt! | Mr. Vatsom  - DCG Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                <p style={{ fontSize: "18px" }}>DCG understands the needs of every student and has designed various NDA coaching programs to suit the needs of NDA  aspirants. We offer NDA coaching to our students in both online and offline modes.</p>
                <p style={{ fontSize: "18px" }}>Our online portal provides NDA classes in two formats: NDA Online live interactive classes and NDA Online recorded lectures.  Offline  mode students can attend our NDA classes at our NDA coaching centers in Delhi and Chandigarh.</p>
                <p style={{ fontSize: "18px" }}>Our online NDA coaching program is designed to be convenient and flexible for students who want to study for NDA from the comfort of their own homes. Our NDA online live interactive classes allow students to interact with our experienced faculty in real time. While  our NDA recorded lectures can be accessed at any time.</p>
                <p style={{ fontSize: "18px" }}>Our NDA offline coaching program is designed for students who prefer to study in a traditional classroom setting with more focus and discipline. Our experienced faculty will provide you with the knowledge and skills you need to succeed on the NDA exam.</p>
                <p style={{ fontSize: "18px" }}>No matter which mode of NDA coaching you choose, DCG can help you achieve your dream of becoming a commissioned officer in the Indian Armed Forces</p>
                <div style={{borderRadius: "20px", backgroundColor: "rgb(40,120,70)" }} className='p-4'>
                    <h3 style={{ color: "rgb(255,255,0)", fontSize: "2.7rem", textAlign: "center" }}>NDA Coaching Programs Offered by Delhi Career Group</h3>
                    <div className="row mb-5" style={{textAlign: "center"}}>
                        <div className="col-sm-4 mt-4">
                            <Link exact to="/nda-online" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none" }}>NDA Online Coaching</button></Link>
                        </div>
                        <div className="col-sm-4 mt-4">
                            <Link exact to="/nda-delhi" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none" }}>NDA Coaching in Delhi</button></Link>
                        </div>
                        <div className="col-sm-4 mt-4">
                            <Link exact to="/nda-chandigarh" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none" }}>NDA Coaching in Chandigarh</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NdaCoaching;