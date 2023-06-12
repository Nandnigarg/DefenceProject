import { Link } from 'react-router-dom';
import "../Structure/glow.css";
import MetaTags from '../MetaTags';

function NdaSchooling() {
    return (
        <div className="container-fluid" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <MetaTags title="NDA foundation coaching in Chandigarh | NDA Coaching with schooling - Delhi Career Group" 
                description="Delhi Career Group is the best NDA coaching in Chandigarh & Delhi. We provide Best NDA Foundation course After 10th & 11th in Chandigarh, india." />
            <div className="container mt-5 mb-5" style={{ textAlign: "justify" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }} className="text text-danger">NDA Coaching with Schooling Program</h1>
                <hr />
                <br /><br />
                <p style={{ fontSize: "18px" }}>One of the best NDA coaching institutes in India is DCG Defence Academy. DCG Defence Academy offers a comprehensive and integrated program that prepares students for all aspects of the NDA exam, including academics, physical fitness, and SSB interview. The academy has a team of experienced and qualified faculty members, physical training instructors, and SSB interview experts who are committed to helping students achieve their goals.</p>
                <div style={{ borderRadius: "20px", backgroundColor: "rgb(40,120,70)" }} className='p-4'>
                    <h3 style={{ color: "rgb(255,255,0)", fontSize: "2.7rem", textAlign: "center" }}>NDA Foundation Course Programs Offered by Delhi Career Group</h3>
                    <div className="row mb-5" style={{ textAlign: "center" }}>
                        <div className="col-sm-6 mt-4">
                            <Link exact to="/nda-after-8th" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none" }}>NDA Coaching with Schooling after 8th</button></Link>
                        </div>
                        <div className="col-sm-6 mt-4">
                            <Link exact to="/nda-after-9th" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none" }}>NDA Coaching with Schooling after 9th</button></Link>
                        </div>
                        <div className="col-sm-6 mt-4">
                            <Link exact to="/nda-after-10th" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none" }}>NDA Coaching with Schooling after 10th</button></Link>
                        </div>
                        <div className="col-sm-6 mt-4">
                            <Link exact to="/nda-after-11th" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none" }}>NDA Coaching with Schooling after 11th</button></Link>
                        </div>
                    </div>
                    <p style={{ fontSize: "18px", color: "white" }}>The NDA with Schooling Integrated Program is a unique program that offers students the opportunity to study at a prestigious institution with a strong academic reputation, while also preparing them for a career in the Indian Armed Forces. The program is designed for students who are serious about pursuing a career in the military, and who want to get the best possible preparation for the NDA exam.</p>
                    <p style={{ fontSize: "18px", color: "white" }}>The NDA with Schooling Integrated Program is a great option for students who want to pursue a career in the Indian Armed Forces. The program offers a comprehensive and integrated preparation for the NDA exam, and it is taught by experienced and qualified faculty members. If you are serious about pursuing a career in the military, then the NDA with Schooling Integrated Program is the right program for you.</p>
                </div>
            </div>
        </div>
    )
}

export default NdaSchooling;