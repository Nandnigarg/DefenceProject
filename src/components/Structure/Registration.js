import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { firebase, auth } from '../../firebase';

function Registration() {
    // const [otp, setotp] = useState('');
    // const [show, setshow] = useState(false);
    // const [final, setfinal] = useState(null);
    // const [verify, setverify] = useState(false);

    // const sendOTP = (e) => {
    //     e.preventDefault();
    //     var num = document.getElementById('mobile').value;
    //     var mynumber = `+91${num}`;
    //     if (mynumber === "" || mynumber.length < 10) return;

    //     let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    //     auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
    //         setfinal(result);
    //         console.log(result);
    //         window.alert("code sent");
    //         setshow(true);
    //     })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    // const ValidateOtp = (e) => {
    //     e.preventDefault();
    //     if (otp === null || final === null) {
    //         window.alert("Something wrong!!");
    //         window.location.reload();
    //     }
    //     final.confirm(otp).then((result) => {
    //         window.alert("Verification Successful!!")
    //         setverify(true);
    //     }).catch((err) => {
    //         window.alert("Wrong code!!");
    //     })
    // }
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        var name = document.querySelector('#name').value;
        var mobile = document.querySelector('#mobile').value;
        var mail = document.querySelector('#mail').value;
        var Class = document.querySelector('#Class').value;
        var mode = document.querySelector('#mode').value;
        var dob = document.querySelector('#dob').value;
        var state = document.querySelector('#state').value;
        var city = document.querySelector('#city').value;
        var center = document.querySelector('#center').value;

        if (name === '' || mobile === '' || mail === '' || dob === '' || city === '' || Class === 'Select Present Class *' || mode === 'Select Class Mode *' || state === 'Select State *' || center === 'Select DCG Branch *') {
            window.alert('Please enter all the details carefully!')
        }

        else {
            // if(verify !== true){
            //     window.alert('Please verify your mobile number!!')
            // }
            emailjs.sendForm('service_tn5b93m', 'template_jwvw3wj', form.current, 'AXOnCkME7VCrGXjzC')
                .then((result) => {
                    var element = document.getElementById("feed_form");
                    window.alert("Form Submitted Successfully!!");
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
        <div>
            <div className="container-fluid mt-4 mb-5">
                <div style={{ maxWidth: "800px", textAlign: "center" }} className="container">
                    <form ref={form} onSubmit={sendEmail} id="feed_form">
                        <h1 style={{ fontFamily: "cursive", fontSize: "3rem", fontWeight: "bold", textAlign: "center" }} className="text text-danger">BRANCH VISITING FORM</h1>
                        <hr />
                        <div class="mb-3 mt-3">
                            <input type="text" class="form-control" id="name" placeholder="Enter Name *" name="name"/>
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" maxLength="10" class="form-control" id="mobile" placeholder="Mobile Number *" name="mobile"/>
                            {/* <div id="recaptcha-container"></div>
                            <button class="btn btn-primary" type="button" onClick={sendOTP}>Send OTP</button> */}
                        </div>
                        {/* <div class="input-group mb-3">
                            <input style={{ display: show ? "block" : "none" }} class="form-control" type="text" placeholder={"Enter your OTP"} value={otp} onChange={(e) => { setotp(e.target.value) }} />
                            <button style={{ display: show ? "block" : "none" }} class="btn btn-success" onClick={ValidateOtp}>Verify</button>
                        </div> */}
                        <div class="mb-3">
                            <input type="email" class="form-control" id="mail" placeholder="Email Id *" name="mail"/>
                        </div>
                        <div class="mb-3">
                            <select id="Class" name="Class" class="form-select" aria-label="Default select example">
                                <option selected disabled hidden>Select Present Class *</option>
                                <option value="3rd">3rd appearing</option>
                                <option value="4th">4th appearing</option>
                                <option value="5th">5th appearing</option>
                                <option value="6th">6th appearing</option>
                                <option value="7th">7th appearing</option>
                                <option value="8th">8th appearing</option>
                                <option value="9th">9th appearing</option>
                                <option value="10th">10th appearing</option>
                                <option value="11th">11th appearing</option>
                                <option value="12th">12th appearing</option>
                                <option value="online">12th Pass</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select id="mode" name="mode" class="form-select" aria-label="Default select example">
                                <option selected disabled hidden>Select Class Mode *</option>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <input type="date" class="form-control" id="dob" placeholder="Date of Birth *" name="dob"/>
                        </div>
                        <div class="mb-3">
                            <select id="state" name="state" class="form-select" aria-label="Default select example">
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
                            <input type="text" class="form-control" id="city" placeholder="Enter City *" name="city"/>
                        </div>
                        <div class="mb-3">
                            <select id="center" name="center" class="form-select" aria-label="Default select example">
                                <option selected disabled hidden>Select DCG Branch *</option>
                                <option value="DELHI">Delhi</option>
                                <option value="CHANDIGARG TRICITY BRANCH">Chandigarh Tricity Branch</option>
                                <option value="PUNE">Pune</option>
                            </select>
                        </div>
                        <button class="btn btn-dark mt-2 mb-5">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration;