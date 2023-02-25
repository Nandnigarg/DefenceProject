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
                        <p>Delhi Career Group's DCG Defence Academy provides top-tier coaching for defense entrance 
                            exams in India. They specialize in preparing candidates for the NDA Written, Physical, 
                            and SSB of the examination. Additionally, they offer a Foundation Batch that includes 
                            NDA entrance exam preparation and a CBSE Residential School Integrated Program. These 
                            programs aim to provide a comprehensive approach to preparing students for a career 
                            in defense. The DCG Defence Academy is committed to delivering exceptional coaching 
                            that ensures students are well-prepared to succeed in their chosen field.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(242,113,0)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(242,113,0)" }}>NDA + SSB coaching after 8th Class</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>9th,10th,11th & 12th <br />
                                    CBSE Residential School + NDA (Written & SSB) - INTEGRATED PROGRAMME</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Integrated Residential Programme</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 8th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(51, 47, 208)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(51, 47, 208)" }}>NDA + SSB coaching after 9th Class</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>10th,11th & 12th <br />
                                    CBSE Residential School + NDA (Written & SSB) - INTEGRATED PROGRAMME</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Integrated Residential Programme</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 9th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid green", ...divStyle }} className="div">
                                <h4 style={{ color: "green" }}>NDA + SSB coaching after 10th Class</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>11th & 12th <br />
                                    CBSE Residential School + NDA (Written & SSB) - INTEGRATED PROGRAMME</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Integrated Residential Programme</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 10th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(242,113,0)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(242,113,0)" }}>NDA + SSB coaching after 11th Class</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>CBSE Residential School + NDA (Written & SSB) - INTEGRATED PROGRAMME</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Integrated Residential Programme</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 11th Passed Students</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(51, 47, 208)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(51, 47, 208)" }}>NDA coaching classes</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}><b style={{fontSize: "25px"}}>NDA Target Batch</b> <br/> Written + Physical + SSB & Interview</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 12th Appearing & Passout Students</p>
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
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(242,113,0)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(242,113,0)" }}>Sainik & Military School Admission Entrance Coaching Only</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Sainik School - AISSEE for 6th & 9th entry</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Rashtriya Military School - RMS for 6th & 9th entry</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Rashtriya Indian Military College - RIMC for 8th entry</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(51, 47, 208)", ...divStyle }} className="div">
                            <h4 style={{ color: "rgb(51, 47, 208)" }}>Residential CBSE School Programme with Entrance Exam Coaching</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Sainik School - AISSEE for 6th & 9th entry</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Rashtriya Military School - RMS for 6th & 9th entry</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Rashtriya Indian Military College - RIMC for 8th entry</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid green", ...divStyle }} className="div">
                                <h4 style={{ color: "green" }}>AFPI School Admission Entrance Exam Coaching</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Maharaja Ranjit Singh Armed Force Preparatory Institute (APFI)</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Gurukul</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Army Public School</p>
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
                        <h3 style={{ color: "rgb(198,3,12)", fontSize: "3rem", fontWeight: "bold" }}>ABOUT US</h3>
                    </div>
                    <p style={{ fontSize: "18px", color: "rgb(23,77,4)", fontWeight: "bold" }}>DCG Defence Academy, a defense unit of \
                    Delhi Career Group, is renowned for providing exceptional education and training to 
                    students aspiring to join the NDA, Army, Navy, and Air Force. We also prepare students 
                    for entrance exams into various Armed Forces Preparatory Institute (AFPI) schools in 
                    India, such as Sainik School, Rashtriya Military School, Rashtriya Indian Military 
                    College (RIMC), and Army Public School (APS). Our academy offers top-notch Defense 
                    Entrance Exam Preparation for written, physical, interview, and SSB exams, which can 
                    help students achieve their dream careers in these elite forces.</p>
                    <p style={{ fontSize: "18px", color: "rgb(23,77,4)", fontWeight: "bold" }}>While the 
                    national admission test to qualify for these forces is incredibly challenging, our
                     academy provides the best guidance and resources to ensure that students pass the 
                     test with flying colors. Preparing for defense exams requires extensive effort, 
                     and our coaching program makes it feasible for students to put in the hard work 
                     required to succeed. Our premier coaching academy provides up-to-date study materials, 
                     a comfortable learning environment, and qualified teachers to help students prepare 
                     for the NDA and SSB exams.</p>
                    <p style={{ fontSize: "18px", color: "rgb(23,77,4)", fontWeight: "bold" }}>Our coaching 
                    sessions are well-equipped with cutting-edge learning resources that our skilled team 
                    has developed for pupils. Our Defense Preparation Classes offer comprehensive training 
                    that focuses on both written test preparation, physical training, and SSB & Interview 
                    skills. With the best training and guidance from our academy, students develop 
                    confidence and can pass the test with ease.</p>
                    <p style={{ fontSize: "18px", color: "rgb(23,77,4)", fontWeight: "bold" }}>In 
                    summary, our Academy is the best venue for candidates looking to prepare for 
                    defense exams. We pride ourselves on providing exceptional education and training 
                    to aspiring defense personnel.</p>
                </div>
            </div>
            <Officer />
            <Form />
        </div>
    )
}

export default Home;