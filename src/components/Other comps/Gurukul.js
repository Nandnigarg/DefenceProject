import prospectus from "../assets/PROSPECTUS 2023-24.pdf";
import syllabus from "../assets/E-SYLLABUS.pdf";
import Background from "./Background";

function Gurukul() {
    return (
        <div className="container-fluid" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <Background text="GURUKUL"/>
            <div style={{ textAlign: "center" }} className="container mt-5 mb-5">
                <h1 style={{ fontFamily: "cursive", fontSize: "3rem", fontWeight: "bold" }} className="text text-danger">GURUKUL</h1>
                <hr />
                <div style={{ textAlign: "left" }} className="mt-4">
                    <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold" }}>About Gurukul, Kurukshetra</h3>
                    <p style={{ fontSize: "18px" }}>Gurukul Kurukshetra was founded in 1912 by Swami Shradhanand Ji
                        with the aim to teach students within a natural environment following the latest
                        technology. Its campus is spread over an area of 40 acres. It's mainly boys school and
                        admissions are conducted from class 5 to 11 through an entrance test.</p>
                    <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold" }}>GURUKUL KURUKSHETRA Admissions are made to V, VI, VII, VIII, IX, and XI classes.</h3>
                    <p style={{ fontSize: "18px" }}>Date of entrance test generally falls in the
                        last week of March. Prospectus is released in the month of January. Form duly
                        filled attached in the prospectus is submitted in the school before the last
                        date. Preference in admission is given to the candidate excelling in entrance
                        test. The syllabus for the entrance test is given in the prospectus as well
                        as on the website. Candidates have to undergo a personal interview in addition
                        to the entrance test. Admission is granted only when the candidate satisfies
                        the committee meant for the purpose. Parents are required to submit proper
                        medical fitness certificate of their ward. If symptoms of persistent health
                        problem are noticed at any stage after admission, the admission of student
                        will be rejected. A copy of birth certificate, school leaving certificate
                        of the previous institution and attested copy of the detailed marks sheet
                        are submitted after the admission.</p>
                </div>
                <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold", textAlign: "left" }}>Download Links:-</h3>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <a href={prospectus} className="text-decoration-none" download><button className="btn btn-danger">Download Prospectus</button></a>
                    </div>
                    <div className="col-md-6">
                        <a href={syllabus} className="text-decoration-none" download><button className="btn btn-danger">Download Syllabus</button></a>
                    </div>
                </div>
                <h3 className="mt-5 mb-4" style={{ color: "rgb(21, 52, 98)", fontSize: "2.5rem", fontWeight: "bold", textAlign: "center" }}><a href="https://gurukuladmission.com/" target="_blank">Click here for Gurukul Online Admission form link</a></h3>
            </div>
        </div >
    )
}

export default Gurukul;