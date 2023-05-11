import { Link } from 'react-router-dom';
import "../Structure/glow.css";

function NdaSchooling() {
    return (
        <div className="container-fluid" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <div className="container mt-5 mb-5" style={{ textAlign: "justify" }}>
                <h1 style={{ fontFamily: "cursive", fontSize: "3rem", fontWeight: "bold", textAlign: "center" }} className="text text-danger">NDA with SCHOOLING</h1>
                <hr />
                <br /><br />

                <div style={{textAlign: "center", borderRadius: "20px", backgroundColor: "rgb(40,120,70)"}} className='p-4'>
                    <h3 style={{ color: "rgb(255,255,0)", fontSize: "2.5rem" }}>Our Program</h3>
                    <div className="row">
                        <div className="col-sm-6 mt-4">
                            <Link exact to="/nda-after-8th" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none"}}>NDA after 8th</button></Link>
                        </div>
                        <div className="col-sm-6 mt-4">
                            <Link exact to="/nda-after-9th" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none"}}>NDA after 9th</button></Link>
                        </div>
                        <div className="col-sm-6 mt-4">
                            <Link exact to="/nda-after-10th" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none"}}>NDA after 10th</button></Link>
                        </div>
                        <div className="col-sm-6 mt-4">
                            <Link exact to="/nda-after-11th" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none"}}>NDA after 11th</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NdaSchooling;