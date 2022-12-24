function Footer() {
    const iconSize = {
        fontSize: "20px"
    }

    return (
        <div class="container-fluid bg bg-success" style={{ textAlign: "center", padding: "5% 2%" }}>
            <h1 style={{color: "rgb(255,255,0)"}}>Contact Us</h1>
            <h4 style={{color: "white"}}>DCG Defence Academy</h4>
            <h6  style={{color: "white"}}>Unit of Delhi Career Group</h6>
            <div className="container mt-5">
                <div className="row pt-3 pb-4">
                    <div className="col-sm-6">
                        <h6 style={{color: "rgb(255,255,0)", ...iconSize}}>Chandigarh Branch: </h6>
                        <address style={{fontSize: "17px", color: "white"}}>SCO: 215-216-217,(Near ICICI Bank), Opposite Petrol Pump Sector - 34 A Chandigarh. Pincode: 160022</address>
                    </div>
                    <div className="col-sm-6">
                        <h6 style={{color: "rgb(255,255,0)", ...iconSize}}>Delhi Branch: </h6>
                        <address style={{fontSize: "17px", color: "white"}}>C-313, Sector - 7, (Near Ramphal Chowk), Dwarka, New Delhi. Pincode: 110075</address>
                    </div>
                </div>
                <hr class="bg bg-light"/>
                <h1 style={{color: "rgb(255,255,0)"}}>Follow us on</h1>
                <div style={{color: "white", ...iconSize}} className="row pt-5">
                    <div className="col-sm-3">
                        <i class="fa-brands fa-linkedin"></i>
                        <a class="text text-light text-decoration-none" href="https://www.linkedin.com/mwlite/in/nation-defence-academy-955627242" target="_blank"><span> LinkedIn</span></a>
                    </div>
                    <div className="col-sm-3">
                        <i class="fa-brands fa-square-twitter"></i>
                        <a class="text text-light text-decoration-none" href="" target="_blank"><span> Twitter</span></a>
                    </div>
                    <div className="col-sm-3">
                        <i class="fa-brands fa-square-facebook"></i>
                        <a class="text text-light text-decoration-none" href="https://www.facebook.com/profile.php?id=100082153520461" target="_blank"><span> Facebook</span></a>
                    </div>
                    <div className="col-sm-3">
                        <i class="fa-brands fa-square-instagram"></i>
                        <a class="text text-light text-decoration-none" href="https://www.instagram.com/nationdefenceacademy/" target="_blank"><span> Instagram</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;