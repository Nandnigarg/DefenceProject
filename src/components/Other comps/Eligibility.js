import bg from '../assets/AfpiBG.jpg';

function Eligibility() {
    function checkEligible(e){
        e.preventDefault();
        var name = document.querySelector('#name').value;
        var quali = document.querySelector('#qualification').value;
        if(name === '' || quali === 'select'){
            window.alert("Please Enter All The Details Carefully!");
        }
        else{
            document.querySelector('#text-div').innerHTML = `Hello ${name}. You are eligible for -  courses!`
        }
    }

    return (
        <div className="container-fluid" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${bg})`, minHeight: "750px", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} className="container mt-3 pt-5">
                    <h1 style={{ color: "rgb(255,255,0)", fontFamily: "cursive", fontSize: "3.5rem", fontWeight: "bold", textAlign: "center" }}>CHECK ELIGIBILITY</h1>
                    <div style={{ textAlign: "center", backgroundColor: "rgb(238,238,238)", width: "70%" }} className="mt-4 p-3">
                        <form>
                            <h4 className="text text-success">Let's find the best entry for you</h4>
                            <div style={{ textAlign: "left" }} class="mt-4 mb-3">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="Name" required />
                            </div>
                            <div style={{ textAlign: "left" }} class="mb-3">
                                <label for="dob">Date Of Birth</label>
                                <input type="date" class="form-control" id="dob" name="dob" required />
                            </div>
                            <div style={{ textAlign: "left" }} class="mb-3">
                                <label for="gender">Gender</label><br />
                                <label for="male">Male</label>&nbsp;
                                <input name="gender" id="male" type="radio" value="male" checked />&nbsp; &nbsp; &nbsp; &nbsp;
                                <label for="female">Female</label>&nbsp;
                                <input name="gender" id="female" type="radio" value="female" />
                            </div>
                            <div style={{ textAlign: "left" }} class="mb-3">
                                <label for="caste">Caste</label>
                                <select id="caste" name="caste" class="form-select" aria-label="Default select example" required>
                                    <option selected disabled hidden>Select Caste </option>
                                    <option value="General">General</option>
                                    <option value="SC/ST">SC/ST</option>
                                    <option value="OBC">OBC</option>
                                </select>
                            </div>
                            <div style={{ textAlign: "left" }} class="mb-3">
                                <label for="qualification">Qualification</label>
                                <select id="qualification" name="qualification" class="form-select" aria-label="Default select example" required>
                                    <option value="select" selected disabled hidden>Select Qualification </option>
                                    <option value="10th app">10th (Appearing)</option>
                                    <option value="10th">10th</option>
                                    <option value="12th app">12th (Appearing)</option>
                                    <option value="12th">12th</option>
                                    <option value="Diploma app">Diploma (Appearing)</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Graduation app">Graduation (Appearing)</option>
                                    <option value="Graduation">Graduation</option>
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={checkEligible}>Check Eligibility -&gt;</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <h3 className="text text-danger" id="text-div"></h3>
            </div>
        </div>
    )
}

export default Eligibility;