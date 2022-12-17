function Header() {
    const headerStyle = {
        textAlign: "center",
        backgroundColor: "#F6FBF4",
        paddingTop: "1%"
    }

    const headerButton = {
        backgroundColor: "rgb(111,105,172)",
        margin: "2% 0",
        color: "white",
        width: "80%",
        border: "none",
        borderRadius: "7px"
    }

    return (
        <div className="container-fluid" style={headerStyle}>
            <div className="row">
                <div className="col-md-6">
                    <div class="heading">
                        <h5>Our Branches: </h5>
                        <h6>CHANDIGARH | DELHI </h6>
                    </div>
                    <div class="heading">
                        <h5>India's #1 Defence Academy</h5>
                    </div> 
                </div>
                <div className="col-md-6">
                    <div>
                        <div className="row">
                            <div className="col-sm-6">
                                <button style={headerButton}>Online / Offline Classes</button>
                            </div>
                            <div className="col-sm-6">
                                <button style={headerButton}>Pay Online</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p><span class="text text-primary font-weight-bold">Helpline & Support (24 X 7) </span><br/>
                        <i class="fa-solid fa-phone"></i><span>XXXXXXXXXX &nbsp;&nbsp;&nbsp;</span>
                        <i class="fa-brands fa-whatsapp"></i><span>XXXXXXXXXX</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;