import { NavLink } from 'react-router-dom';
import dcgLogo from '../assets/dcg logo.jpeg';

function Navbar() {
    return (
        <div style={{backgroundColor: "rgb(247,247,247)"}} class="container-fluid">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <img width="25%" class="navbar-brand" src={dcgLogo} alt="" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav ms-auto">
                            <NavLink exact to="/" class="nav-link active">
                                <li class="nav-item"><button class="btn btn-success me-2 mt-2">Home</button></li>
                            </NavLink>
                            <NavLink class="nav-link">
                                <li class="nav-item dropdown">
                                    <button class="btn btn-success me-2 mt-2 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Courses</button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <NavLink exact to="/nda-after-8"><li>NDA After 8th</li></NavLink>
                                        <NavLink exact to="/nda-after-9"><li>NDA After 9th</li></NavLink>
                                        <NavLink exact to="/nda-after-10"><li>NDA After 10th</li></NavLink>
                                        <NavLink exact to="/nda-after-11"><li>NDA After 11th</li></NavLink>
                                        <NavLink exact to="/nda-after-12"><li>NDA After 12th</li></NavLink>
                                        <NavLink exact to="/ssb-training"><li>SSB Training</li></NavLink>
                                    </ul>
                                </li>
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