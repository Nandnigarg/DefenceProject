import { Helmet } from "react-helmet";
import Background from "./Background";

function Mns() {
    return (
        <div className="container-fluid" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <Helmet>
                <title>Military Nursing Services (MNS)</title>
            </Helmet>
            <Background text="Military Nursing Services (MNS)" src="Military Nursing Services (MNS)"/>
            <div className="container mt-5 mb-4" style={{ textAlign: "justify" }}>
                <h1 style={{ fontFamily: "cursive", fontSize: "3rem", fontWeight: "bold", textAlign: "center" }} className="text text-danger">Military Nursing Services (MNS)</h1>
                <hr />
                <br /><br />
                <p style={{ fontSize: "18px" }}>The Military Nursing Service (MNS) is a specialized branch of the armed forces in many countries, dedicated to providing nursing care and support to military personnel, veterans, and their families. Military nurses are responsible for providing medical care, including assessment, treatment, and monitoring of patients within the military healthcare system. They are trained to respond to emergencies, trauma situations, and mass casualty incidents both in peacetime and during armed conflicts.</p>
                <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "1.7rem", fontWeight: "bold" }}>Eligibility Conditions</h3>
                <p style={{ fontSize: "18px" }}><b>Female candidates-</b> who are unmarried/divorcee/legally separated/widow without encumbrances.</p>
                <p style={{ fontSize: "18px" }}><b>Nationality-</b> Citizen of India</p>
                <p style={{ fontSize: "18px" }}><b>Educational background-</b> Educational background. The candidate must have earned at least 50% of the total possible marks in Physics, Chemistry, Biology (Botany & Zoology), and English in the Senior Secondary Examination (10+2) or equivalent (12 Years of Schooling) on their FIRST ATTEMPT from a Statutory/Recognized Board/University/Examining Body.</p>
                <p style={{ fontSize: "18px" }}><b>Physical Standards-</b> The medical board will determine a student's medical fitness for admission to the BSc (Nursing) program based on the standards and criteria that have been established and may be modified from time to time. The minimum height requirement for female applicants to join the military is 152 cm. Candidates from the Hill and North Eastern States must be at least 147 cm tall to be accepted. For candidates who were under 18 years old when the exam was administered, a growth allowance of 2 cm was provided.</p>
                <p style={{ fontSize: "18px" }}><b>Candidates for the BSc Nursing program at AFMS institutions must pass the National Testing Agency (NTA)-conducted NEET (UG) 2022 examination in order to be considered for admission.</b></p>
                <p style={{ fontSize: "18px" }}><b>SC/ST Candidates:</b> Candidates who are members of the SC/ST community must have an SC/ST certificate that has been granted by a competent official with at least the rank of 1st class magistrate, tehsildar, or sub-divisional officer in the neighborhood where the candidate and/or her family typically dwell.</p>
                <p style={{ fontSize: "18px" }}>NCC 'C' Candidates, who have qualified NCC 'C', are required to upload their NCC 'C' certificate.</p>
                <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "1.7rem", fontWeight: "bold" }}>Screening Process:</h3>
                <p style={{ fontSize: "18px" }}><b>Shortlisting of candidates:-</b> The shortlisted individuals must appear for the ToGIGE, Psychological Assessment, Interview, and Medical Examination at Base Hospital Delhi Cantt. You can download the same exam admit card from the website mentioned above.</p>
                <p style={{ fontSize: "18px" }}><b>Verification of Documents:-</b> At the time of the screening procedure at BHDC, all selected candidates will be asked to present the originals of all documents stated on the admission card. The candidate must present an original receipt from the organization where the original documents are deposited if she is not in possession of the original certificates at the time of screening. The candidates must additionally make a commitment to this effect that they would present all original certificates at the time of admission.</p>
                <p style={{ fontSize: "18px" }}><b>Test of General Intelligence & General English (TOGIGE):-</b> The Test of General Intelligence & General English (TOGIGE) will be a computer-based test (CBT) with a maximum of 80 points and 40 multiple-choice questions (MCQs) worth two points each. Every wrong response will result in a penalty of 0.5 marks. You will have 30 minutes to respond to these 40 questions.</p>
                <p style={{ fontSize: "18px" }}><b>Psychological Assessment and Interview:-</b> At Base Hospital in Delhi Cantt, a Board of Officers will conduct psychological testing and interviews with those candidates who have been shortlisted. Questions on the candidates' interests, hobbies, and knowledge of current events may be asked, as well as questions about the key topics up to grade XII.</p>
                <p style={{ fontSize: "18px" }}><b>Medical Examination:-</b> All applicants must meet medical standards while also taking into account the particular training specifications, the job description, and the level of fitness required of applicants for MNS. At Base Hospital in Delhi Cantt, all candidates who have been shortlisted will go through the Special Medical Board (SMB). After the medical examination is over, candidates will be told of their medical status. Candidates who have been deemed UNFIT by the medical board may appeal the ruling by paying a fee of Rs 40/- (Rupees Forty Only) through MRO. The candidate must deliver the application and a receipted copy of the MRO and report to the relevant hospital within 24 hours of the SMB date for the Appeal Medical Board (AMB).</p>
                <p style={{ fontSize: "18px" }}><b>Final Selection:-</b> Subject to medical fitness, a candidate will be chosen based on the combined merit of their NEET (UG) 2023 scores, TOGIGE results, psychological assessment, and interview. Colleges will be assigned to the chosen candidates based on the merit list and the merit cum choice, subject to seats being available at each college.</p>
                <div className="row">
                    <div className="col-sm-6 mt-3"><iframe width="95%" height="400" src="https://www.youtube.com/embed/94-JL7IXX54" title="MNS 2021 Notification Update | Eligibility Criteria | How to Apply MNS Exam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                    <div className="col-sm-6 mt-3"><iframe width="95%" height="400" src="https://www.youtube.com/embed/jhc3cl7RraE" title="How to Become a Doctor in Indian Tri Forces | Army | Navy | Airforce" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                </div>
            </div>
        </div>
    )
}

export default Mns;