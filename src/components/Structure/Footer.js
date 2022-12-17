function Footer() {
    return (
        <div class="container-fluid" style={{textAlign:"center",backgroundColor: "rgb(180, 225, 151)", padding: "5% 2%"}}>
            <h1>Contact Us</h1>
            <div className="container mt-5">
                <div className="row pt-3">
                    <div className="col-sm-6">
                        <h6>Chandigarh Branch: </h6>
                        <address>SCO: 215-216-217,(Near ICICI Bank), Opposite Petrol Pump Sector - 34 A Chandigarh. Pincode: 160022</address>
                    </div>
                    <div className="col-sm-6">
                        <h6>Delhi Branch: </h6>
                        <address>C-313, Sector - 7, (Near Ramphal Chowk), Dwarka, New Delhi. Pincode: 110075</address>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;