import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div class="container-fluid mb-3">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="heading">
                        <h5 class="text text-danger text-lg">India's #1 Defence Academy</h5>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav ms-auto">
                            <Link exact to="/" class="nav-link active">
                                <li class="nav-item"><button class="btn btn-success" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</button></li>
                            </Link>
                            <Link class="nav-link">
                                <li class="nav-item dropdown dropdown-mega text-decoration-none">
                                    <button class="btn btn-success dropdown-toggle" data-bs-auto-close="outside" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Courses</button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li class="dropend">
                                            <Link class="dropdown-item dropdown-toggle text text-success text-decoration-none" data-bs-toggle="dropdown" style={{fontWeight: "bold"}}>NDA + School</Link>
                                            <ul class="dropdown-menu shadow">
                                                <Link exact to="/nda-after-8th" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">NDA After 8th</li></Link>
                                                <Link exact to="/nda-after-9th" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">NDA After 9th</li></Link>
                                                <Link exact to="/nda-after-10th" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">NDA After 10th</li></Link>
                                                <Link exact to="/nda-after-11th" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">NDA After 11th</li></Link>
                                            </ul>
                                        </li>
                                        <li class="dropend">
                                            <Link class="dropdown-item dropdown-toggle text text-success text-decoration-none" data-bs-toggle="dropdown" style={{fontWeight: "bold"}}>NDA Only</Link>
                                            <ul class="dropdown-menu shadow">
                                                <Link exact to="/nda-crash-course" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">NDA Crash Course</li></Link>
                                                <Link exact to="/nda-detail-course" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">NDA Detail Course</li></Link>
                                                <Link exact to="/nda-foundation" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">NDA Foundation</li></Link>
                                                <Link exact to="/nda-nurture" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">NDA Nurture</li></Link>
                                            </ul>
                                        </li>
                                        <li class="dropend">
                                            <Link class="dropdown-item dropdown-toggle text text-success text-decoration-none" data-bs-toggle="dropdown" style={{fontWeight: "bold"}}>NDA + Graduation</Link>
                                            <ul class="dropdown-menu shadow">
                                                <Link exact to="/residential" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Residential Graduation Integrated Program</li></Link>
                                                <Link exact to="/coaching" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Coaching Classes Only</li></Link>
                                            </ul>
                                        </li>
                                        <Link exact to="/ssb-training" class="nav-link"><li class="nav-item text text-success text-decoration-none ms-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{fontWeight: "bold"}}>SSB & Interview</li></Link>
                                        <li class="dropend">
                                            <Link class="dropdown-item dropdown-toggle text text-success text-decoration-none" data-bs-toggle="dropdown" style={{fontWeight: "bold"}}>AFPI Entrance</Link>
                                            <ul class="dropdown-menu shadow">
                                                <Link exact to="/afpi" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Maharaja Ranjit Singh Armed Force Preparatory Instituse</li></Link>
                                                <Link exact to="/gurukul" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Gurukul</li></Link>
                                                <Link exact to="/army-public-school" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Army Public School (APS)</li></Link>
                                            </ul>
                                        </li>
                                        <li class="dropend">
                                            <Link class="dropdown-item dropdown-toggle text text-success text-decoration-none" data-bs-toggle="dropdown" style={{fontWeight: "bold"}}>Sainik & Military School</Link>
                                            <ul class="dropdown-menu shadow">
                                                <Link exact to="/aissee" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Sainik School - AISSEE for 6th & 9th entry</li></Link>
                                                <Link exact to="/rms" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Rashtriya Military School - RMS for 6th & 9th entry</li></Link>
                                                <Link exact to="/rimc" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Rashtriya Indian Military College - RIMC for 8th entry</li></Link>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </Link>
                            <Link class="nav-link">
                                <li class="nav-item dropdown dropdown-mega text-decoration-none">
                                    <button class="btn btn-success dropdown-toggle" data-bs-auto-close="outside" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">FAQ</button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <Link exact to="/nda-faq" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{fontWeight: "bold"}}>NDA FAQ</li></Link>
                                        <Link exact to="/sainik-school-faq" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{fontWeight: "bold"}}>Sainik School FAQ</li></Link>
                                    </ul>
                                </li>
                            </Link>
                            <Link class="nav-link">
                                <li class="nav-item dropdown dropdown-mega text-decoration-none">
                                    <button class="btn btn-success dropdown-toggle" data-bs-auto-close="outside" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">School Integrated Programme</button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <Link exact to="/school-integrated-programme" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{fontWeight: "bold"}}>Programme Details</li></Link>
                                        <Link exact to="/physical-ssb-training" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{fontWeight: "bold"}}>Physical & SSB Training</li></Link>
                                        <Link exact to="/hostel-facility" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{fontWeight: "bold"}}>Hostel Facilites</li></Link>
                                    </ul>
                                </li>
                            </Link>
                            <Link class="nav-link">
                                <li class="nav-item dropdown dropdown-mega text-decoration-none">
                                    <button class="btn btn-success dropdown-toggle" data-bs-auto-close="outside" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Application Forms</button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <Link exact to="/enquiry-form" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{fontWeight: "bold"}}>Enquiry Form</li></Link>
                                        <Link exact to="/admission-form" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{fontWeight: "bold"}}>Admission Form</li></Link>
                                        <Link exact to="/scholarship-form" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{fontWeight: "bold"}}>Scholarship Form</li></Link>
                                    </ul>
                                </li>
                            </Link>
                            <Link exact to="/gallery" class="nav-link">
                                <li class="nav-item"><button class="btn btn-success" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Gallery</button></li>
                            </Link>
                            <Link exact to="/contact-us" class="nav-link">
                                <li class="nav-item"><button class="btn btn-success" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact Us</button></li>
                            </Link>
                        </ul>
                    </div>
                </div >
            </nav >
        </div >
    );
}

export default Navbar;