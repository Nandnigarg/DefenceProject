import { Link } from 'react-router-dom';
import dcgLogo from '../assets/dcgLogo.jpg';

function Header() {
    const headerStyle = {
        textAlign: "center",
        backgroundColor: "rgb(255,255,200)",
        paddingTop: "1%"
    }

    const headerButton = {
        backgroundColor: "rgb(111,105,172)",
        marginTop: "2%",
        marginBottom: "2%",
        color: "white",
        width: "80%",
        height: "37px",
        border: "none",
        borderRadius: "7px"
    }

    return (
        <div className="container-fluid" style={headerStyle}>
            <div className="row">
                <div className="col-md-6">
                    <img width="100%" height="auto" style={{ maxHeight: "80px", maxWidth: "80px" }} src={dcgLogo} alt="" /><span className="text text-success" style={{fontSize: "2rem", fontWeight: "bold"}}>DELHI CAREER GROUP</span>
                    <p style={{ fontWeight: "bold" }} className="text text-danger">EMPOWERING YOUNG MINDS</p>
                    <h5 style={{color: "rgb(111,105,172)"}}>ARMED FORCE PREPARATORY INSTITUTE (AFPI)</h5>
                </div>
                <div className="col-md-6">
                    <div>
                        <div className="row mb-4">
                            <div className="col-sm-4">
                                <a href="https://play.google.com/store/apps/details?id=com.app.testseries.delhicareergroup&pli=1" target="_blank"><button style={headerButton}>Download App</button></a>
                            </div>
                            <div className="col-sm-4">
                                <Link exact to="/eligibility"><button style={headerButton} disabled>Check Eligibility</button></Link>
                            </div>
                            <div className="col-sm-4">
                                <Link exact to="/payment"><button style={headerButton}>Pay Online</button></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 style={{ color: "rgb(21, 52, 98)", fontSize: "1.2rem", fontWeight: "bold", lineHeight: "0.5" }}>Helpline & Support (8am to 10pm)<br /></h6>
                            <button className="btn btn-dark me-4 mt-2" style={{fontSize: "1.2rem"}}><a href="tel:08427414076" className="text-decoration-none text text-light"><i class="fa-solid fa-phone"></i><span>8427414076</span></a></button>
                            <button className="btn btn-dark me-4 mt-2" style={{fontSize: "1.2rem"}}><a href="https://wa.me/+918146258794" target="_blank" className="text-decoration-none text text-light"><i class="fa-brands fa-whatsapp"></i><span>8146258794</span></a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;