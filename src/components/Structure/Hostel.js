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
                    <div style={{ textAlign: "left" }} className="col-md-6">
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