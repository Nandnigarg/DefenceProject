import Officer from "../Other comps/Officer";
import Form from "../Other comps/Form";
import ndaBanner from '../assets/main banner.jpg';
import schoolingBanner from '../assets/schooling banner.jpg';
import hB1 from '../assets/hB1.jpg';
import hB2 from '../assets/hB2.jpg';
import hB3 from '../assets/hB3.jpg';
import FB1 from '../assets/FB1.jpg';
import FB2 from '../assets/FB2.jpg';
import Hostel1 from "../assets/Hostel1.jpg";
import Hostel2 from "../assets/Hostel2.jpg";
// import Hostel3 from "../assets/Hostel3.jpg";
// import Hostel4 from "../assets/Hostel4.jpg";

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
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img width="100%" height="auto" style={{maxHeight: "400px"}} src={FB1} alt="" />
                        </div>
                        <div className="col-md-6">
                            <img width="100%" height="auto" style={{maxHeight: "400px"}} src={FB2} alt="" />
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
                            <img width="100%" height="auto" style={{ maxHeight: "500px" }} src={schoolingBanner} alt="" />
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <img height="auto" width="100%" src={hB1} alt="" />
                                </div>
                                <div className="col-md-4">
                                    <img height="auto" width="100%" src={hB2} alt="" />
                                </div>
                                <div className="col-md-4">
                                    <img height="auto" width="100%" src={hB3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "rgb(180, 225, 151)" }} className="container-fluid mt-5">
                <div style={{textAlign: "center"}} className="container pt-5 pb-4">
                    <h1 style={{ fontSize: "3rem", textAlign: "center" }} className="text text-danger">HOSTEL FACILITY</h1>
                    <div className="row mt-3 pb-4">
                        <div style={{textAlign: "left"}} className="col-md-6">
                            <h3 style={{ fontSize: "2rem", fontWeight: "bold" }} className="text text-success">RESIDENTIAL LIFE</h3>
                            <h5 style={{ color: "rgb(21, 52, 98)", fontSize: "1.7rem", fontWeight: "bold" }}>About DCG-SIP ( School Integrated Program) Hostel</h5>
                            <p style={{ fontSize: "18px" }}>The Hostel is the second home for a child, where he/she feels comfortable and spends
                                most of the time. DCG-SIP hostel provides excellent pastoral care, cosy interiors
                                and comfortable living rooms. The school's tranquil campus with its beautiful flora
                                and bird life provide students with ample green space and fresh air where they are
                                able to live and learn. The hostel facility is available to students of grade four
                                and above. There are cordoned off buildings equipped with excellent facilities and
                                amenities such as vast study areas, dining space and recreational facilities.</p>
                            <h5 style={{ color: "rgb(21, 52, 98)", fontSize: "1.7rem", fontWeight: "bold" }}>Life in the School Hostel</h5>
                            <p style={{ fontSize: "18px" }}>The school hostel provides residents with a peaceful and calm environment, creating an
                                atmosphere of harmony and co-operation amongst them, which in turn inculcate the sense
                                of responsibility and discipline in every aspect of their personality development.
                                The hostel is a hub of academic, social, physical and cultural activities. The students
                                dwell in a healthy environment that helps them to grow and learn without any obstacle.
                                Rooms are designed to accommodate three to eight students from the same age group in one
                                room.</p>
                            <p style={{ fontSize: "18px" }}>School has excellent boarding facilities that give the students a feel of home away from
                                home in a green and clean environment. The school provides boarding facilities for both
                                only till date. Students can feel safe within the walls of the campus as the campus is
                                fully secured with round the clock guards on duty. Students are also provided with healthy
                                and scrumptious home-like food during their stay.</p>
                            <p style={{ fontSize: "18px" }}>The boarding is well administered by the House Masters, who is assisted by warden.
                                The study schedules and remedial classes at School give a great opportunity for Students to 
                                flourish academically. Students also follow a strict code of rules, and it should be noted 
                                that any form of misconduct (bullying, misbehaving, bringing banned substances like 
                                tobacco, alcohol, gutkha, supari etc.) will result in strict disciplinary action and the 
                                students may be asked to leave the school. Sports and games are quintessential for the overall 
                                development of Students. As such, all students are encouraged to participate in different 
                                sporting activities to improve their health, team-skills, confidence and self-esteem.</p>
                            <p style={{ fontSize: "18px" }}>Boarding life is not all about work. Every second Sunday, the students enjoy a movie. 
                                On Sundays, Risers spend some time in the library, and the remaining day is spent 
                                playing games and in recreational activities.</p>
                        </div>
                        <div className="col-md-6">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/u3XXOdjpKwI" title="Physical Training Session | NDA FOUNDATION | NDA Course | #motivation  #nda #dcg #viral" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <img height="auto" width="100%" src={Hostel1} alt="" className="mt-3 mb-3" />
                            <img height="auto" width="100%" src={Hostel2} alt="" />
                        </div>
                    </div>
                    <h3 className="text text-dark mt-5">View Schedule</h3>
                </div>
            </div>
            <Officer />
            <Form />
        </div>
    )
}

export default Schooling;