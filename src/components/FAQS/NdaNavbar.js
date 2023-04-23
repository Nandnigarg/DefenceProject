import { Link } from 'react-router-dom';

function NdaNavbar(props) {
    return (
        <div className="container-fluid">
            <div style={{ border: "1px solid gray", boxShadow: "0px 1px 2px gray" }} className="container p-4">
                <div className="row mb-4">
                    <div className="col-md-8">
                        <h3>{props.text}</h3>
                    </div>
                    <div className="col-md-4">
                        <button style={{ border: "1px solid blue" }} className="btn btn-light text text-primary mt-3 me-3">Get Question Papers</button>
                        <button className="btn btn-danger text text-light mt-3 me-3">Download Guide</button>
                    </div>
                </div>
                <hr />
                <nav class="navbar navbar-expand-sm">
                    <div class="container">
                        <div>
                            <ul style={{ display: "flex", flexWrap: "wrap" }} class="navbar-nav">
                                <Link exact to="/nda-overview" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Overview</li>
                                </Link>
                                <Link exact to="/nda-admit-card" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Admit Card</li>
                                </Link>
                                <Link exact to="/nda-application" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Application Forms</li>
                                </Link>
                                <Link exact to="/nda-dates" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Dates</li>
                                </Link>
                                <Link exact to="/nda-notification" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Notification</li>
                                </Link>
                                <Link exact to="/nda-results" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Results</li>
                                </Link>
                                <Link exact to="/nda-answer-key" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Answer key</li>
                                </Link>
                                <Link exact to="/analysis" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Analysis</li>
                                </Link>
                                <Link exact to="/nda-ques-paper" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Question Papers</li>
                                </Link>
                                <Link exact to="/nda-cut-off" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Cut Off</li>
                                </Link>
                                <Link exact to="/nda-vacancies" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Vacancies</li>
                                </Link>
                                <Link exact to="/nda-recruitment" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Recruitment</li>
                                </Link>
                                <Link exact to="/nda-preparation" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Preparation</li>
                                </Link>
                                <Link exact to="/nda-books" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Books</li>
                                </Link>
                                <Link exact to="/nda-mock-text" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Mock Test</li>
                                </Link>
                                <Link exact to="/nda-pattern" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Pattern</li>
                                </Link>
                                <Link exact to="/nda-syllabus" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Syllabus</li>
                                </Link>
                                <Link exact to="/nda-selection-process" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Selection Process</li>
                                </Link>
                                <Link exact to="/nda-salary" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Salary</li>
                                </Link>
                                <Link exact to="/nda-news" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">News</li>
                                </Link>
                                <Link exact to="/nda-prep-tips" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Prep Tips</li>
                                </Link>
                                <Link exact to="/nda-counselling" class="nav-link">
                                    <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Counselling</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NdaNavbar;