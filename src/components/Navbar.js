import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <div className="heading"><img src="http://recb.ac.in/img/banner1.png" className="logo" />
            </div>
            <div id="nav">
                <ul className="nav">
                    <li className="navelem">
                        {props.First}
                    </li>
                    <li className="navelem">
                        {props.Secound}
                        <ul id="submenu">
                            <li className="submenuelem"><a href="#" className="navlinks">Academic Divisions</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Current Students</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Prospective Students</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Gender Cell(FKA Women's cell)</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Student Wellness centre(Counselling Care)</a>
                            </li>
                        </ul>
                    </li>
                    <li className="navelem">Faculty
                        <ul id="submenu">
                            <li className="submenuelem"><a href="#" className="navlinks">Academic Divisions</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Faculty at RECB</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Prospective Faculty</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Current Faculty</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Retired Faculty</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Awards and Honours</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Chair Professorships</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">RECB Research Park</a></li>
                        </ul>
                    </li>
                    <li className="navelem">Staff
                        <ul id="submenu">
                            <li className="submenuelem"><a href="#" className="navlinks">Staff Handbook</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Prospective Staff</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Current Staff</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Retired Staff</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Internal Pages</a></li>


                        </ul>
                    </li>
                    <li className="navelem">Media
                        <ul id="submenu">
                            <li className="submenuelem"><a href="#" className="navlinks">Public Relation Office</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Social Media Policy</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">News Hub</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Photo Gallery</a></li>

                        </ul>
                    </li>
                    <li className="navelem">Alumni
                        <ul id="submenu">
                            <li className="submenuelem"><a href="#" className="navlinks">RECB Alumni Office</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Alumni Association</a></li>
                        </ul>
                    </li>
                    <li className="navelem">Industry
                        <ul id="submenu">
                            <li className="submenuelem"><a href="#" className="navlinks">RECB Research Park</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">SINE</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Consultancy and Research</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Continuing Education</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Analytical Measurements</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Technology Transfer & Licensing</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Doner Relationship</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Placements at RECB</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Vendor's Corner</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Tenders</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">GST Registration Details</a></li>
                        </ul>
                    </li>
                    <li className="navelem">Resources
                        <ul id="submenu">
                            <li className="submenuelem"><a href="#" className="navlinks">Institute Policies</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Faculties at RECB</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Donor Relation Programme</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">IoE</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Gender cell</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Emergency Contact</a></li>
                            <li className="submenuelem"><a href="#" className="navlinks">Event Calender</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
