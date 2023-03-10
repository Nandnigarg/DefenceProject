import Officer from '../Other comps/Officer';
import mainBanner from '../assets/nda banner.jpg';
import { Link } from 'react-router-dom';
import Background from "../Other comps/Background";

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
            <Background text="India's Best NDA Coaching Academy" t2="Teaching and Training on the Pattern of Military School" src="ENQUIRY FORM" />
            <img width="100%" height="auto" style={{ maxHeight: "670px" }} src={mainBanner} alt="" />
            <div style={{ backgroundColor: "rgb(180, 225, 151)", padding: "5% 2%" }} className="container-fluid">
                <div className="container">
                    <div style={boxStyle} className="bg bg-success">
                        <p style={{ textAlign: "justify", fontSize: "20px" }}>Delhi Career Group's DCG Defence Academy provides top-tier coaching for defense entrance
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
                                <Link exact to="/nda-after-8th" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className="btn text text-light" style={{ backgroundColor: "rgb(242,113,0)" }}>Know More -&gt;</button></Link>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(51, 47, 208)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(51, 47, 208)" }}>NDA + SSB coaching after 9th Class</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>10th,11th & 12th <br />
                                    CBSE Residential School + NDA (Written & SSB) - INTEGRATED PROGRAMME</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Integrated Residential Programme</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 9th Passed Students</p>
                                <Link exact to="/nda-after-9th" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className="btn text text-light" style={{ backgroundColor: "rgb(51, 47, 208)" }}>Know More -&gt;</button></Link>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid green", ...divStyle }} className="div">
                                <h4 style={{ color: "green" }}>NDA + SSB coaching after 10th Class</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>11th & 12th <br />
                                    CBSE Residential School + NDA (Written & SSB) - INTEGRATED PROGRAMME</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Integrated Residential Programme</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 10th Passed Students</p>
                                <Link exact to="/nda-after-10th" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className="btn text text-light" style={{ backgroundColor: "green" }}>Know More -&gt;</button></Link>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(242,113,0)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(242,113,0)" }}>NDA + SSB coaching after 11th Class</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>CBSE Residential School + NDA (Written & SSB) - INTEGRATED PROGRAMME</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Integrated Residential Programme</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 11th Passed Students</p>
                                <Link exact to="/nda-after-11th" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className="btn text text-light" style={{ backgroundColor: "rgb(242,113,0)" }}>Know More -&gt;</button></Link>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(51, 47, 208)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(51, 47, 208)" }}>NDA coaching classes</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}><b style={{ fontSize: "25px" }}>NDA Target Batch</b> <br /> Written + Physical + SSB & Interview</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For 12th Appearing & Passout Students</p>
                                <button className="btn text text-light" style={{ backgroundColor: "rgb(51, 47, 208)" }}>Know More -&gt;</button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid green", ...divStyle }} className="div">
                                <h4 style={{ color: "green" }}>SSB Training</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>WE STRIVE FOR EXCELLENCE</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>By Senior Experienced Ex. SSB Officers</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>For More Information On SSB Training</p>
                                <button className="btn text text-light" style={{ backgroundColor: "rgb(242,113,0)" }}>Know More -&gt;</button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(242,113,0)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(242,113,0)" }}>Sainik & Military School Admission Entrance Coaching Only</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Sainik School - AISSEE for 6th & 9th entry <Link exact to="/aissee" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>Know More -&gt;</Link></p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Rashtriya Military School - RMS for 6th & 9th entry</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Rashtriya Indian Military College - RIMC for 8th entry</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid rgb(51, 47, 208)", ...divStyle }} className="div">
                                <h4 style={{ color: "rgb(51, 47, 208)" }}>Residential CBSE School Programme with Entrance Exam Coaching</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Sainik School - AISSEE for 6th & 9th entry <Link exact to="/aissee" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>Know More -&gt;</Link></p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Rashtriya Military School - RMS for 6th & 9th entry</p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Rashtriya Indian Military College - RIMC for 8th entry</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div style={{ border: "3px solid green", ...divStyle }} className="div">
                                <h4 style={{ color: "green" }}>AFPI School Admission Entrance Exam Coaching</h4>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Maharaja Ranjit Singh Armed Force Preparatory Institute <Link exact to="/afpi" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>Know More -&gt;</Link></p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Gurukul <Link exact to="/gurukul" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>Know More -&gt;</Link></p>
                                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Army Public School <Link exact to="/army-public-school" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>Know More -&gt;</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="mt-5 mb-2" style={{ textAlign: "center" }}>
                        <h3 style={{ color: "rgb(198,3,12)", fontSize: "3rem", fontWeight: "bold" }}>NDA COACHING</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <p style={{ fontSize: "20px", textAlign: "justify" }}>DCG Defence Academy is revolutionizing the way students prepare for the NDA entrance exam by offering an integrated in-school classroom contact program for boys and girls. The academy, under the guidance of retired DEFENCE OFFICERS, provides specialized coaching in the school campus premises with hostel facilities within the campus area to ensure the safety of the students.</p>
                    <p style={{ fontSize: "20px", textAlign: "justify" }}>The programme is designed to help students prepare for NDA and CBSE school board exams simultaneously. This saves the time, money and effort of students and parents, which they would otherwise spend on migration to other cities for specialized coaching.</p>
                    <p style={{ fontSize: "20px", textAlign: "justify" }}>DCG Defence Academy is the top-ranked institute in the list of top 10 nda coaching institutes in India. The academy provides the best nda coaching in India for students who want to combine their NDA coaching with school. It offers NDA schooling, defence school, NDA foundation courses after 10th, NDA preparation after 10th, NDA 12th, and NDA ki Taiyari.</p>
                    <p style={{ fontSize: "20px", textAlign: "justify" }}>The core objective of the course is to expand the reach of DCG Defence Academy's expertise in NDA training to students from various parts of the country. It aims to benefit the students by providing them with adequate exposure to specialized coaching, physical training, and SSB classes.</p>
                    <p style={{ fontSize: "20px", textAlign: "justify" }}>The integrated program helps students imbibe fundamental concepts of Physics, Chemistry, Mathematics, GK, English, and sharpens their analytical skills and parallel thinking process, making them capable of creatively resolving complex and tricky problems by mere application of basic concepts. It prepares them for a quantum jump in their performance in NDA Preparation after 12th, and enables them to excel not only in NDA but also in X and XII Board Exams.</p>
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
                <div className="container" style={{ textAlign: "justify" }}>
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ color: "rgb(198,3,12)", fontSize: "3rem", fontWeight: "bold" }}>ABOUT US</h3>
                    </div>
                    <p style={{ fontSize: "20px", color: "rgb(23,77,4)", fontWeight: "bold" }}>DCG Defence Academy, a defense unit of
                        Delhi Career Group, is renowned for providing exceptional education and training to
                        students aspiring to join the NDA, Army, Navy, and Air Force. We also prepare students
                        for entrance exams into various Armed Forces Preparatory Institute (AFPI) schools in
                        India, such as Sainik School, Rashtriya Military School, Rashtriya Indian Military
                        College (RIMC), and Army Public School (APS). Our academy offers top-notch Defense
                        Entrance Exam Preparation for written, physical, interview, and SSB exams, which can
                        help students achieve their dream careers in these elite forces.</p>
                    <p style={{ fontSize: "20px", color: "rgb(23,77,4)", fontWeight: "bold" }}>While the
                        national admission test to qualify for these forces is incredibly challenging, our
                        academy provides the best guidance and resources to ensure that students pass the
                        test with flying colors. Preparing for defense exams requires extensive effort,
                        and our coaching program makes it feasible for students to put in the hard work
                        required to succeed. Our premier coaching academy provides up-to-date study materials,
                        a comfortable learning environment, and qualified teachers to help students prepare
                        for the NDA and SSB exams.</p>
                    <p style={{ fontSize: "20px", color: "rgb(23,77,4)", fontWeight: "bold" }}>Our coaching
                        sessions are well-equipped with cutting-edge learning resources that our skilled team
                        has developed for pupils. Our Defense Preparation Classes offer comprehensive training
                        that focuses on both written test preparation, physical training, and SSB & Interview
                        skills. With the best training and guidance from our academy, students develop
                        confidence and can pass the test with ease.</p>
                    <p style={{ fontSize: "20px", color: "rgb(23,77,4)", fontWeight: "bold" }}>In
                        summary, our Academy is the best venue for candidates looking to prepare for
                        defense exams. We pride ourselves on providing exceptional education and training
                        to aspiring defense personnel.</p>
                </div>
            </div>
            <Officer />
        </div>
    )
}

export default Home;