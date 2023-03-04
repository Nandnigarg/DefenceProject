import React, { useState } from 'react';
import { firebase, auth } from '../../firebase';
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
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Scholar1 from '../assets/Scholar-1.jpg';
import Scholar2 from '../assets/Scholar-2.jpg';


function Scholarship() {
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState(null);

    const sendOTP = (e) => {
        e.preventDefault();
        var num = document.getElementById('mobile').value;
        var mynumber = `+91${num}`;
        if (mynumber === "" || mynumber.length < 10) return;

        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            setfinal(result);
            console.log(result);
            window.alert("code sent");
            setshow(true);
        })
            .catch((err) => {
                console.log(err);
            });
    }

    const ValidateOtp = (e) => {
        e.preventDefault();
        if (otp === null || final === null) {
            window.alert("Something wrong!!");
            window.location.reload();
        }
        final.confirm(otp).then((result) => {
            window.alert("Verification Successful!!")
        }).catch((err) => {
            window.alert("Wrong code!!");
        })
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        var name = document.querySelector('#name').value;
        var num = document.querySelector('#number').value;
        var mail = document.querySelector('#mail').value;
        var msg = document.querySelector('#message').value;

        if (name === '' || num === '' || mail === '' || msg === '') {
            window.alert('Please enter all the details carefully!')
        }

        else {
            emailjs.sendForm('service_pa5g7tp', 'template_g7oeolf', form.current, 'SMWY2N68zRuPkdjMx')
                .then((result) => {
                    var element = document.getElementById("feed_form");
                    element.reset();
                    console.log(result.text);
                }, (error) => {
                    var element = document.getElementById("feed_form");
                    element.reset();
                    console.log(error.text);
                });
        }
    };

    return (
        <div className="container-fluid mb-4">
            <div className="container" style={{ textAlign: "justify" }}>
                <div style={{ minHeight: "60vh" }}>
                    <div style={{ textAlign: "center" }} className="mt-4 mb-5">
                        <img width="100%" height="auto" style={{ maxHeight: "400px", maxWidth: "400px" }} src={dcgLogo} alt="" />
                        <h2 style={{ fontFamily: "cursive", fontSize: "2.5rem", fontWeight: "bold" }} className="text text-danger mt-3">SCHOLARSHIP TEST</h2>
                        <h5 style={{ fontFamily: "cursive", color: "rgb(21, 52, 98)", fontSize: "1.5rem", fontWeight: "bold" }}>Take First step towards becoming an officer</h5>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <form ref={form} onSubmit={sendEmail} id="feed_form">
                            <div class="mb-3 mt-3">
                                <input type="text" class="form-control" id="name" placeholder="Student Name *" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" maxLength="10" class="form-control" id="mobile" placeholder="Mobile Number *" />
                                <div id="recaptcha-container"></div>
                                <button class="btn btn-primary" type="button" onClick={sendOTP}>Send OTP</button>
                            </div>
                            <div class="input-group mb-3">
                                <input style={{ display: show ? "block" : "none" }} class="form-control" type="text" placeholder={"Enter your OTP"} value={otp} onChange={(e) => { setotp(e.target.value) }} />
                                <button style={{ display: show ? "block" : "none" }} class="btn btn-success" onClick={ValidateOtp}>Verify</button>
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="mail" placeholder="Email Id *" />
                            </div>
                            <div class="mb-3">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected disabled hidden>Select Present Class *</option>
                                    {/* <option value="3rd">3rd appearing</option>
                                    <option value="4th">4th appearing</option>
                                    <option value="5th">5th appearing</option>
                                    <option value="6th">6th appearing</option>
                                    <option value="7th">7th appearing</option>
                                    <option value="8th">8th appearing</option>
                                    <option value="9th">9th appearing</option> */}
                                    <option value="10th">10th appearing</option>
                                    <option value="11th">11th appearing</option>
                                    <option value="12th">12th appearing</option>
                                    <option value="online">12th Pass</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected disabled hidden>Select Class Mode *</option>
                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <input type="date" class="form-control" id="dob" placeholder="Date of Birth *" />
                            </div>
                            <div class="mb-3">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected disabled hidden>Select State *</option>
                                    <option value="Andaman and Nicobar Island">Andaman and Nicobar Islands</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Ladakh">Ladakh</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected disabled hidden>Select Stude Center *</option>
                                    <option value="CHD">Chandigarh</option>
                                    <option value="DELHI">Delhi</option>
                                    <option value="ONLINE">Online Classes</option>
                                </select>
                            </div>
                            <button class="btn btn-dark mt-2 mb-5">Submit</button>
                        </form>
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    <h2 style={{ fontSize: "2.7rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "cursive" }} className="text text-success">Scholarship Test Details</h2>
                </div>
                <hr />
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img height="auto" width="100%" src={Scholar1} alt="" />
                    </div>
                    <div className="col-md-6">
                        <img height="auto" width="100%" src={Scholar2} alt="" />
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
                    <div style={{ textAlign: "center", backgroundColor: "rgb(255,243,231)" }} class="p-4">
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
                <div style={{ textAlign: "center" }} className="container mt-4">
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
        </div >
    )
}

export default Scholarship;