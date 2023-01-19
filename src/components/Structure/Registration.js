// import Form from "../Other comps/Form";

function Hostel() {
    // function generateOTP(e) {
    //     e.preventDefault();
    //     var digits = '0123456789';
    //     let OTP = '';
    //     for (let i = 0; i < 4; i++) {
    //         OTP += digits[Math.floor(Math.random() * 10)];
    //     }
    //     console.log(OTP);
    //     document.getElementById('otp').style.display = "block";
    // }

    return (
        <div>
            <div className="container-fluid mt-4 mb-5">
                <div style={{ maxWidth: "800px", textAlign: "center" }} className="container">
                    <form>
                        <h2>REGISTRATION FORM</h2>
                        <div class="mb-3 mt-3">
                            <input type="text" class="form-control" id="name" placeholder="Student Name *" />
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="mobile" placeholder="Mobile Number *" />
                            <button class="btn btn-danger" type="button">Send OTP</button>
                        </div>
                        <div class="mb-3">
                            <input style={{ display: "none" }} id="otp" type="text" class="form-control" placeholder="Enter OTP" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="mail" placeholder="Email Id *" />
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected disabled hidden>Select Present Class *</option>
                                <option value="chd">3rd appearing</option>
                                <option value="delhi">4th appearing</option>
                                <option value="online">12th Pass</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected disabled hidden>Select Class Mode *</option>
                                <option value="online">Online</option>
                                <option value="offline">Offline</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <input type="date" class="form-control" id="dob" placeholder="Date of Birth *" />
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected disabled hidden>Select State *</option>
                                <option value="AN">Andaman and Nicobar Islands</option>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="AR">Arunachal Pradesh</option>
                                <option value="AS">Assam</option>
                                <option value="BR">Bihar</option>
                                <option value="CH">Chandigarh</option>
                                <option value="CT">Chhattisgarh</option>
                                <option value="DN">Dadra and Nagar Haveli</option>
                                <option value="DD">Daman and Diu</option>
                                <option value="DL">Delhi</option>
                                <option value="GA">Goa</option>
                                <option value="GJ">Gujarat</option>
                                <option value="HR">Haryana</option>
                                <option value="HP">Himachal Pradesh</option>
                                <option value="JK">Jammu and Kashmir</option>
                                <option value="JH">Jharkhand</option>
                                <option value="KA">Karnataka</option>
                                <option value="KL">Kerala</option>
                                <option value="LA">Ladakh</option>
                                <option value="LD">Lakshadweep</option>
                                <option value="MP">Madhya Pradesh</option>
                                <option value="MH">Maharashtra</option>
                                <option value="MN">Manipur</option>
                                <option value="ML">Meghalaya</option>
                                <option value="MZ">Mizoram</option>
                                <option value="NL">Nagaland</option>
                                <option value="OR">Odisha</option>
                                <option value="PY">Puducherry</option>
                                <option value="PB">Punjab</option>
                                <option value="RJ">Rajasthan</option>
                                <option value="SK">Sikkim</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="TG">Telangana</option>
                                <option value="TR">Tripura</option>
                                <option value="UP">Uttar Pradesh</option>
                                <option value="UT">Uttarakhand</option>
                                <option value="WB">West Bengal</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected disabled hidden>Select Stude Center *</option>
                                <option value="chd">Chandigarh</option>
                                <option value="delhi">Delhi</option>
                                <option value="online">Online Classes</option>
                            </select>
                        </div>
                        <button class="btn btn-dark mt-2 mb-5">Submit</button>
                    </form>
                </div>
            </div>
            {/* <Form /> */}
        </div>
    )
}

export default Hostel;