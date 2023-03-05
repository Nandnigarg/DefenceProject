import { Link } from 'react-router-dom';
import Form from "../Other comps/Form";
import galleryBanner from '../assets/gallery banner.jpg';
import SH1 from "../assets/SH1.jpg";
import SH2 from "../assets/SH2.jpg";
import SH3 from "../assets/SH3.jpg";
import hB1 from '../assets/hB1.jpg';
import hB2 from '../assets/hB2.jpg';
import hB3 from '../assets/hB3.jpg';

function Gallery() {
    return (
        <div>
            <img width="100%" height="auto" style={{ maxHeight: "670px" }} src={galleryBanner} alt="" />
            <div className="container-fluid mt-5">
                <div style={{ textAlign: "center" }} className="container pt-2">
                    <h1 style={{ fontFamily: "cursive", fontSize: "3rem", fontWeight: "bold" }} className="text text-danger">Gallery</h1>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <Link exact to="/nda-gallery" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className="btn btn-success">NDA Gallery</button></Link>
                        </div>
                        <div className="col-md-6">
                            <Link exact to="/sainik-school-gallery" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className="btn btn-success">Sainik School Gallery</button></Link>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div style={{ backgroundColor: "rgb(180, 225, 151)", padding: "5% 2%", textAlign: "center" }} className="container-fluid mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <img height="auto" width="90%" src={SH1} alt="" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img height="auto" width="90%" src={SH2} alt="" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img height="auto" width="90%" src={SH3} alt="" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <img height="auto" width="100%" src={hB1} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img height="auto" width="100%" src={hB2} alt="" />
                        </div>
                        <div className="col-md-4">
                            <img height="auto" width="100%" src={hB3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Form />
        </div>
    )
}

export default Gallery;