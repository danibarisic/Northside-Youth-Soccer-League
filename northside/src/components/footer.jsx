import React, { } from 'react';
import "../index.css"

export const Footer = () => {
    <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center text-md-start">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <h5 className="text-uppercase">Northside Youth Soccer League</h5>
                    <p>Building community and teamwork through the joy of soccer. Est. 1998.</p>
                </div>

                <div className="col-md-3 mb-3">
                    <h6 className="text-uppercase">Quick Links</h6>
                    <ul className="list-unstyled">
                        <li><a href="/schedule" className="text-white text-decoration-none">Schedule</a></li>
                        <li><a href="/teams" className="text-white text-decoration-none">Teams</a></li>
                        <li><a href="/registration" className="text-white text-decoration-none">Register</a></li>
                        <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-3">
                <small>&copy; 2025 Northside Youth Soccer League. All rights reserved.</small>
            </div>
        </div>
    </footer>
}