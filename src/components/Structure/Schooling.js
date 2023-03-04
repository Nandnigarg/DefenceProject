import Officer from "../Other comps/Officer";
import Form from "../Other comps/Form";
import ndaBanner from '../assets/main banner.jpg';
import FB1 from '../assets/FB1.jpg';
import FB2 from '../assets/FB2.jpg';
import schoolVideo from "../assets/schoolVideo.mp4";
import schoolBanner from "../assets/schooling banner.jpg";

function Schooling() {
    const boxStyle = {
        padding: "2%",
        color: "white",
        fontWeight: "bold",
        boxShadow: "10px 15px 10px gray"
    }

    return (
        <div style={{textAlign: "justify"}}>
            <img width="100%" height="auto" style={{ maxHeight: "670px" }} src={ndaBanner} alt="" />
            <div style={{ backgroundColor: "rgb(180, 225, 151)", padding: "5% 2%", textAlign: "center" }} className="container-fluid">
                <div className="container">
                    <h1 className="text text-danger mb-4">Teaching and Training on the Pattern of Military School</h1>
                    <hr className="bg bg-danger" />
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img width="100%" height="auto" style={{ maxHeight: "400px" }} className="mt-2" src={FB1} alt="" />
                        </div>
                        <div className="col-md-6">
                            <img width="100%" height="auto" style={{ maxHeight: "400px" }} className="mt-2" src={FB2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold" }}>NDA With Schooling Program</h3>
                            <p style={{ fontSize: "18px" }}>The DCG Defense Academy Foundation is an exclusive program designed to help students become the next generation of leaders in the country's armed forces. This program provides a unique opportunity for students to receive guidance and mentoring from experienced teachers and former military personnel, who share their knowledge and expertise to help students excel in their academic pursuits and personal growth.</p>
                            <p style={{ fontSize: "18px" }}>In addition to the rigorous NDA training, students who enroll in the Foundation are required to complete two years of personal development coursework. The program is designed to provide students with the skills and knowledge necessary to excel in the NDA exam after completing their school education. The NDA foundation program in Chandigarh is one of the most prominent examples of the Foundation's commitment to providing top-notch training and support to its students. The program is tailored to meet the specific needs of students, providing them with the best possible training while they are still enrolled in school. The ultimate goal of the foundation course is to equip students with the necessary knowledge and skills to become successful leaders in the armed forces.</p>
                            <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold" }}>NDA Preparation After 10th Class In Chandigarh</h3>
                            <p style={{ fontSize: "18px" }}>At DCG Defence Academy, there is a dedicated coordinator for NDA training who has been trained to lead applicants to excellence. The academy boasts a team of highly qualified academic staff members and former military officers who conduct NDA-SIP sessions. The academy also offers additional lessons and doubt sessions for weaker students. The instructors and experts at the academy guide students on how to join NDA after completing their tenth-grade education.</p>
                        </div>
                        <div style={{ backgroundColor: "rgb(233,242,235)", ...boxStyle }} className="col-md-6">
                            <img className="mt-3 mb-2" height="auto" width="100%" src={schoolBanner} alt="" />
                            <video className="mt-3" height="auto" width="100%" src={schoolVideo} controls></video>
                        </div>
                    </div>
                </div>
            </div>
            <Officer />
            <Form />
        </div>
    )
}

export default Schooling;