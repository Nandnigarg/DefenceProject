function Header() {
    const headerStyle = {
        textAlign: "center",
        backgroundColor: "rgb(255,255,200)",
        paddingTop: "1%"
    }

    const headerButton = {
        backgroundColor: "rgb(111,105,172)",
        marginTop: "2%",
        marginBottom: "6%",
        color: "white",
        width: "80%",
        height: "37px",
        border: "none",
        borderRadius: "7px"
    }

    const linkStyle ={
        textDecoration: "none",
        color: "black"
    }

    return (
        <div className="container-fluid" style={headerStyle}>
            <div className="row">
                <div className="col-md-6">
                    <div class="heading">
                        <h4 class="text text-danger text-lg">Our Branches: </h4>
                        <h6 class="text text-success">CHANDIGARH | DELHI </h6>
                    </div>
                    <div class="heading">
                        <h4 class="text text-danger text-lg">India's #1 Defence Academy</h4>
                    </div> 
                </div>
                <div className="col-md-6">
                    <div>
                        <div className="row">
                            <div className="col-sm-6">
                                <button style={headerButton}>Download App</button>
                            </div>
                            <div className="col-sm-6">
                                <button style={headerButton}>Pay Online</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6><span class="text text-primary font-weight-bold">Helpline & Support (24 X 7) </span><br/>
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