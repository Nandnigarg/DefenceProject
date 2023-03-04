import Hostel1 from "../assets/Hostel1.jpg";
import Hostel2 from "../assets/Hostel2.jpg";
import Hostel3 from "../assets/Hostel3.jpg";
import Hostel4 from "../assets/Hostel4.jpg";

function Hostel() {
    return (
        <div style={{ backgroundColor: "rgb(180, 225, 151)" }} className="container-fluid mt-5">
            <div style={{ textAlign: "center" }} className="container pt-5 pb-4">
                <h1 style={{ fontSize: "3rem", textAlign: "center" }} className="text text-danger">HOSTEL FACILITY</h1>
                <div className="row mt-3 pb-4">
                    <div style={{ textAlign: "left"}} className="col-md-6">
                        <h3 style={{ fontSize: "2rem", fontWeight: "bold" }} className="text text-success">RESIDENTIAL LIFE</h3>
                        <h5 style={{ color: "rgb(21, 52, 98)", fontSize: "1.7rem", fontWeight: "bold" }}>About DCG-SIP ( School Integrated Program) Hostel</h5>
                        <p style={{ fontSize: "18px", textAlign: "justify" }}>The DCG-SIP hostel is a home away from home for students, providing a comfortable and nurturing environment. The hostel offers excellent pastoral care, cosy interiors, and comfortable living rooms to ensure students feel at ease. With its tranquil campus, beautiful flora, and birdlife, the hostel offers ample green space and fresh air for students to learn and grow. Equipped with top-notch facilities and amenities such as vast study areas, dining space, and recreational facilities, the hostel provides a safe and secure environment for students in grade four and above.</p>
                        <h5 style={{ color: "rgb(21, 52, 98)", fontSize: "1.7rem", fontWeight: "bold" }}>Life in the School Hostel</h5>
                        <p style={{ fontSize: "18px", textAlign: "justify" }}>The student hostel at the school is a serene and tranquil haven that fosters a spirit of cooperation and unity among residents. This in turn leads to the development of a sense of responsibility and discipline in all aspects of their personal growth. The hostel serves as a bustling hub of academic, social, physical, and cultural activities. The rooms are thoughtfully designed to house between three to eight students of the same age group, ensuring a comfortable living space.</p>
                        <p style={{ fontSize: "18px", textAlign: "justify" }}>The school offers excellent boarding facilities that provide students with a sense of being at home in a green and hygienic environment. The boarding facilities cater to both male and female students. The campus is fully secured with round-the-clock guards on duty, making students feel secure and protected. The school ensures that students are provided with wholesome and delicious meals that are reminiscent of home-cooked food.</p>
                        <p style={{ fontSize: "18px", textAlign: "justify" }}>The House Masters, with the assistance of wardens, manage the boarding facilities with great care and attention. The school provides a conducive study schedule and remedial classes to enable students to excel academically. The students are expected to adhere to a strict code of conduct, and any instances of misconduct such as bullying, misbehaving, or bringing prohibited substances such as tobacco, alcohol, gutkha, or supari will result in disciplinary action, and in severe cases, students may be asked to leave the school. Participation in sports and games is strongly encouraged as it plays a pivotal role in the overall development of students. This participation helps in enhancing their health, team skills, confidence, and self-esteem.</p>
                        <p style={{ fontSize: "18px", textAlign: "justify" }}>Boarding life is not solely focused on work. Every second Sunday, the students enjoy a movie, and on other Sundays, students can spend some time in the library, followed by indulging in recreational activities and games for the rest of the day.</p>
                    </div>
                    <div className="col-md-6">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/u3XXOdjpKwI" title="Physical Training Session | NDA FOUNDATION | NDA Course | #motivation  #nda #dcg #viral" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <img height="auto" width="100%" src={Hostel1} alt="" className="mt-3 mb-3" />
                        <img height="auto" width="100%" src={Hostel2} alt="" />
                    </div>
                </div>
                <h3 style={{ fontSize: "2rem", fontWeight: "bold" }} className="text text-success mt-4">Hostel Schedule</h3>
                <br />
                <table className="table table-striped table-hover table-light" style={{ textAlign: "center", paddingLeft: "0", paddingRight: "0", fontWeight: "bold" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black" }}>5:30 a.m.</td>
                            <td style={{ border: "2px solid black" }}>Wake up Call</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>5:45 a.m. to 6:15 a.m.</td>
                            <td style={{ border: "2px solid black" }}>Exercise</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>6:15 a.m. to 6:45 a.m.</td>
                            <td style={{ border: "2px solid black" }}>To get Ready for School</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>6:45 a.m to 7:15 a.m.</td>
                            <td style={{ border: "2px solid black" }}>Breakfast</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>7:15 a.m. to 7:30 a.m.</td>
                            <td style={{ border: "2px solid black" }}>Roll Call by the Warden</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>7:30 a.m. to 11:00 a.m.</td>
                            <td style={{ border: "2px solid black" }}>School Classes</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>11:00 a.m. to 11:15 a.m.</td>
                            <td style={{ border: "2px solid black" }}>Refreshment Break</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>11:15 a.m. to 2.00 p.m.</td>
                            <td style={{ border: "2px solid black" }}>School Classes</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>2:00 p.m. to 2:10 p.m.</td>
                            <td style={{ border: "2px solid black" }}>Roll Call by the Warden</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>2:10 p.m to 2:25 p.m.</td>
                            <td style={{ border: "2px solid black" }}>Change into Hostel Uniform</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>2:25 p.m.to 3:00 p.m.</td>
                            <td style={{ border: "2px solid black" }}>Lunch</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>3:00 p.m. to 6:00 p.m.</td>
                            <td style={{ border: "2px solid black" }}>Coaching Classes</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>6:00 p.m. to 7:00 p.m.</td>
                            <td style={{ border: "2px solid black" }}>Evening Games</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>7:00 p.m to 7:15 p.m.</td>
                            <td style={{ border: "2px solid black" }}>Roll Call by the Warden</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>7:30 p.m. to 8:30 p.m.</td>
                            <td style={{ border: "2px solid black" }}>Dinner</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>8.30 p.m. to 8.40 p.m.</td>
                            <td style={{ border: "2px solid black" }}>Roll Call by the Warden</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>8:40 p.m. to 10.30 p.m.</td>
                            <td style={{ border: "2px solid black" }}>Self Study</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>10:30 p.m.</td>
                            <td style={{ border: "2px solid black" }}>Sleep Time</td>
                        </tr>
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-md-6">
                        <img height="auto" width="100%" src={Hostel3} alt="" />
                    </div>
                    <div className="col-md-6">
                        <img height="auto" width="100%" src={Hostel4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hostel;