import dcgLogo from '../assets/dcgLogo.jpg';
import Analysis from '../assets/Analysis.jpg';
import Design from '../assets/Design.jpg';
import Experience from '../assets/Experience.jpg';
import Percentile from '../assets/Percentile.jpg';
import Time from '../assets/Time.jpg';

function Scholarship() {
    return (
        <div className="container-fluid mb-4">
            <div className="container">
                <div style={{ minHeight: "60vh" }} className="row mt-4">
                    <div className="col-md-6">
                        <img width="100%" height="auto" style={{ maxHeight: "300px", maxWidth: "300px" }} src={dcgLogo} alt="" />
                        <h2>SCHOLARSHIP TEST</h2>
                        <h5>Take First step towards becoming an officer</h5>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
                <hr />
                <h4>Why you should take DCG-SAT?</h4>
                <div className="container mt-4">
                    <div style={{ textAlign: "center" }} className="row">
                        <div className="col-md-6 mt-3 mb-4">
                            <div style={{ maxWidth: "350px" }}>
                                <img height="auto" width="100%" style={{ maxHeight: "150px", maxWidth: "150px" }} src={Experience} alt="" />
                                <h5>Live Exam Experience</h5>
                                <p>Boost your exam preparation while competing with students in real-time.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3 mb-4">
                            <div style={{ maxWidth: "350px" }}>
                                <img height="auto" width="100%" style={{ maxHeight: "120px", maxWidth: "120px" }} src={Percentile} alt="" />
                                <h5>Get Your Percentile</h5>
                                <p>Measure your current preparation level among 1000s of students.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3 mb-4">
                            <div style={{ maxWidth: "350px" }}>
                                <img height="auto" width="100%" style={{ maxHeight: "150px", maxWidth: "150px" }} src={Analysis} alt="" />
                                <h5>Performance Analysis</h5>
                                <p>Recognize areas of improvement with a detailed subject-wise analysis.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3 mb-4">
                            <div style={{ maxWidth: "350px" }}>
                                <img height="auto" width="100%" style={{ maxHeight: "150px", maxWidth: "150px" }} src={Design} alt="" />
                                <h5>Designed By Experts</h5>
                                <p>Answer questions that are created by faculty & based on relevant exam patterns.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h4>Date & Timings</h4>
                <div className="container mt-4">
                    <div style={{ textAlign: "center" ,backgroundColor: "rgb(255,243,231)"}} class="p-4">
                        <img src={Time} alt="" />
                        <h6>Starts On</h6>
                        <h5>December 31st , 11:00 AM - 8:00 PM</h5>
                    </div>
                    <div style={{ textAlign: "center" }} class="mt-3">
                        <h6>Results will be announced on</h6>
                        <h5>January 2nd , 9:30 AM</h5>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <div className="row p-4">
                            <div className="col-md-6">
                                <h4>Pattern</h4>
                            </div>
                            <div className="col-md-6">
                                <h4>Syllabus</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <h4>How to clear DCG-SAT?</h4>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Register for the test online</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>Prepare With Live Classes</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>Attempt it LIVE</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scholarship;