import React from 'react';

const Home = () => {
    return (
        <div className="container mt-5">
            {/* Heading */}
            <h2 className="mb-4 text-center text-primary">
                Welcome, Super Admin 👑
            </h2>

            {/* Summary Cards */}
            <div className="row g-4">
                <div className="col-md-3">
                    <div className="card text-white bg-primary shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">Total Admins</h5>
                            <p className="display-6 fw-bold">5</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-white bg-success shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">Total Students</h5>
                            <p className="display-6 fw-bold">124</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-white bg-warning shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">Assessments</h5>
                            <p className="display-6 fw-bold">18</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-white bg-info shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">Questions</h5>
                            <p className="display-6 fw-bold">260</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Revenue Section */}
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-success">Total Revenue</h5>
                            <p className="fs-3 fw-bold">₹12,450</p>
                            <small className="text-muted">Includes all assessments from all admins</small>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-primary">Revenue by Category</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Digital Electronics</span> <span>₹3,200</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>VLSI Basics</span> <span>₹5,000</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>CMOS Design</span> <span>₹4,250</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="text-center mt-5">
                <a href="/admins" className="btn btn-outline-primary mx-2">
                    Manage Admins
                </a>
                <a href="/students" className="btn btn-outline-success mx-2">
                    Manage Students
                </a>
                <a href="/reports" className="btn btn-outline-secondary mx-2">
                    Download Reports
                </a>
            </div>
        </div>
    );
};

export default Home;
