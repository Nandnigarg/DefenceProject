import Phone from '../assets/phoneIcon.jpg';
import WhatsApp from '../assets/whatsappIcon.jpg';
import Facebook from '../assets/Facebook.jpg';
import Instagram from '../assets/Instagram.jpg';
import Youtube from '../assets/Youtube.jpg';
import Register from '../assets/Register.jpg';

function Icons(){
    return(
        <div>
            <a style={{position: "fixed", bottom: "10px", left: "20px", zIndex: "10"}} href="tel:08427414076" className="text-decoration-none text text-dark"><img height="50px" width="50px" src={Phone} alt="" /></a>
            <a style={{position: "fixed", bottom: "70px", left: "17px", zIndex: "10"}} href="https://wa.me/+918146258794" target="_blank" className="text-decoration-none text text-dark"><img height="60px" width="60px" src={WhatsApp} alt="" /></a>
            <a style={{position: "fixed", bottom: "150px", right: "20px", zIndex: "10"}} href="https://www.facebook.com/dcgacademy/" target="_blank" className="text-decoration-none text text-dark"><img height="35px" width="35px" src={Facebook} alt='' /></a>
            <a style={{position: "fixed", bottom: "107px", right: "20px", zIndex: "10"}} href="https://www.youtube.com/@DelhiCareerGroupacademy" target="_blank" className="text-decoration-none text text-dark"><img height="35px" width="35px" src={Youtube} alt='' /></a>
            <a style={{position: "fixed", bottom: "67px", right: "20px", zIndex: "10"}} href="https://www.instagram.com/delhi_career_group/" target="_blank" className="text-decoration-none text text-dark"><img height="35px" width="35px" src={Instagram} alt='' /></a>
            <a style={{position: "fixed", bottom: "10px", right: "20px", zIndex: "10"}} href="https://www.nationdefenceacademy.com/scholarship-form" target="_blank" className="text-decoration-none text text-dark"><img height="60px" width="120px" src={Register} alt='' /></a>
        </div>
    )
}

export default Icons;