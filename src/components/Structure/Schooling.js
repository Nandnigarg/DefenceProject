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
        <div>
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
                            <p style={{ fontSize: "18px" }}>The DCG Defense Academy Foundation is a programme created to assist
                                students in becoming future leaders of the country's armed forces. Teachers with
                                extensive knowledge and former military people mentor young brains. Complete two
                                years of personal development coursework in addition to your NDA training. The
                                NDA foundation programme in Chandigarh focuses on giving students the finest
                                training possible while they are still enrolled in school. The goal of the this
                                foundation course is to thoroughly prepare the student to take the NDA exam after
                                finishing school.</p>
                            <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold" }}>NDA Preparation After 10th Class In Chandigarh</h3>
                            <p style={{ fontSize: "18px" }}>DCG Defence Academy provides a specific coordinator for NDA trainers who was trained
                                by applicants who are ready to be led by excellence. A group of highly qualified
                                academic staff members and former military officers instruct NDA-SIP sessions. This
                                Institute provides supplemental lessons and doubt sessions for weak pupils.
                                Instructors and experts here instruct students on how to join NDA following the
                                tenth grade.</p>
                        </div>
                        <div style={{ backgroundColor: "rgb(233,242,235)", ...boxStyle }} className="col-md-6">
                            <img height="auto" width="100%" src={schoolBanner} alt="" />
                            <video className="mt-2" height="auto" width="100%" src={schoolVideo} controls></video>
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