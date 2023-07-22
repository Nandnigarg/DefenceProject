import { Link } from 'react-router-dom';
import "../Structure/glow.css";
import { Helmet } from "react-helmet";
import Background from './Background';
import SH1 from "../assets/SH1.jpg";
import SH2 from "../assets/SH2.jpg";
import SH3 from "../assets/SH3.jpg";

function NdaCoaching() {
    return (
        <div className="container-fluid" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <Helmet>
                <title>NDA Coaching in Chandigarh | NDA Coaching in Delhi - Delhi Career Group</title>
                <meta name="description" content="1.  NDA coaching in Chandigarh: Delhi Career Group is the top leading brand of Chandigarh for NDA Exam Preparation. Offer study materials, Current Affairs and test series are updated as per NDA Exam Pattern. 2. Delhi Career Group is the Best NDA Coaching Institute in Chandigarh. Delhi Career Group is one of the top NDA coaching Centre in Chandigarh." />
            </Helmet>
            <Background text="India's Best NDA Coaching Academy" t3="Teaching and Training on the Pattern of Military School" src="ENQUIRY FORM" />
            <div className="container mt-5 mb-5" style={{ textAlign: "justify" }}>
                <div style={{ backgroundColor: "rgb(0,100,0)" }} className='row p-4 m-2 mb-4'>
                    <h1 className='mb-3' style={{ fontFamily: "cursive", fontSize: "2.3rem", fontWeight: "bold", textAlign: "center", color: "rgb(255,255,0)" }}><span style={{ color: "white" }}>Best</span> NDA Coaching in India</h1>
                    <div className='col-md-6'>
                        <p style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(252,248,0)", fontSize: "17px", fontWeight: "bold", borderRadius: "10px" }} className='p-3 glow-btn m-3'>NDA Classes & Training With Hostel & Ground Facility for DCG Students</p>
                        <p style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(252,248,0)", fontSize: "17px", fontWeight: "bold", borderRadius: "10px" }} className='p-3 glow-btn m-3'>Campus Hostel / Ground Facility For NDA Students with Safe Environment</p>
                        <p style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(252,248,0)", fontSize: "17px", fontWeight: "bold", borderRadius: "10px" }} className='p-3 glow-btn m-3'>1 - Year / 6 Months / 3 Months NDA Preparation Courses</p>
                        <p style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(252,248,0)", fontSize: "17px", fontWeight: "bold", borderRadius: "10px" }} className='p-3 glow-btn m-3'>1 Year & 2 Year Courses for Deep Preparation of NDA Exam</p>
                        <p style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(252,248,0)", fontSize: "17px", fontWeight: "bold", borderRadius: "10px" }} className='p-3 glow-btn m-3'>NDA Foundation Program From Class 4th to 12th with Schooling</p>
                        <p style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(252,248,0)", fontSize: "17px", fontWeight: "bold", borderRadius: "10px" }} className='p-3 glow-btn m-3'>NDA Exam Coaching with SSB Interview & Ground Training</p>
                    </div>
                    <div className='col-md-6'>
                        <p style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(252,248,0)", fontSize: "17px", fontWeight: "bold", borderRadius: "10px" }} className='p-3 glow-btn m-3'>NDA With Schooling Program For Class 11th & 12th (Foundation Batch)</p>
                        <p style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(252,248,0)", fontSize: "17px", fontWeight: "bold", borderRadius: "10px" }} className='p-3 glow-btn m-3'>NDA Test Series + Weekly Mock Tests & Group Discussion + Personality Development</p>
                        <p style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(252,248,0)", fontSize: "17px", fontWeight: "bold", borderRadius: "10px" }} className='p-3 glow-btn m-3'>NDA With Schooling Program from Class 8th, 9th & 10th (Pre-Foundation Batch)</p>
                        <p style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(252,248,0)", fontSize: "17px", fontWeight: "bold", borderRadius: "10px" }} className='p-3 glow-btn m-3'>NDA Coaching Guidance & Training Under RETD. Col. Puneet Sehgr</p>
                        <p style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(252,248,0)", fontSize: "17px", fontWeight: "bold", borderRadius: "10px" }} className='p-3 glow-btn m-3'>Online & Offline NDA Classes(Written + Interview)</p>
                        <p style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(252,248,0)", fontSize: "17px", fontWeight: "bold", borderRadius: "10px" }} className='p-3 glow-btn m-3'>Full NDA Study Material, Intensive Practice Sessions for NDA Coaching Classes</p>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgb(40,68,45)", padding: "5% 2%", textAlign: "center" }} className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <img height="auto" width="90%" src={SH1} alt="" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img height="auto" width="90%" src={SH2} alt="" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <img height="auto" width="90%" src={SH3} alt="" />
                        </div>
                    </div>
                </div>
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }} className="text text-danger mt-4">Best NDA Coaching in Chandigarh and Delhi</h1>
                <hr /><br />
                <p style={{ fontSize: "18px" }}>DCG understands the needs of every student and has designed various NDA coaching programs to suit the needs of NDA  aspirants. We offer NDA coaching to our students in both online and offline modes.</p>
                <p style={{ fontSize: "18px" }}>Our online portal provides NDA classes in two formats: NDA Online live interactive classes and NDA Online recorded lectures.  Offline  mode students can attend our NDA classes at our NDA coaching centers in Delhi and Chandigarh.</p>
                <p style={{ fontSize: "18px" }}>Our online NDA coaching program is designed to be convenient and flexible for students who want to study for NDA from the comfort of their own homes. Our NDA online live interactive classes allow students to interact with our experienced faculty in real time. While  our NDA recorded lectures can be accessed at any time.</p>
                <p style={{ fontSize: "18px" }}>Our NDA offline coaching program is designed for students who prefer to study in a traditional classroom setting with more focus and discipline. Our experienced faculty will provide you with the knowledge and skills you need to succeed on the NDA exam.</p>
                <p style={{ fontSize: "18px" }}>No matter which mode of NDA coaching you choose, DCG can help you achieve your dream of becoming a commissioned officer in the Indian Armed Forces</p>
                <div className='row'>
                    <div className='col-sm-6 mt-3' style={{ textAlign: "center" }}><iframe width="95%" height="380" src="https://www.youtube.com/embed/l_BiGgcGeiQ" title="How to Crack NDA Exam in First Attempt! | Mr. Vatsom  - DCG Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                    <div className='col-sm-6 mt-3' style={{ textAlign: "center" }}><iframe width="95%" height="380" src="https://www.youtube.com/embed/sU0vOD4fkQA" title="Delhi Career Group  &quot;A Network of Academic Excellence&quot; | Students Feedback| Academy Tour." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                    <div className='col-sm-6 mt-3' style={{ textAlign: "center" }}><iframe width="95%" height="380" src="https://www.youtube.com/embed/jrvnbWZ1rTE" title="India&#39;s No.1 Defence Academy - DCG Defence Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                    <div className='col-sm-6 mt-3' style={{ textAlign: "center" }}><iframe width="95%" height="380" src="https://www.youtube.com/embed/20MESXeYVik" title="Best Coaching Academy for NDA Exam Preparation | Shining Star of DCG Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                </div>
                <br />
                <div style={{ textAlign: "center" }}>
                    <h1>NDA coaching in Chandigarh / NDA COACHING IN  Delhi</h1>
                    <br />
                    <h3>(ONLINE & OFFLINE CLASSES)</h3>
                </div><br />
                <p style={{ fontSize: "18px" }}>With the best coaching experience for our students, our NDA coaching centers in Chandigarh and Delhi provide cutting-edge facilities and the most recent teaching tools. To make sure that our students are adequately prepared for all components of the NDA exam, we also put a strong emphasis on interview skills in addition to written exam preparation.</p>
                <h2>DCG offers the Best NDA coaching in Chandigarh and Delhi and they are customized to each student's needs and ability.</h2>
                <p style={{ fontSize: "18px" }}><b><u>NDA Crash Courses:</u></b> NDA coaching crash courses come in one-, three-, and six-month lengths, giving students the freedom to tailor their study schedules to their particular requirements. These intensive courses are offered in both online and offline formats, giving students the option to learn how they learn best. Students will receive concentrated and intensive coaching during the courses to aid in their quick preparation for the NDA exam. Students can anticipate receiving professional advice, having access to study materials, and taking practice exams to gauge their development. These crash courses provide convenience and flexibility for students who want to effectively study for the NDA exam because they are available in both online and offline modes.</p>
                <p style={{ fontSize: "18px" }}><b><u>NDA Foundation Courses:</u></b> The NDA Foundation courses for the NDA Exam are extensive courses created to give students a solid grounding in the topics included in the NDA Entrance exam. Students who enroll in these courses will receive in-depth instruction and training to aid in their full preparation for the NDA Written exam. The normal length of these NDA courses is one or two years, giving students plenty of time to thoroughly go over the curriculum and grasp the principles. Students may anticipate receiving direction from seasoned instructors, having access to NDA study resources, taking part in NDA mock exams, and getting regular feedback on how their NDA programs are doing during the NDA Foundation coaching programs.<br />Students who want to establish a solid foundation in their chosen disciplines and acquire the information and abilities necessary to succeed on the NDA exam might consider taking foundation courses. Students have the freedom to select the learning style that best suits their requirements and preferences thanks to DCG's availability of NDA Foundation course tutoring in both online and offline formats.</p>
                <p style={{ fontSize: "18px" }}><b><u>NDA Schooling Programme:</u></b>
                    <p>NDA Schooling Foundation program is designed for the students of 8th class till 11th Class</p>
                    <p>DCG Defence Academy provides a unique and comprehensive NDA with Schooling Integrated Program that equips students with the necessary skills and knowledge to excel in the NDA exam. The program offers a well-rounded approach by combining CBSE pattern schooling with focused training on competition exam studies, physical fitness, SSB interview preparation, and personality development.</p>
                    <p>At DCG, we understand the importance of a balanced education, which is why our program includes rigorous academic studies, ensuring that students excel in their school curriculum alongside their NDA preparation. Our expert faculty members guide students through the subjects, helping them build a strong foundation. To excel in the NDA exam, physical fitness is crucial. Our program includes dedicated physical fitness training sessions, focusing on enhancing endurance, strength, and overall fitness levels. This prepares students for the demanding physical requirements of the NDA.</p>
                    <p>Additionally, we provide comprehensive training for the NDA SSB interview, which is an integral part of the NDA selection process. Our experienced trainers mentor students, conducting mock interviews, group discussions, and personality development classes to enhance their communication skills, leadership qualities, and overall confidence.</p>
                    <p>With a well-structured curriculum, experienced faculty, and state-of-the-art infrastructure, DCG Defence Academy ensures that students receive top-notch coaching and guidance. Our integrated approach allows students to seamlessly blend their academic studies with NDA exam preparation, giving them a competitive edge.</p>
                    <p>Moreover, we provide residential facilities for students, creating an environment conducive to focused learning. The hostel facility ensures that students have a supportive and disciplined atmosphere, encouraging them to concentrate on their studies and overall development.</p>
                    <p>Join DCG Defence Academy's NDA with Schooling Integrated Program and embark on a transformative journey towards a successful career in the defense services. Prepare to achieve excellence in academics, physical fitness, and personal development, equipping yourself with the skills necessary to become a future leader in the armed forces.</p>
                    <p>Many students gets confused after 10th that how to prepare for nda after 10th class. NDA foundation course program is specially designed for those students who want to prepare for nda with schooling after 10th.  Students can join Our following NDA foundation programs</p>
                    <ol>
                        <li>NDA Schooling Program after 8th Class</li>
                        <li>NDA Schooling Program after 9th Class</li>
                        <li>NDA Schooling Program after 10th Class</li>
                        <li>NDA Schooling Program after 11th Class</li>
                    </ol>
                </p>
                <h2 style={{ textAlign: "center" }}>Top NDA Coaching Classes in Chandigarh and Delhi</h2>
                <p style={{ fontSize: "18px" }}>Our NDA coaching sessions help students prepare for written exams while also enhancing their personalities and soft skills in order to get them ready for the SSB interview procedure. All of the modules in the syllabus are covered by NDA Written test Coaching in Delhi and Chandigarh in accordance with the most recent test pattern. DCG Defence Academy's main emphasis is on preparation for the written exam. To assist students in getting ready for the test, our team concentrates on offering practice sessions.</p>
                <h3 style={{ textAlign: "center" }}><u>Defence Academy</u></h3>
                <p style={{ fontSize: "18px" }}>For NDA, CDS, and AFCAT Exam, DCG Defence Academy offers the Best Coaching In Delhi and Chandigarh in online as well as offline training. Whether you need to pass the Sainik School, RIMC, or RMS entrance exam, DCG Academy provides comprehensive study materials, mock exams, and professional advice to ensure that students are confident and thoroughly prepared for the exam. In Delhi and Chandigarh, offline and weekend batches are also available. In Delhi and Chandigarh, there are many Coaching Centers and among all DCG Defence Academy is rated as the best that conducts extra classes and doubt sessions for weak pupils. Students are taught the leadership qualities and personality attributes of a defense person at a young age. The DCG Defence Academy has a long tradition of producing outstanding Indian Defense Service officers.</p>
                <h2 style={{ textAlign: "center" }}>Why Prepare With Delhi Career Group?</h2>
                <p style={{ fontSize: "18px" }}>For students to study for tests, Delhi and Chandigarh's Defence Entrance Coaching Classes offer the greatest and most encouraging environment.</p>
                <ul style={{ fontSize: "18px" }}>
                    <li>One must understand the topics, format, and types of questions.</li>
                    <li>Algebra, matrices, trigonometry, calculus, statistics, and other topics are covered in the NDA's mathematics part. Candidates must master the ideas from the NCERT books for Classes 8, 9, 10, 11, and 12.</li>
                    <li>Chemistry, general science, geography, history, and current affairs are just a few of the areas included in the GAT. A neighborhood on English is included in this section as well.</li>
                    <li>Candidates need to review the subjects they need to learn.</li>
                    <li>Make brief, concise notes so that candidates can rework effectively and fast.</li>
                    <li>Take an NDA practice test and answer questions from previous NDA examinations.</li>
                    <li>Buy reputable NDA books and ask questions.</li>
                    <li>The institute provides well-researched study material and online test series to help students in their exam preparation.</li>
                    <li>The faculty at Delhi Career Group aims to provide comprehensive coaching and mentorship to students, ensuring their overall growth and development.</li>
                    <li>Delhi Career Group is known for providing a well-equipped infrastructure that caters to the needs of its students.</li>
                </ul>
                <h2><u>Eligibility Criteria</u></h2>
                <p style={{ fontSize: "18px" }}>The eligibility criteria for NDA are as follows:</p>
                <ol style={{ fontSize: "18px" }}>
                    <li><b>Nationality:</b> According to NDA eligibility, an applicant who is an Indian citizen is eligible to apply for the upcoming examination. Those who are not a citizen of India and still want to apply for the exam must meet the UPSC NDA eligibility criteria listed below:</li>
                    <p style={{ fontSize: "18px" }}>The candidate applying for the exam must be either:</p>
                    <ol style={{ fontSize: "18px" }}>
                        <li>A Citizen of India</li>
                        <li>A Subject of Nepal or</li>
                        <li>A subject of Bhutan, or,</li>
                        <li>Tibetan refugees who came to India before 1 Jan. 1962, with the intention of permanent settlement.</li>
                        <li>A person of Indian origin who migrated from the following countries with the intention of permanent settlement:
                            <ul>
                                <li>Pakistan, Sri Lanka</li>
                                <li>East African Countries of Kenya, Uganda, the United Republic of Tanzania, Zambia, Malawi, Zaire & Ethiopia, and Vietnam.</li>
                            </ul>
                        </li>
                    </ol>
                    <li><b>Age Limit:</b> Candidates must be between 16.5 and 19.5 years of age at the time of commencement of the course. The age limits are different for different branches:</li>
                    <ul>
                        <li>Army: Candidates must be between 16.5 and 19.5 years.</li>
                        <li>Air Force and Navy: Candidates must be between 16.5 and 19.5 years.</li>
                    </ul>
                    <li><b>Gender:</b> Male and Female candidates are eligible for NDA.</li>
                    <li><b>Qualifications:</b></li>
                    <ul>
                        <li>Army Wing: Candidates must have completed their 10+2 pattern of school education or equivalent examination conducted by a state education board or a university.</li>
                        <li>Air Force and Naval Wings: Candidates must have completed their 10+2 pattern of school education or equivalent with Physics and Mathematics as compulsory subjects, conducted by a state education board or a university.</li>
                    </ul>
                    <li><b>Note:</b> Candidates appearing in the 10+2 examination are also eligible to apply, provided they meet the above educational qualifications at the time of joining the course.</li>
                    <li><b>Marital Status:</b> Candidates must be unmarried. Marriage is not permitted during the training period at NDA.</li>
                </ol>
                <h2><u>Exam Pattern</u></h2>
                <p style={{ fontSize: "18px" }}>The written exam for the National Defence Academy (NDA) consists of two papers: Mathematics and General Ability Test (GAT). The exam pattern for NDA written exam is as follows:</p>
                <p style={{ fontSize: "18px" }}>Paper 1: Mathematics</p>
                <ul style={{ fontSize: "18px" }}>
                    <li>Duration: 2.5 hours</li>
                    <li>Maximum Marks: 300</li>
                    <li>Questions: Multiple Choice Questions (MCQs)</li>
                    <li>Syllabus: The mathematics paper covers topics such as Algebra, Matrices and Determinants, Trigonometry, Analytical Geometry, Differential Calculus, Integral Calculus and Differential Equations, Vector Algebra, Statistics, and Probability.</li>
                </ul>
                <p style={{ fontSize: "18px" }}>Paper 2: General Ability Test (GAT)</p>
                <ul style={{ fontSize: "18px" }}>
                    <li>Duration: 2.5 hours</li>
                    <li>Maximum Marks: 600</li>
                    <li>Questions: Multiple Choice Questions (MCQs)</li>
                    <li>Syllabus: The GAT paper is further divided into two sections: English and General Knowledge.</li>
                    <ul>
                        <li>English: The English section tests candidates' understanding of English grammar, vocabulary, comprehension, and basic communication skills.</li>
                        <li>General Knowledge: The General Knowledge section covers various topics such as Physics, Chemistry, General Science, History, Geography, Current Events, and Social Studies.</li>
                    </ul>
                </ul>
                <p style={{ fontSize: "18px" }}>Both papers are conducted on the same day, and each paper is assigned a maximum of 300 marks. The total marks for the written exam are 900 (300 marks for Mathematics + 600 marks for GAT).</p>
                <p style={{ fontSize: "18px" }}>It's important to note that there is a negative marking in the NDA written exam. For every incorrect answer, one-third (0.33) of the marks allotted to that question are deducted as a penalty.</p>
                <p style={{ fontSize: "18px" }}>Candidates who qualify for the written exam are then called for the next stages of the selection process, which include the Service Selection Board (SSB) interview, psychological aptitude test, medical examination, and final merit list preparation.</p>
                <h2><u>Selection process :</u></h2>
                <ul style={{ fontSize: "18px" }}>
                    <li>Writter Exam</li>
                    <li>SSB Selecetion Test</li>
                    <li>Medical Examination</li>
                </ul>
                <br />
                <h3><u>Written Exam</u></h3>
                <p style={{ fontSize: "18px" }}>The written exam for the National Defence Academy is broken into two sections: </p>
                <ul style={{ fontSize: "18px" }}>
                    <li>Mathematics</li>
                    <li>General ability</li>
                </ul>
                <p style={{ fontSize: "18px" }}>The written exam has a total of 900 marks because the maths exam carries 300 points and the general ability exam carries 600 points. The General Ability exam covers maths and reasoning, as well as current events, physics, chemistry, history, and English.</p>
                <h2><u>SSB Round</u></h2>
                <p style={{ fontSize: "18px" }}>After passing the written exam, candidates must proceed to the SSB phase, which entails a general conference, a basic cognitive test, a psychological examination, and group testing. The duration of this lengthy test is five days.</p>
                <h2><u>Medical Test</u></h2>
                <p style={{ fontSize: "18px" }}>The candidate must show up for a medical exam after passing the SSB stage of qualification. When an applicant passes the medical examination, the Union Public Service Commission declares him to be a qualified candidate. On the UPSC website, the complete list of candidates who passed is available.</p>
                <br />
                <div style={{ borderRadius: "20px", backgroundColor: "rgb(40,120,70)" }} className='p-4'>
                    <h3 style={{ color: "rgb(255,255,0)", fontSize: "2.7rem", textAlign: "center" }}>NDA Coaching Programs Offered by Delhi Career Group</h3>
                    <div className="row mb-5" style={{ textAlign: "center" }}>
                        <div className="col-sm-4 mt-4">
                            <Link exact to="/nda-online" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none" }}>NDA Online Coaching</button></Link>
                        </div>
                        <div className="col-sm-4 mt-4">
                            <Link exact to="/nda-delhi" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none" }}>NDA Coaching in Delhi</button></Link>
                        </div>
                        <div className="col-sm-4 mt-4">
                            <Link exact to="/nda-chandigarh" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}><button className='btn btn-lg glow-btn' style={{ backgroundColor: "rgb(178,0,0)", color: "rgb(255,255,0)", border: "none" }}>NDA Coaching in Chandigarh</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NdaCoaching;