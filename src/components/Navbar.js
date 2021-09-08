import { FiSun } from "react-icons/fi";
import { FaMoon, FaBars } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = ({ theme, setTheme }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<section>
			<div className={`Navbar ${theme && "Navbar-dark"}`}>
				<ul>
					<li>
						<Link to='/' className={`Link Link-main ${theme && "Link-dark"}`} onClick={() => setIsOpen(false)}>
							🅿🅺
						</Link>
					</li>
					<li>
						<Link to='/about' className={`Link nav-none ${theme && "Link-dark"}`}></Link>
					</li>
					<li>
						<Link to='/projects' className={`Link nav-none ${theme && "Link-dark"}`}>
							projects
						</Link>
					</li>
					<li>
						<Link to='/skills' className={`Link nav-none ${theme && "Link-dark"}`}>
							skills
						</Link>
					</li>
					<li>
						<a href='https://drive.google.com/file/d/1yVsfsYxC-1Poxn8qgaudiPmn_JHbRkCi/view' className={`Link nav-none ${theme && "Link-dark"}`} target='blank'>
							resume
						</a>
					</li>
					<li className={`Link icons ${theme && "Link-dark"}`}>{theme ? <FiSun onClick={() => setTheme(!theme)} /> : <FaMoon onClick={() => setTheme(!theme)} />}</li>
					<FaBars className={`bar Link ${theme && "Link-dark"}`} onClick={() => setIsOpen(!isOpen)} />
				</ul>
			</div>
			<div className={`drop-down ${!isOpen && "drop-up"} ${!theme && "drop-down-light"}`}>
				<ul>
					<li>
						<Link to='/projects' className={`bar-link ${!theme && "bar-link-light"}`} onClick={() => setIsOpen(false)}>
							Projects
						</Link>
					</li>
					<li>
						<Link to='/skills' className={`bar-link ${!theme && "bar-link-light"}`} onClick={() => setIsOpen(false)}>
							Skills
						</Link>
					</li>
					<li>
						<a href='https://drive.google.com/file/d/1yVsfsYxC-1Poxn8qgaudiPmn_JHbRkCi/view' className={`bar-link ${!theme && "bar-link-light"}`} onClick={() => setIsOpen(false)} target='blank'>
							resume
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Navbar;
