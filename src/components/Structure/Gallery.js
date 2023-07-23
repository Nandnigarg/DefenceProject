import { Link } from 'react-router-dom';
import Form from "../Other comps/Form";
import galleryBanner from '../assets/gallery banner.jpg';
import SH1 from "../assets/SH1.jpg";
import SH2 from "../assets/SH2.jpg";
import SH3 from "../assets/SH3.jpg";
import hB1 from '../assets/hB1.jpg';
import hB2 from '../assets/hB2.jpg';
import hB3 from '../assets/hB3.jpg';
import i1 from '../assets/Nda21.jpg';
import i2 from '../assets/Nda22.jpg';
import i3 from '../assets/Nda23.jpg';
import i4 from '../assets/Nda24.jpg';
import i5 from '../assets/Nda25.jpg';
import i6 from '../assets/Nda26.jpg';
import i7 from '../assets/Nda27.jpg';
import i8 from '../assets/Nda28.jpg';
import i9 from '../assets/Nda29.jpg';
import i10 from '../assets/Nda30.jpg';
import i11 from '../assets/Nda31.jpg';
import i12 from '../assets/Nda32.jpg';
import i13 from '../assets/Nda33.jpg';
import i14 from '../assets/Nda34.jpg';
import i15 from '../assets/Nda35.jpg';
import i16 from '../assets/Nda36.jpg';
import i17 from '../assets/Nda37.jpg';
import i18 from '../assets/Nda38.jpg';
import i19 from '../assets/Nda39.jpg';
import i20 from '../assets/Nda40.jpg';


function Gallery() {
    return (
        <div>
            <img width="100%" height="auto" style={{ maxHeight: "670px" }} src={galleryBanner} alt="" />
            <div className="container-fluid mt-5">
                <div style={{ textAlign: "center" }} className="container pt-2">
                    <h1 style={{ fontFamily: "cursive", fontSize: "3rem", fontWeight: "bold" }} className="text text-danger">Gallery</h1>
                    <div className="row mt-3">
                        <div className="col-md-6 mt-3">
                            <Link exact to="/nda-gallery" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className="btn btn-success btn-lg">NDA Gallery</button></Link>
                        </div>
                        <div className="col-md-6 mt-3">
                            <Link exact to="/sainik-school-gallery" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className="btn btn-success btn-lg">Sainik School/RMS/RIMC Gallery</button></Link>
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
            <div className='container'>
                <div className="row pt-4">
                    {/* row-1 */}
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i1} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i2} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i3} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i4} alt="" />
                    </div>

                    {/* row-2 */}
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i5} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i6} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i7} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i8} alt="" />
                    </div>

                    {/* row-3 */}
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i9} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i10} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i11} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i12} alt="" />
                    </div>

                    {/* row-4 */}
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i13} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i14} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i15} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i16} alt="" />
                    </div>

                    {/* row-5 */}
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i17} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i18} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i19} alt="" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <img width="95%" height="250px" src={i20} alt="" />
                    </div>
                </div>
            </div>
            <Form />
        </div>
    )
}

export default Gallery;