import Phy1 from "../assets/PhyGround-1.mp4";
import Phy2 from "../assets/PhyGround-2.mp4";
import Phy3 from "../assets/PhyGround-3.mp4";
import Phy4 from "../assets/Phy-4.mp4";
import Background from "../Other comps/Background";

function Physical() {
    return (
        <div className="container-fluid" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <Background text="India's Best NDA Coaching Academy" t3="Teaching and Training on the Pattern of Military School" src="ENQUIRY FORM" />
            <div style={{ textAlign: "center" }} className="container pt-2">
                <h1 style={{ fontSize: "3rem", textAlign: "center" }} className="text text-danger">PHYSICAL TRAINING</h1>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <video className="mt-3" height="auto" width="100%" src={Phy4} controls></video>
                    </div>
                    <div className="col-md-6">
                        <video className="mt-3" height="auto" width="100%" src={Phy1} controls></video>
                    </div>
                    <div className="col-md-6">
                        <video className="mt-3" height="auto" width="100%" src={Phy2} controls></video>
                    </div>
                    <div className="col-md-6">
                        <video className="mt-3" height="auto" width="100%" src={Phy3} controls></video>
                    </div>
                    <div className="col-md-6">
                        <iframe className="mt-3" width="100%" height="370" src="https://www.youtube.com/embed/vxUPhRAZqFw" title="PHYSICAL TRAINING SESSION IN DCG DEFENCE ACADEMY | ARMY GD | ARMY SOLDIER | ARMY BHARTI | POLICE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-6">
                        <iframe className="mt-3" width="100%" height="370" src="https://www.youtube.com/embed/0oprZBwnvAs" title="FACILITIES &amp; FEEDBACK DCG DEFENCE ACADEMY | PHYSICAL TRAINING | HOSTEL, GYM &amp; MEDICAL  FACILITY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Physical;