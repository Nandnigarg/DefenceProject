import Officer from '../Other comps/Officer';
import Form from '../Other comps/Form';
import mainBanner from '../assets/nda banner.jpg';

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
            <img width="100%" height="auto" style={{ maxHeight: "670px" }} src={mainBanner} alt="" />
            <div style={{ backgroundColor: "rgb(180, 225, 151)", padding: "5% 2%" }} className="container-fluid">
                <div className="container">
                    <div style={boxStyle} className="bg bg-success">
                        <p>Delhi Career Group offers the BEST NDA COACHING & Top NDA FOUNDATION COACHING IN INDIA with Schooling Subjects Coaching starting immediately after 8th, 10th and NDA coaching after 12th class for everyone.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(242,113,0)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(242,113,0)" }}>NDA + SSB Coaching After 8th Class</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>9th,10th,11th & 12th <br />
                                    Schooling+NDA+SSB, INTEGRATED PROGRAMME</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Integrated Residential Programme</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 8th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(51, 47, 208)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(51, 47, 208)" }}>NDA + SSB Coaching After 9th Class</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>10th,11th & 12th <br />
                                    Schooling+NDA+SSB, INTEGRATED PROGRAMME</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Integrated Residential Programme</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 9th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid green", ...divStyle }} className="div">
                                <h4 style={{ color: "green" }}>NDA + SSB Coaching After 10th Class</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>11th & 12th <br />
                                    Schooling+NDA+SSB, INTEGRATED PROGRAMME</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Integrated Residential Programme</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 10th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(242,113,0)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(242,113,0)" }}>NDA + SSB Coaching After 11th Class</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Schooling+NDA+SSB, INTEGRATED PROGRAMME</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Integrated Residential Programme</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 11th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(51, 47, 208)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(51, 47, 208)" }}>NDA + SSB Coaching After 12th Class</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Integrated Residential Programme</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 12th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid green", ...divStyle }} className="div">
                                <h4 style={{ color: "green" }}>SSB Training</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>WE STRIVE FOR EXCELLENCE</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>By Senior Experienced Ex. SSB Officers</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For More Information On SSB Training</p>
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
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ color: "rgb(198,3,12)", fontSize: "3rem", fontWeight: "bold" }}>DCG Defence Academy</h3>
                        <h5 style={{ color: "rgb(198,3,12)", fontSize: "1.5rem", fontWeight: "bold" }}>Unit of Delhi Career Group</h5>
                    </div>
                    <p style={{ fontSize: "18px", color: "rgb(23,77,4)", fontWeight: "bold" }}>The well-known DCG Defence Academy in Chandigarh teaches and trains
                        students for bright futures in the Army, Navy, and Airforce. The
                        finest Defense Exam Preparation is provided by our Academy.
                        It's challenging to join any of these forces, though. Students must
                        succeed on a national admission test. Passing this admission test is
                        difficult. Our provides the best instructionfor defence exams. To be
                        well-prepared for the test, students must put in a lot of work, which
                        is made feasible by our Coaching. This Academy can be quite helpful
                        in this situation. For defence exam preparation, our premier coaching
                        academy,provides up-to-date study materials, a comfortable setting,
                        and qualified teachers.</p>
                    <p style={{ fontSize: "18px", color: "rgb(23,77,4)", fontWeight: "bold" }}>This is
                        the best venue for candidates to go and prepare for the NDA and SSB.
                        Coaching sessions here are well-equipped and include up-to-date
                        resources. Our skilled crew develops cutting-edge learning resources for
                        pupils. Defense Preparation Classes focus on both interview
                        skills and written test preparation. Students develop confidence and are able
                        to pass the test with ease after receiving the best training from our
                        academy.</p>
                </div>
            </div>
            <Officer />
            <Form />
        </div>
    )
}

export default Home;