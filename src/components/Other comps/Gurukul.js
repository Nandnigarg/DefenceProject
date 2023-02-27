import prospectus from "../assets/PROSPECTUS 2023-24.pdf";
import syllabus from "../assets/E-SYLLABUS.pdf";
import Background from "./Background";

function Gurukul() {
    return (
        <div className="container-fluid" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <Background text="GURUKUL" src="GURUKUL"/>
            <div style={{ textAlign: "center" }} className="container mt-5 mb-5">
                <h1 style={{ fontFamily: "cursive", fontSize: "3rem", fontWeight: "bold" }} className="text text-danger">GURUKUL</h1>
                <hr />
                <div style={{ textAlign: "left" }} className="mt-4">
                    <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold" }}>About Gurukul, Kurukshetra</h3>
                    <p style={{ fontSize: "18px" }}>In 1912, Swami Shradhanand Ji established Gurukul Kurukshetra with the vision of providing students with an education that blends modern technology with a natural environment. The campus spans over 40 acres and offers a serene setting for learning. This all-boys school conducts admissions from grade 5 to 11 through a rigorous entrance test to ensure that only the most deserving candidates are selected. With a focus on holistic development, Gurukul Kurukshetra strives to nurture students who will become successful and responsible members of society.</p>
                    <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold" }}>GURUKUL KURUKSHETRA Admissions are made to V, VI, VII, VIII, IX, and XI classes.</h3>
                    <p style={{ fontSize: "18px" }}>Typically, the entrance test for admission to the school takes place during the final week of March. The prospectus is usually released in January, and the completed form attached to the prospectus must be submitted to the school before the deadline. The admissions committee places a strong emphasis on performance in the entrance test and typically gives preference to candidates who excel in it. Both the syllabus for the test and other important information can be found in the prospectus as well as on the school's website. In addition to the entrance test, candidates must undergo a personal interview, and admission is only granted if the committee deems the candidate to be suitable. Parents are required to provide a proper medical fitness certificate for their child, and if any persistent health problems arise after admission, the student's admission may be revoked. Finally, a copy of the student's birth certificate, the school leaving certificate from their previous institution, and an attested copy of their detailed marks sheet must be submitted after the admission process has been completed.</p>
                </div>
                <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold", textAlign: "left" }}>Download Links:-</h3>
                <div className="row mt-4">
                    <div className="col-md-6 mt-3">
                        <a href={prospectus} className="text-decoration-none" download><button className="btn btn-danger">Download Prospectus</button></a>
                    </div>
                    <div className="col-md-6 mt-3">
                        <a href={syllabus} className="text-decoration-none" download><button className="btn btn-danger">Download Syllabus</button></a>
                    </div>
                </div>
                <h3 className="mt-5 mb-4" style={{ color: "rgb(21, 52, 98)", fontSize: "2.5rem", fontWeight: "bold", textAlign: "center" }}><a href="https://gurukuladmission.com/" target="_blank">Click here for Gurukul Online Admission form link</a></h3>
            </div>
        </div >
    )
}

export default Gurukul;