import Form from "../Other comps/Form";
import hostelImg from "../assets/hostel.jpg";

function Hostel(){
    return(
        <div>
            <img  height="auto" width="100%" src={hostelImg} alt="" />
            <Form />
        </div>
    )
}

export default Hostel;