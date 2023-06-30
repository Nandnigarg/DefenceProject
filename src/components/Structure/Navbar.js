import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div class="container-fluid mb-3">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="heading">
                        <h5 class="text-md" style={{ fontWeight: "bold", fontSize: "2.5rem", color: "rgb(242,113,0)" }}>India's No.1<br /> Defence Academy</h5>
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
                                        <Link exact to="/nda-schooling" class="nav-link"><li class="nav-item text text-success text-decoration-none ms-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{ fontWeight: "bold" }}>NDA with Schooling Program</li></Link>
                                        <Link exact to="/nda-coaching" class="nav-link"><li class="nav-item text text-success text-decoration-none ms-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{ fontWeight: "bold" }}>NDA Coaching</li></Link>
                                        <li class="dropend">
                                            <Link class="dropdown-item dropdown-toggle text text-success text-decoration-none" data-bs-toggle="dropdown" style={{ fontWeight: "bold" }}>NDA + Graduation</Link>
                                            <ul class="dropdown-menu shadow">
                                                <Link exact to="/residential" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Residential Graduation Integrated Program</li></Link>
                                                <Link exact to="/coaching" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Coaching Classes Only</li></Link>
                                            </ul>
                                        </li>
                                        <Link exact to="/ssb-training" class="nav-link"><li class="nav-item text text-success text-decoration-none ms-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{ fontWeight: "bold" }}>SSB & Interview</li></Link>
                                        <li class="dropend">
                                            <Link class="dropdown-item dropdown-toggle text text-success text-decoration-none" data-bs-toggle="dropdown" style={{ fontWeight: "bold" }}>AFPI Entrance</Link>
                                            <ul class="dropdown-menu shadow">
                                                <Link exact to="/afpi" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Maharaja Ranjit Singh Armed Force Preparatory Instituse</li></Link>
                                                <Link exact to="/gurukul" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Gurukul</li></Link>
                                                <Link exact to="/army-public-school" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Army Public School (APS)</li></Link>
                                            </ul>
                                        </li>
                                        <li class="dropend">
                                            <Link class="dropdown-item dropdown-toggle text text-success text-decoration-none" data-bs-toggle="dropdown" style={{ fontWeight: "bold" }}>Sainik & Military School</Link>
                                            <ul class="dropdown-menu shadow">
                                                <Link exact to="/aissee" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Sainik School - AISSEE for 6th & 9th entry</li></Link>
                                                <Link exact to="/rms" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Rashtriya Military School - RMS for 6th & 9th entry</li></Link>
                                                <Link exact to="/rimc" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Rashtriya Indian Military College - RIMC for 8th entry</li></Link>
                                                <Link exact to="/cds" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Combined defense services (CDS)</li></Link>
                                                <Link exact to="/afcat" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Air Force Common Admission Test (AFCAT)</li></Link>
                                                <Link exact to="/mns" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Military Nursing Services (MNS)</li></Link>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </Link>
                            <Link class="nav-link">
                                <li class="nav-item dropdown dropdown-mega text-decoration-none">
                                    <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">FAQ</button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <Link exact to="/nda-recruitment" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{ fontWeight: "bold" }}>NDA FAQ</li></Link>
                                        <Link exact to="/sainik-school-faq" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{ fontWeight: "bold" }}>Sainik School FAQ</li></Link>
                                        <Link exact to="/ssb-faq" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{ fontWeight: "bold" }}>SSB FAQ</li></Link>
                                    </ul>
                                </li>
                            </Link>
                            <Link class="nav-link">
                                <li class="nav-item dropdown dropdown-mega text-decoration-none">
                                    <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">School Integrated Programme</button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <Link exact to="/nda-schooling" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{ fontWeight: "bold" }}>NDA with Schooling Program</li></Link>
                                        <Link exact to="/school-integrated-programme" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{ fontWeight: "bold" }}>Programme Details</li></Link>
                                        <Link exact to="/physical-ssb-training" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{ fontWeight: "bold" }}>Physical & SSB Training</li></Link>
                                        <Link exact to="/hostel-facility" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{ fontWeight: "bold" }}>Hostel Facilites</li></Link>
                                    </ul>
                                </li>
                            </Link>
                            <Link class="nav-link">
                                <li class="nav-item dropdown dropdown-mega text-decoration-none">
                                    <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Application Forms</button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <Link exact to="/enquiry-form" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{ fontWeight: "bold" }}>Enquiry Form</li></Link>
                                        <Link exact to="/admission-form" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{ fontWeight: "bold" }}>Admission Form</li></Link>
                                        <Link exact to="/scholarship-form" class="dropdown-item"><li class="nav-item text text-success text-decoration-none" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{ fontWeight: "bold" }}>Scholarship Form</li></Link>
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