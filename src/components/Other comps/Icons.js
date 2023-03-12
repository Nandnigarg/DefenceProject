import Phone from '../assets/phoneIcon.jpg';
import WhatsApp from '../assets/whatsappIcon.jpg';

function Icons(){
    return(
        <div>
            <a style={{position: "fixed", bottom: "15px", left: "20px", zIndex: "10"}} href="tel:08968024595" className="text-decoration-none text text-dark"><img height="35px" width="35px" src={Phone} alt="" /></a>
            <a style={{position: "fixed", bottom: "10px", right: "20px", zIndex: "10"}} href="https://wa.me/+918968024595" target="_blank" className="text-decoration-none text text-dark"><img height="50px" width="50px" src={WhatsApp} alt="" /></a>
        </div>
    )
}

export default Icons;