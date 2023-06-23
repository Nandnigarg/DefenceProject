function Footer() {
    const iconSize = {
        fontSize: "20px"
    }

    return (
        <div class="container-fluid bg bg-success" style={{ textAlign: "center", padding: "5% 2%" }}>
            <h1 style={{ color: "rgb(255,255,0)" }}>Contact Us</h1>
            <h4 style={{ color: "white" }}>DCG Defence Academy</h4>
            <h6 style={{ color: "white" }}>Unit of Delhi Career Group</h6>
            <div className="container mt-5">

                <div>
                    <h6 style={{ color: "rgb(255,255,0)", ...iconSize }}>Chandigarh Branch: </h6>
                    <address style={{ fontSize: "17px", color: "white" }}>DCG Defence Academy <br />Defence unit of Delhi Career Group, Near old sale tax barrier, On National Highway 64, Banur, Punjab <br /> Helpline No - 09876335141, 09569782865</address>
                </div>
                <div>
                    <h6 style={{ color: "rgb(255,255,0)", ...iconSize }}>Delhi Branch: </h6>
                    <address style={{ fontSize: "17px", color: "white" }}>DCG Defence Academy <br />Shiksha Bharti College, Gate No - 2 Mall Road, Sector - 7 Dwarka, New Delhi - 110077 <br /> Helpline No - 09876335141, 09569782865</address>
                </div>
            </div>
            <hr class="bg bg-light" />
            <h1 style={{ color: "rgb(255,255,0)" }}>Follow us on</h1>
            <div style={{ color: "white", ...iconSize }} className="row pt-5">
                <div className="col-sm-3">
                    <i class="fa-brands fa-linkedin"></i>
                    <a class="text text-light text-decoration-none" href="https://www.linkedin.com/in/delhi-career-group-885b2810a/" target="_blank"><span> LinkedIn</span></a>
                </div>
                <div className="col-sm-3">
                    <i class="fa-brands fa-square-twitter"></i>
                    <a class="text text-light text-decoration-none" href="https://twitter.com/Delhicareergrou" target="_blank"><span> Twitter</span></a>
                </div>
                <div className="col-sm-3">
                    <i class="fa-brands fa-square-facebook"></i>
                    <a class="text text-light text-decoration-none" href="https://www.facebook.com/dcgacademy/" target="_blank"><span> Facebook</span></a>
                </div>
                <div className="col-sm-3">
                    <i class="fa-brands fa-square-instagram"></i>
                    <a class="text text-light text-decoration-none" href="https://www.instagram.com/delhi_career_group/" target="_blank"><span> Instagram</span></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;