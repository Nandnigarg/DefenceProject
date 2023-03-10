import OF1 from '../assets/OF1.jpg';
import OF2 from '../assets/OF2.jpg';
import OF3 from '../assets/OF3.jpg';
import OF4 from '../assets/OF4.jpg';

function Officer() {
    return (
        <div className="container-fluid mt-5">
            <div style={{ textAlign: "center" }} className="container pt-4">
                <h3 style={{color: "rgb(55, 146, 55)", fontSize: "2.8rem", fontWeight: "bold"}}>GUIDANCE AND TRAINING UNDER RETD. OFFICERS</h3>
                <div className="row pt-4">
                    <div className="col-md-3 mb-4">
                        <img height="auto" width="auto" src={OF1} alt="" />
                        <h5 style={{ color: "rgb(21, 52, 98)", fontSize: "1.2rem", fontWeight: "bold" }}>Col. Puneet Sehgal (Retd.)</h5>
                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>+17 Years Experience With DCG</p>
                    </div>
                    <div className="col-md-3 mb-4">
                        <img height="auto" width="auto" src={OF2} alt="" />
                        <h5 style={{ color: "rgb(21, 52, 98)", fontSize: "1.2rem", fontWeight: "bold" }}>I.G. B.K Sharma (Retd.)</h5>
                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>+15 Years Experience With DCG</p>
                    </div>
                    <div className="col-md-3 mb-4">
                        <img height="auto" width="auto" src={OF3} alt="" />
                        <h5 style={{ color: "rgb(21, 52, 98)", fontSize: "1.2rem", fontWeight: "bold" }}>Captain Uttam Singh Gill (Retd.)</h5>
                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>+14 Years Experience With DCG</p>
                    </div>
                    <div className="col-md-3 mb-4">
                        <img height="auto" width="auto" src={OF4} alt="" />
                        <h5 style={{ color: "rgb(21, 52, 98)", fontSize: "1.2rem", fontWeight: "bold" }}>Major V.P.S Rawat (Retd)</h5>
                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>+12 Years Experience With DCG</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Officer;