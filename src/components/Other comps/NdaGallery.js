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

function NdaGallery() {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div style={{ textAlign: "center" }} className="container pt-2">
                    <h1 style={{ fontFamily: "cursive", fontSize: "3rem", fontWeight: "bold" }} className="text text-danger">NDA Selection</h1>
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
                        <div className="col-md-6">
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/afz-SLAPiQc" title="DELHI CAREER GROUP NDA FOUNDATION | Students Feedback | Coaching + Schooling #ndafoundation #nda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6">
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/_MBvf9eCzeA" title="NDA Foundation Programme by DCG, Student Feedback |NDA after 10th | NDA with Schooling #nda #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NdaGallery;