import Background from "./Background";

function Army() {
    return (
        <div className="container-fluid" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <Background text="ARMY PUBLIC SCHOOL" src="ARMY PUBLIC SCHOOL"/>
            <div className="container mt-5 mb-5" style={{textAlign: "justify"}}>
                <h1 style={{ fontFamily: "cursive", fontSize: "3rem", fontWeight: "bold", textAlign: "center" }} className="text text-danger">ARMY PUBLIC SCHOOL</h1>
                <hr />
                <br /><br />
                <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold" }}>Aims & Objectives </h3>
                <p style={{ fontSize: "18px" }}>The Army Public School is committed to delivering excellent education at a reasonable cost, and to achieve this goal, the institution has laid down the following objectives:</p>
                <ul style={{ fontSize: "18px", paddingLeft: "0", paddingRight: "0" }}>
                    <li><span style={{fontWeight: "bold"}}>Holistic Development:</span> The school aims to provide comprehensive education that focuses on the all-round development of students, ensuring that they excel in all aspects of life. This includes academics, extracurricular activities, and character development.</li>
                    <li><span style={{fontWeight: "bold"}}>Technological and Communication Skills:</span> In today's digital age, it is essential to equip students with technological and communication skills. The school strives to impart these skills, along with a strong value system, to help students become responsible and ethical individuals.</li>
                    <li><span style={{fontWeight: "bold"}}>Scholastic and Co-scholastic Growth:</span> The school believes in nurturing the talents and abilities of every student, encouraging them to pursue their interests and passions. This includes both scholastic and co-scholastic domains, such as sports, music, art, and drama.</li>
                    <li><span style={{fontWeight: "bold"}}>Joyful Learning:</span> Learning should be a pleasurable experience, and the school recognizes this by encouraging students to develop correct reading habits that bring joy and pleasure to their lives.</li>
                    <li><span style={{fontWeight: "bold"}}>Creativity and Self-Actualization:</span> Youthful energies need to be channelized in the right direction, and the school seeks to do this by promoting creativity and self-actualization. The school encourages students to explore their creativity and pursue their dreams, helping them become fulfilled and successful individuals.</li>
                </ul>
                <br />
                <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold" }}>Common Entrance Test </h3>
                <p style={{ fontSize: "18px" }}>Under the guidance of the Army Welfare Education Society (AWES) in New Delhi, a Common Entrance Test will be held for admission to classes V to IX in five English Medium Residential Army Public Schools. These schools are affiliated with the Central Board of Secondary Education (CBSE) and are located in Daghsai, Noida (Girls Only), Dhaula Kuan (Boys Only), Beas, and Gen BC Joshi APS in Pithoragarh. The entrance exam will be conducted for the academic session of 2023-24. Further information regarding the exam can be found below.</p>
                <table className="table table-striped table-hover" style={{ textAlign: "center", paddingLeft: "0", paddingRight: "0", width: "90%" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black" }}>Online Registration</td>
                            <td style={{ border: "2px solid black", fontWeight: "bold" }}>Till 31 Dec 2022</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>For Admission To Classes</td>
                            <td style={{ border: "2px solid black" }}>V, VI, VII, VIII & IX</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>Age</td>
                            <td style={{ border: "2px solid black" }}>Min age for Class –V is 09 Yrs as on 31
                                March of the yr in which admission is
                                sought and soon.</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>Date of Exam</td>
                            <td style={{ border: "2px solid black", fontWeight: "bold" }}>12 Feb 2023 (Sunday)</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>Duration of Exam</td>
                            <td style={{ border: "2px solid black" }}>Class V - 02 Hours & VI to IX - 03 Hours</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>Exam Centres</td>
                            <td style={{ border: "2px solid black" }}>Army Public School Dagshai,
                                Chandimandir, Dhaula Kuan (New Delhi),
                                Hisar Cantt, Lucknow (Nehru Road) ,
                                Kolkata , Jaipur, Jammu Cantt , Narangi
                                Guwahati, Beas , Bhopal, Pune, Clement
                                Town Deharadun, Jodhpur, Bangalore,
                                Secunderabad, Ahmedabad, Pithoragarh
                                & Noida (Girls Only)</td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black" }}>Fee Structure <span style={{ fontWeight: "bold" }}>(Non Refundable)</span></td>
                            <td style={{ border: "2px solid black" }}>Exam Fee Rs 500/- (for all). Registration
                                Fee Rs 2,000/- (Defence Personnel) and
                                Rs 4,000/- (Civilian). Required to be paid
                                online through payment gateway using
                                debit/credit card, internet banking or UPI's. <br />
                                <span style={{ textTransform: "uppercase", textDecoration: "underline", fontWeight: "bolder" }} className="text text-danger">The Exam and Registration fee is NONREFUNDABLE</span></td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ fontSize: "18px" }}>Exam Related information bulletin hosted on <a href="https://www.awesindia.com/" target="_blank">www.awesindia.com</a> and
                    respective school website. Candidates who desire to appear in the exam
                    may read the detailed information Bulletin for CET-2023 and apply online
                    at <a href="https://www.awesindia.com/" target="_blank">www.awesindia.com</a> and respective school website till 31 Dec 2022.
                </p>
                <p style={{ fontSize: "18px" }}>Prospectus for offline registration is also available on payment of Rs 500/-
                    by hand can be obtained between 0900 hrs to 1400 hrs on any working
                    day from respective APS.</p>
                <br />

                <h3 style={{ color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold" }}>GENERAL INSTRUCTIONS FOR CANDIDATES </h3><br />
                <ol style={{ fontSize: "18px", paddingLeft: "0", paddingRight: "0" }}>
                    <li>On-line portal for registration to appear in the Common Entrance Test (CET) for admission to
                        classes V to IX in 05x Residential Army Public Schools as listed below is open up to 31 Dec 2022.
                        <br /><br />
                        <table class="table table-striped table-hover" style={{ textAlign: "center", width: "90%" }}>
                            <thead className="table-secondary">
                                <tr>
                                    <th style={{ border: "2px solid black" }}>Ser No</th>
                                    <th style={{ border: "2px solid black" }}>Name of Residential APSs</th>
                                    <th style={{ border: "2px solid black" }}>Admission in classes</th>
                                    <th style={{ border: "2px solid black" }}>Vacancies for</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: "2px solid black" }}>(a)</td>
                                    <td style={{ border: "2px solid black" }}>Army Public School Dagshai (HP)</td>
                                    <td style={{ border: "2px solid black" }}>V , VI , VII , VIII & IX</td>
                                    <td style={{ border: "2px solid black", fontWeight: "bold" }} className="text text-danger">BOYS AND GIRLS</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "2px solid black" }}>(b)</td>
                                    <td style={{ border: "2px solid black" }}>Army Public School Beas (PB)</td>
                                    <td style={{ border: "2px solid black" }}>V , VI , VII , VIII & IX</td>
                                    <td style={{ border: "2px solid black", fontWeight: "bold" }} className="text text-danger">BOYS AND GIRLS</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "2px solid black" }}>(c)</td>
                                    <td style={{ border: "2px solid black" }}>Gen BC Joshi APS, Pithoragarh (UK)</td>
                                    <td style={{ border: "2px solid black" }}>VI , VII , VIII & IX</td>
                                    <td style={{ border: "2px solid black", fontWeight: "bold" }} className="text text-danger">BOYS AND GIRLS</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "2px solid black" }}>(d)</td>
                                    <td style={{ border: "2px solid black" }}>Army Public School Dhaula Kuan, New Delhi</td>
                                    <td style={{ border: "2px solid black" }}>VI , VII , VIII & IX</td>
                                    <td style={{ border: "2px solid black", fontWeight: "bold" }} className="text text-danger">BOYS ONLY</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "2px solid black" }}>(e)</td>
                                    <td style={{ border: "2px solid black" }}>Army Public School , Noida (UP)</td>
                                    <td style={{ border: "2px solid black" }}>160</td>
                                    <td style={{ border: "2px solid black", fontWeight: "bold" }} className="text text-danger">VI , VII , VIII & IX</td>
                                </tr>
                            </tbody>
                        </table>
                    </li><br />
                    <li><span style={{ textDecoration: "underline", fontWeight: "bold" }}> Preference of admission in all classes will be given to Priority 1 (Army Wards) children.</span></li><br />
                    <li><span style={{ fontWeight: "bold" }} className="text text-danger"> Admission to Civilian Students who clear the CET will only be given based on the
                        civilian percentages present at the time (2023-24) in the school. The schools cannot exceed
                        the civilian percentage (&gt; 10%) as per AWES Rules.</span></li><br />
                    <li><span style={{ fontWeight: "bold", textDecoration: "underline" }}> Age Limit: -</span> As per AWES Rules and Regulations, the candidate should have completed the
                        years of age, mentioned against each class, as on 31 March 2023:-
                        <br /><br />
                        <table class="table table-striped table-hover" style={{ textAlign: "center", width: "90%" }}>
                            <thead className="table-secondary">
                                <tr>
                                    <th style={{ border: "2px solid black" }}>Class</th>
                                    <th style={{ border: "2px solid black" }}>Ages as on <span style={{ fontWeight: "bold", textDecoration: "underline" }} className="text text-danger">31 March 2023</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: "2px solid black" }}>V</td>
                                    <td style={{ border: "2px solid black" }}>09 Years</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "2px solid black" }}>VI</td>
                                    <td style={{ border: "2px solid black" }}>10 Years</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "2px solid black" }}>VII</td>
                                    <td style={{ border: "2px solid black" }}>11 Years</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "2px solid black" }}>VIII</td>
                                    <td style={{ border: "2px solid black" }}>12 Years</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "2px solid black" }}>IX</td>
                                    <td style={{ border: "2px solid black" }}>13 Years</td>
                                </tr>
                            </tbody>
                        </table>
                    </li><br />
                    <li>Candidates must fill the Registration Form carefully.</li><br />
                    <li>After completion of registration process incl payment of applicable fees (Exam & Registration
                        Fees), <span style={{ fontWeight: "bold", textDecoration: "underline" }} className="text text-danger"> candidates must keep a note of their Application No, Mobile No , Email ID and D.O.B.
                            for future ref</span>.</li><br />
                    <li>Details of Registration and Exam Fees are as under:-
                        <br /><br />
                        <table className="table table-borderless" style={{ textAlign: "center" }}>
                            <tbody>
                                <tr>
                                    <td style={{ maxWidth: "60px" }}>(a)</td>
                                    <td style={{ maxWidth: "60px" }}>Defence Wards (Serving and Retired) <br />
                                        (Army , Navy and Air force)</td>
                                    <td style={{ maxWidth: "60px" }}>-</td>
                                    <td style={{ maxWidth: "60px" }}>Rs 2,500/-</td>
                                </tr>
                                <tr>
                                    <td style={{ maxWidth: "60px" }}>(b)</td>
                                    <td style={{ maxWidth: "60px" }}>Civilian Wards incl Para Mil Forces</td>
                                    <td style={{ maxWidth: "60px" }}>-</td>
                                    <td style={{ maxWidth: "60px" }}>Rs 4,500/-</td>
                                </tr>
                            </tbody>
                        </table>
                        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>NOTE: - REGISTRATION & EXAM FEES IS 'NON REFUNDABLE'.</span>
                    </li><br />
                    <li>After registration, candidates can login and check details by entering Registered Mobile
                        No/Application No and D.O.B. on <span style={{ fontWeight: "bold" }} className="text text-danger">'Already Registered Link'</span>.</li><br />
                    <li>Application can be printed from <span style={{ fontWeight: "bold" }} className="text text-danger">'Application Print'</span> Link/Button by entering Registered Mobile
                        No/Application No and D.O.B</li><br />
                    <li>Candidates can download their <span style={{ fontWeight: "bold" }}>'Admit Cards'</span> for CET after <span style={{ fontWeight: "bold", textDecoration: "underline" }} className="text text-danger">25 Jan 2023</span> from the portal</li><br />
                    <li>The CET (Common Entrance Test) will be conducted on <span style={{ fontWeight: "bold", textDecoration: "underline" }}>12 Feb 2023</span> (Sunday)</li><br />
                    <li>Reporting Time for the candidates at Examination Centre will be between 0900 hrs to
                        0930 hrs. Examination will commence at 1000 hrs.</li><br />
                    <li><span style={{ fontWeight: "bold" }}>Entry to Examination Centre will be closed at 1000 hrs.</span></li><br />
                    <li>The CET-2023 will be conducted at the under mentioned Exam Centres:- <br /><br />
                        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>Exam Centers:-</span><br />
                        <ol type="a">
                            <li>&nbsp; &nbsp; Army Public School, Chandimandir-134107</li>
                            <li>&nbsp; &nbsp; Army Public School, Dhaula Kuan,New Delhi-110010</li>
                            <li>&nbsp; &nbsp; Army Public School, Hissar Cantt (Haryana)PIN-125006</li>
                            <li>&nbsp; &nbsp; Army Public School, Nehru Road, Lucknow Cantt-226002</li>
                            <li>&nbsp; &nbsp; Army Public School, Ballygunge Maidan Camp,Kolkata-700019(WB)</li>
                            <li>&nbsp; &nbsp; Army Public School, Military Station, Jaipur (Rajasthan)-302012</li>
                            <li>&nbsp; &nbsp; Army Public School, Near Peer Baba, Jammu Cantt (J&K)</li>
                            <li>&nbsp; &nbsp; Army Public School, Narangi, PO Satgaon, Guwahati-781027 (Assam)</li>
                            <li>&nbsp; &nbsp; Army Public School, Beas, PO-Dhilwan, Distt-Kapurthala (Punjab)</li>
                            <li>&nbsp; &nbsp; Army Public School, Neori Hills,PO-Motilal Nehru Nagar,Bhopal (MP)-462038</li>
                            <li>&nbsp; &nbsp; Army Public School, Pune, Near Ghorpadi Market Ghorpadi, Pune-411001</li>
                            <li>&nbsp; &nbsp; Army Public School, Clement Town, Dehradun (Uttrakhand)-248001</li>
                            <li>&nbsp; &nbsp; Army Public School, Jodhpur, Ajmer Road (Raj)-342010</li>
                            <li>&nbsp; &nbsp; Army Public School, Bangalore,K Kamaraj Road(Karnataka)-560042</li>
                            <li>&nbsp; &nbsp; Army Public School, Secundrabad ,Bolarum Jai Jawahar Nagar(AP)-500087</li>
                            <li>&nbsp; &nbsp; Army Public School, Ahmedabad, Near Hanuman Temple (Gujarat)-380004</li>
                            <li>&nbsp; &nbsp; Gen BC Joshi Army Public School, Pithoragarh (UK)</li>
                            <li>&nbsp; &nbsp; Army Public School, Noida, Arun Vihar, Sector-37, Noida (UP)</li>
                            <li>&nbsp; &nbsp; Army Public School, Dagshai, Distt-Solan(HP)</li>
                        </ol>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Army;