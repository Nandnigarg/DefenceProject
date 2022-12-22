import Officer from "../Other comps/Officer";
import Form from "../Other comps/Form";
import ndaBanner from '../assets/nda banner.jpg';
import schoolingBanner from '../assets/schooling banner.jpg';
import hB1 from '../assets/hB1.jpg';
import hB2 from '../assets/hB2.jpg';
import hB3 from '../assets/hB3.jpg';
import SH1 from "../assets/SH1.jpg";
import SH2 from "../assets/SH2.jpg";
import SH3 from "../assets/SH3.jpg";

function Schooling() {
    const boxStyle = {
        padding: "2%",
        color: "white",
        fontWeight: "bold",
        boxShadow: "10px 15px 10px gray"
    }

    return (
        <div>
            <img width="100%" height="auto" style={{maxHeight: "670px"}} src={ndaBanner} alt="" />
            <div style={{ backgroundColor: "rgb(180, 225, 151)", padding: "5% 2%", textAlign: "center"}} className="container-fluid">
                <div className="container">
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
            </div>
            <div className="container-fluid mt-5">
                <div style={{textAlign: "center"}} className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/VBmvkWQdxXk" title="10TH के बाद सीधा अफसर | NDA FOUNDATION PROGRAMME | DELHI CAREER GROUP | NDA WITH SCHOOLING" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6 mb-4">
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/JaLsM6fOvS8" title="Start Your Journey in Defence with Delhi Career Group" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6 mb-4">
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/bFMmPdRgdIc" title="School Integrated Program Run By DCG Defence Academy (Delhi Career Group)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6 mb-4">
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/ppa-lfPv1BE" title="DCG DEFENCE ACADEMY | ADMISSION OPEN | NDA, SSB, CDS, AFCAT, AISSEE, RIMC, RMS, ARMY GD, POLICE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "rgb(180, 225, 151)", padding: "5% 2%" }} className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 style={{color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold"}}>NDA With Schooling Program</h3>
                            <p style={{fontSize: "18px"}}>The DCG Defense Academy Foundation is a programme created to assist 
                                students in becoming future leaders of the country's armed forces. Teachers with 
                                extensive knowledge and former military people mentor young brains. Complete two 
                                years of personal development coursework in addition to your NDA training. The 
                                NDA foundation programme in Chandigarh focuses on giving students the finest 
                                training possible while they are still enrolled in school. The goal of the this 
                                foundation course is to thoroughly prepare the student to take the NDA exam after 
                                finishing school.</p>
                            <h3 style={{color: "rgb(21, 52, 98)", fontSize: "2rem", fontWeight: "bold"}}>NDA Preparation After 10th Class In Chandigarh</h3>
                            <p style={{fontSize: "18px"}}>DCG Defence Academy provides a specific coordinator for NDA trainers who was trained 
                                by applicants who are ready to be led by excellence. A group of highly qualified 
                                academic staff members and former military officers instruct NDA-SIP sessions. This 
                                Institute provides supplemental lessons and doubt sessions for weak pupils. 
                                Instructors and experts here instruct students on how to join NDA following the 
                                tenth grade.</p>
                        </div>
                        <div style={{backgroundColor: "rgb(233,242,235)", ...boxStyle}} className="col-md-6">
                            <img width="100%" height="auto" style={{maxHeight: "500px"}} src={schoolingBanner} alt="" />
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
            <Form />
        </div>
    )
}

export default Schooling;