import payment from '../assets/scanner.jpg';

function Payment() {
    return (
        <div style={{ textAlign: "center" }} className="container-fluid">
            <div className="container">
                <img height="30%" width="30%" src={payment} alt="" />
                <h2 className="text text-danger mt-5" style={{ fontSize: "3rem", fontWeight: "bold" }}>Account Details</h2>
                <hr />
                <p style={{ fontSize: "22px" }}><span style={{ fontWeight: "bold" }}>Account Name: </span>Delhi Career Group </p>
                <p style={{ fontSize: "22px" }}><span style={{ fontWeight: "bold" }}>Bank Details: </span>ICICI BANK, Sector 34-A, Chandigarh</p>
                <p style={{ fontSize: "22px" }}><span style={{ fontWeight: "bold" }}>Account No: </span>134105000344</p>
                <p style={{ fontSize: "22px" }}><span style={{ fontWeight: "bold" }}>IFSC Code: </span>ICIC0001341</p>
                <p style={{ fontSize: "22px" }}><span style={{ fontWeight: "bold" }}>Account Type: </span>Current</p>
            </div>
        </div>
    )
}

export default Payment;