import Form from "../Other comps/Form";
import galleryBanner from '../assets/gallery banner.jpg';
import i1 from '../assets/img1.jpg';
import i2 from '../assets/img2.jpg';
import i3 from '../assets/img3.jpg';
import i4 from '../assets/img4.jpg';
import i5 from '../assets/img5.jpg';
import i6 from '../assets/img6.jpg';
import i7 from '../assets/img7.jpg';
import i8 from '../assets/img8.jpg';
import i9 from '../assets/img9.jpg';
import i10 from '../assets/img10.jpg';
import i11 from '../assets/img11.jpg';
import i12 from '../assets/img12.jpg';
import i13 from '../assets/img13.jpg';
import i14 from '../assets/img14.jpg';
import i15 from '../assets/img15.jpg';
import i16 from '../assets/img16.jpg';
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
                    <hr />
                    <div className="row pt-4">
                        {/* row-1 */}
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i1} alt="" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i2} alt="" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i3} alt="" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i4} alt="" />
                        </div>

                        {/* row-2 */}
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i5} alt="" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i6} alt="" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i7} alt="" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i8} alt="" />
                        </div>

                        {/* row-3 */}
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i9} alt="" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i10} alt="" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i11} alt="" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i12} alt="" />
                        </div>

                        {/* row-4 */}
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i13} alt="" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i14} alt="" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i15} alt="" />
                        </div>
                        <div className="col-md-3 mt-4">
                            <img width="100%" height="auto" src={i16} alt="" />
                        </div>

                    </div>
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