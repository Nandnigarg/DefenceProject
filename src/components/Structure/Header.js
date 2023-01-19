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

    const linkStyle = {
        textDecoration: "none",
        color: "black"
    }

    return (
        <div className="container-fluid" style={headerStyle}>
            <div className="row">
                <div className="col-md-6">
                    <img width="100%" height="auto" style={{ maxHeight: "300px", maxWidth: "300px" }} src={dcgLogo} alt="" />
                </div>
                <div className="col-md-6">
                    <div>
                        <div className="row mb-4">
                            <div className="col-sm-4">
                                <a href="https://play.google.com/store/apps/details?id=com.app.testseries.delhicareergroup&pli=1" target="_blank"><button style={headerButton}>Download App</button></a>
                            </div>
                            <div className="col-sm-4">
                                <button style={headerButton}>Check Eligibility</button>
                            </div>
                            <div className="col-sm-4">
                                <button style={headerButton}>Pay Online</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6><span class="text text-primary font-weight-bold">Helpline & Support (24 X 7) </span><br />
                            <a href="tel:08968024595" style={linkStyle}><i class="fa-solid fa-phone"></i><span>8968024595 &nbsp;&nbsp;&nbsp;</span></a>
                            <a href="https://wa.me/+918968024595" target="_blank" style={linkStyle}><i class="fa-brands fa-whatsapp"></i><span>8968024595</span></a>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;