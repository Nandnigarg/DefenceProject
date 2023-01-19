import { NavLink, Link } from 'react-router-dom';

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
                            <NavLink exact to="/" class="nav-link active">
                                <li class="nav-item"><button class="btn btn-success me-2 mt-2">Home</button></li>
                            </NavLink>
                            <NavLink class="nav-link">
                                <li class="nav-item dropdown dropdown-mega">
                                    <button class="btn btn-success me-2 mt-2 dropdown-toggle" data-bs-auto-close="outside" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Courses</button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li class="dropend">
                                            <Link class="dropdown-item dropdown-toggle text text-success text-decoration-none" data-bs-toggle="dropdown">NDA + School</Link>
                                            <ul class="dropdown-menu shadow">
                                                <Link exact to="/nda-after-8th" class="dropdown-item"><li class="nav-item text text-success text-decoration-none">NDA After 8th</li></Link>
                                                <Link exact to="/nda-after-9th" class="dropdown-item"><li class="nav-item text text-success text-decoration-none">NDA After 9th</li></Link>
                                                <Link exact to="/nda-after-10th" class="dropdown-item"><li class="nav-item text text-success text-decoration-none">NDA After 10th</li></Link>
                                                <Link exact to="/nda-after-11th" class="dropdown-item"><li class="nav-item text text-success text-decoration-none">NDA After 11th</li></Link>
                                            </ul>
                                        </li>
                                        <li class="dropend">
                                            <Link class="dropdown-item dropdown-toggle text text-success text-decoration-none" data-bs-toggle="dropdown">NDA Only</Link>
                                            <ul class="dropdown-menu shadow">
                                                <li class="dropend">
                                                    <Link class="dropdown-item dropdown-toggle text text-success text-decoration-none" data-bs-toggle="dropdown">NDA Crash Course</Link>
                                                    <ul class="dropdown-menu shadow">
                                                        <Link exact to="/1-month" class="dropdown-item"><li class="nav-item text text-success text-decoration-none">1 Month Batch</li></Link>
                                                        <Link exact to="/3-month" class="dropdown-item"><li class="nav-item text text-success text-decoration-none">3 Months Bactch</li></Link>
                                                    </ul>
                                                </li>
                                                <Link exact to="/nda-after-9th" class="dropdown-item"><li class="nav-item text text-success text-decoration-none">NDA Detail Course</li></Link>
                                                <Link exact to="/nda-after-10th" class="dropdown-item"><li class="nav-item text text-success text-decoration-none">NDA Foundation</li></Link>
                                                <Link exact to="/nda-after-11th" class="dropdown-item"><li class="nav-item text text-success text-decoration-none">NDA Nurture</li></Link>
                                            </ul>
                                        </li>
                                        <li class="dropend">
                                            <Link class="dropdown-item dropdown-toggle text text-success text-decoration-none" data-bs-toggle="dropdown">NDA + Graduation</Link>
                                            <ul class="dropdown-menu shadow">
                                                <Link exact to="/residential" class="dropdown-item"><li class="nav-item text text-success text-decoration-none">Residential Graduation Integrated Program</li></Link>
                                                <Link exact to="/coaching" class="dropdown-item"><li class="nav-item text text-success text-decoration-none">Coaching Classes Only</li></Link>
                                            </ul>
                                        </li>
                                        <Link exact to="/ssb-training" class="nav-link"><li class="nav-item text text-success text-decoration-none ms-2">SSB & Interview</li></Link>
                                        <li class="dropend">
                                            <Link class="dropdown-item dropdown-toggle text text-success text-decoration-none" data-bs-toggle="dropdown">AFPI Entrance</Link>
                                            <ul class="dropdown-menu shadow">
                                                <Link exact to="/afpi" class="dropdown-item"><li class="nav-item text text-success text-decoration-none">Maharaja Ranjit Singh Armed Force Preparatory Instituse</li></Link>
                                                <Link exact to="/gurukul" class="dropdown-item"><li class="nav-item text text-success text-decoration-none">Gurukul</li></Link>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </NavLink>
                            <NavLink exact to="/faq" class="nav-link">
                                <li class="nav-item"><button class="btn btn-success me-2 mt-2">FAQ</button></li>
                            </NavLink>
                            <NavLink exact to="/scholarship" class="nav-link">
                                <li class="nav-item"><button class="btn btn-success me-2 mt-2">Scholarship</button></li>
                            </NavLink>
                            <NavLink exact to="/schooling-program" class="nav-link">
                                <li class="nav-item"><button class="btn btn-success me-2 mt-2">School Integrated Program</button></li>
                            </NavLink>
                            <NavLink exact to="/hostel-facility" class="nav-link">
                                <li class="nav-item"><button class="btn btn-success me-2 mt-2">Registration Form</button></li>
                            </NavLink>
                            <NavLink exact to="/gallery" class="nav-link">
                                <li class="nav-item"><button class="btn btn-success me-2 mt-2">Gallery</button></li>
                            </NavLink>
                            <NavLink exact to="/contact-us" class="nav-link">
                                <li class="nav-item"><button class="btn btn-success me-2 mt-2">Contact Us</button></li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;