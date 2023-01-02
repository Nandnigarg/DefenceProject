import { NavLink } from 'react-router-dom';
import dcgLogo from '../assets/dcgLogo.jpg';

function Navbar() {
    return (
        <div style={{ backgroundColor: "rgb(247,247,247)" }} class="container-fluid">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <img width="25%" height="auto" style={{maxHeight: "250px"}} class="navbar-brand" src={dcgLogo} alt="" />
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
                                            <NavLink class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown">NDA + School Integrated Program</NavLink>
                                            <ul class="dropdown-menu shadow">
                                                <li><NavLink exact to="/nda-after-8th" class="dropdown-item">NDA After 8th</NavLink></li>
                                                <li><NavLink exact to="/nda-after-9th" class="dropdown-item">NDA After 9th</NavLink></li>
                                                <li><NavLink exact to="/nda-after-10th" class="dropdown-item">NDA After 10th</NavLink></li>
                                                <li><NavLink exact to="/nda-after-11th" class="dropdown-item">NDA After 811h</NavLink></li>
                                            </ul>
                                        </li>
                                        <NavLink exact to="/nda-only"  class="nav-link"><li class="nav-item">NDA only</li></NavLink>
                                        <NavLink exact to="/nda-after-12"  class="nav-link"><li class="nav-item">NDA + Graduation Integrated Program</li></NavLink>
                                        <NavLink exact to="/ssb-training"  class="nav-link"><li class="nav-item">SSB Training</li></NavLink>
                                    </ul>
                                </li>
                            </NavLink>
                            <NavLink exact to="/faq" class="nav-link">
                                <li class="nav-item"><button class="btn btn-success me-2 mt-2">FAQ</button></li>
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