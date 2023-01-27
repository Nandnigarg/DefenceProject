import dcgLogo from '../assets/dcgLogo.jpg';
import Analysis from '../assets/Analysis.jpg';
import Design from '../assets/Design.jpg';
import Experience from '../assets/Experience.jpg';
import Percentile from '../assets/Percentile.jpg';
import Time from '../assets/Time.jpg';
import Syllabus from '../assets/syllabus.jpg';
import Pattern from '../assets/pattern.jpg';
import N1 from '../assets/number1.jpg';
import N2 from '../assets/number2.jpg';
import N3 from '../assets/number3.jpg';

function Scholarship() {
    return (
        <div className="container-fluid mb-4">
            <div className="container">
                <div style={{ minHeight: "60vh" }} className="row mt-4">
                    <div className="col-md-6">
                        <img width="100%" height="auto" style={{ maxHeight: "300px", maxWidth: "300px" }} src={dcgLogo} alt="" />
                        <h2 style={{ fontFamily: "cursive", fontSize: "2.2rem", fontWeight: "bold" }} className="text text-danger">SCHOLARSHIP TEST</h2>
                        <h5 style={{ fontFamily: "cursive", color: "rgb(21, 52, 98)", fontSize: "1.2rem", fontWeight: "bold" }}>Take First step towards becoming an officer</h5>
                    </div>
                    <div className="col-md-6">
                        <form>
                            
                        </form>
                    </div>
                </div>
                <hr />
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }} className="text text-danger">Why you should take DCG-SAT?</h2>
                <div className="container mt-4">
                    <div style={{ textAlign: "center" }} className="row">
                        <div className="col-md-6 mt-3 mb-4">
                            <div style={{ maxWidth: "350px" }}>
                                <img height="auto" width="100%" style={{ maxHeight: "150px", maxWidth: "150px" }} src={Experience} alt="" />
                                <h5 style={{ color: "rgb(21, 52, 98)", fontSize: "1.5rem", fontWeight: "bold" }}>Live Exam Experience</h5>
                                <p style={{ fontSize: "16px" }}>Boost your exam preparation while competing with students in real-time.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3 mb-4">
                            <div style={{ maxWidth: "350px" }}>
                                <img height="auto" width="100%" style={{ maxHeight: "120px", maxWidth: "120px" }} src={Percentile} alt="" />
                                <h5 style={{ color: "rgb(21, 52, 98)", fontSize: "1.5rem", fontWeight: "bold" }}>Get Your Percentile</h5>
                                <p style={{ fontSize: "16px" }}>Measure your current preparation level among 1000s of students.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3 mb-4">
                            <div style={{ maxWidth: "350px" }}>
                                <img height="auto" width="100%" style={{ maxHeight: "150px", maxWidth: "150px" }} src={Analysis} alt="" />
                                <h5 style={{ color: "rgb(21, 52, 98)", fontSize: "1.5rem", fontWeight: "bold" }}>Performance Analysis</h5>
                                <p style={{ fontSize: "16px" }}>Recognize areas of improvement with a detailed subject-wise analysis.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3 mb-4">
                            <div style={{ maxWidth: "350px" }}>
                                <img height="auto" width="100%" style={{ maxHeight: "150px", maxWidth: "150px" }} src={Design} alt="" />
                                <h5 style={{ color: "rgb(21, 52, 98)", fontSize: "1.5rem", fontWeight: "bold" }}>Designed By Experts</h5>
                                <p style={{ fontSize: "16px" }}>Answer questions that are created by faculty & based on relevant exam patterns.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }} className="text text-danger">Date & Timings</h2>
                <div className="container mt-4">
                    <div style={{ textAlign: "center" ,backgroundColor: "rgb(255,243,231)"}} class="p-4">
                        <img src={Time} alt="" />
                        <h6 className="mt-3" style={{ fontSize: "20px" }}>Starts On</h6>
                        <h4 style={{ color: "rgb(21, 52, 98)", fontSize: "1.5rem", fontWeight: "bold" }}>December 31st , 11:00 AM - 8:00 PM</h4>
                    </div>
                    <div style={{ textAlign: "center" }} class="mt-3">
                        <h6 style={{ fontSize: "20px" }}>Results will be announced on</h6>
                        <h4 style={{ color: "rgb(21, 52, 98)", fontSize: "1.5rem", fontWeight: "bold" }}>January 2nd , 9:30 AM</h4>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <div className="row p-4">
                            <div className="col-md-6 mt-3">
                                <img height="auto" width="20%" src={Pattern} alt="" />
                                <h4 className="mt-3" style={{ color: "rgb(21, 52, 98)", fontSize: "1.3rem", fontWeight: "bold" }}>Pattern</h4>
                            </div>
                            <div className="col-md-6 mt-3">
                                <img height="auto" width="20%" src={Syllabus} alt="" />
                                <h4 className="mt-3" style={{ color: "rgb(21, 52, 98)", fontSize: "1.3rem", fontWeight: "bold" }}>Syllabus</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }} className="text text-danger">How to clear DCG-SAT?</h2>
                <div style={{textAlign: "center"}} className="container mt-4">
                    <div className="row p-4">
                        <div className="col-md-4 mt-3">
                            <img height="auto" width="25%" src={N1} alt="" />
                            <h4 style={{ color: "rgb(21, 52, 98)", fontSize: "1.3rem", fontWeight: "bold" }}>Register for the test online</h4>
                        </div>
                        <div className="col-md-4 mt-3">
                            <img height="auto" width="25%" src={N2} alt="" />
                            <h4 style={{ color: "rgb(21, 52, 98)", fontSize: "1.3rem", fontWeight: "bold" }}>Prepare With Live Classes</h4>
                        </div>
                        <div className="col-md-4 mt-3">
                            <img height="auto" width="25%" src={N3} alt="" />
                            <h4 style={{ color: "rgb(21, 52, 98)", fontSize: "1.3rem", fontWeight: "bold" }}>Attempt it LIVE</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scholarship;