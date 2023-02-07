import payment from '../assets/scanner.jpg';

function Payment(){
    return(
        <div style={{textAlign: "center"}} className="container-fluid">
            <img height="30%" width="30%" src={payment} alt="" />
        </div>
    )
}

export default Payment;