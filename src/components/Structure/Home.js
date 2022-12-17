import Officer from '../Other comps/Officer';
import Branch from '../Other comps/Branch';
import Form from '../Other comps/Form';
import ndaBanner from '../assets/nda banner.jpg';
import homeBanner from '../assets/home banner.jpg';
import hB1 from '../assets/hB1.jpg';
import hB2 from '../assets/hB2.jpg';
import hB3 from '../assets/hB3.jpg';

function Home() {
    const boxStyle = {
        padding: "2%",
        color: "white",
        fontWeight: "bold",
        boxShadow: "10px 15px 10px gray"
    }

    const divStyle = {
        borderRadius: "40px 0px",
        backgroundColor: "rgb(238,240,237)",
        padding: "10px",
        textAlign: "center",
        minHeight: "350px",
        boxShadow: "5px 10px 5px gray"
    }

    return (
        <div>
            <img style={{ maxWidth: "100%", height: "auto" }} src={ndaBanner} alt="" />
            <div style={{ backgroundColor: "rgb(180, 225, 151)", padding: "5% 2%" }} className="container-fluid">
                <div className="container">
                    <div style={boxStyle} className="bg bg-success">
                        <p>BEST NDA COACHING IN INDIA & Top NDA FOUNDATION COACHING IN INDIA with Schooling Subjects Coaching after 8th, 10th and NDA coaching after 12th class at Chandigarh Campus for everyone.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(242,113,0)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(242,113,0)" }}>NDA + SSB Coaching After 8th Class</h4>
                                <p>9th,10th,11th & 12th <br />
                                    Schooling+NDA+SSB, INTEGRATED PROGRAMME</p>
                                <p>Integrated Residential Programme</p>
                                <p>For 8th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(51, 47, 208)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(51, 47, 208)" }}>NDA + SSB Coaching After 9th Class</h4>
                                <p>10th,11th & 12th <br />
                                    Schooling+NDA+SSB, INTEGRATED PROGRAMME</p>
                                <p>Integrated Residential Programme</p>
                                <p>For 9th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid green", ...divStyle }} className="div">
                                <h4 style={{ color: "green" }}>NDA + SSB Coaching After 10th Class</h4>
                                <p>11th & 12th <br />
                                    Schooling+NDA+SSB, INTEGRATED PROGRAMME</p>
                                <p>Integrated Residential Programme</p>
                                <p>For 10th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(242,113,0)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(242,113,0)" }}>NDA + SSB Coaching After 11th Class</h4>
                                <p>Schooling+NDA+SSB, INTEGRATED PROGRAMME</p>
                                <p>Integrated Residential Programme</p>
                                <p>For 11th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(51, 47, 208)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(51, 47, 208)" }}>NDA + SSB Coaching After 12th Class</h4>
                                <p>Integrated Residential Programme</p>
                                <p>For 12th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid green", ...divStyle }} className="div">
                                <h4 style={{ color: "green" }}>SSB Training</h4>
                                <p>WE STRIVE FOR EXCELLENCE</p>
                                <p>By Senior Experienced Ex. SSB Officers</p>
                                <p>For More Information On SSB Training</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-md-6 mb-5">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/jrvnbWZ1rTE" title="India's No.1 Defence Academy - DCG Defence Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6 mb-5">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/l_BiGgcGeiQ" title="How to Crack NDA Exam in First Attempt! | Mr. Vatsom  - DCG Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6 mb-5">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/20MESXeYVik" title="Best Coaching Academy for NDA Exam Preparation | Shining Star of DCG Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6 mb-5">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/XLidH9HHNmo" title="Sure Shot Success Formula for SSB | Success Mantra for SSB - by Col. Puneet Sehgal (Retd.)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "rgb(180, 225, 151)", padding: "5% 2%" }} className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Nation Defence Academy</h3>
                            <p>The well-known DCG Defence Academy in Chandigarh teaches and trains
                                students for bright futures in the Army, Navy, and Airforce. The
                                finest Defense Exam Preparation is provided by DCG Defence Academy.
                                It's challenging to join any of these forces, though. Students must
                                succeed on a national admission test. Passing this admission test is
                                difficult. The DCG Academy in Chandigarh provides the best instruction
                                for defence exams. To be well-prepared for the test, students must put
                                in a lot of work, which is made feasible by Defence Coaching In Chandigarh.
                                The DCG Defence Academy can be quite helpful in this situation. For defence
                                exam preparation, DCG Defence Academy, the premier coaching academy in Chandigarh,
                                provides up-to-date study materials, a comfortable setting, and qualified teachers.</p>
                            <p>The best venue for candidates to go and prepare for the NDA and SSB is DCG
                                Defence Academy. Coaching sessions in Chandigarh are well-equipped and
                                include up-to-date resources. Our skilled crew develops cutting-edge
                                learning resources for pupils. Defense Preparation Classes in Chandigarh
                                focus on both interview skills and written test preparation. Students
                                develop confidence and are able to pass the test with ease after receiving
                                the Best Preparation In Chandigarg from DCG Defence Academy.</p>
                        </div>
                            <div style={{backgroundColor: "rgb(233,242,235)", ...boxStyle}} className="col-md-6">
                            <img height="auto" width="100%" src={homeBanner} alt="" />
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
            <Officer />
            <Branch />
            <Form />
        </div>
    )
}

export default Home;