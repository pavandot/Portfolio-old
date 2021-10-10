import { FiSun } from "react-icons/fi";
import { FaMoon, FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import React from "react";
import "./Navbar.css";
import { useState } from "react";

const Navbar = ({ theme, setTheme }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<section id='navbar-home'>
			<div className={`Navbar ${theme && "Navbar-dark"}`}>
				<ul>
					<li>
						<a href='#navbar-home' className={`Link Link-main ${theme && "Link-dark"}`} onClick={() => setIsOpen(false)}>
							🅿🅺
						</a>
					</li>
					<li>
						<a href='#about' className={`Link nav-none ${theme && "Link-dark"}`}>
							About
						</a>
					</li>
					<li>
						<a href='#project' className={`Link nav-none ${theme && "Link-dark"}`}>
							portfolio
						</a>
					</li>
					<li>
						<a href='#contact' className={`Link nav-none ${theme && "Link-dark"}`}>
							contact
						</a>
					</li>
					<li>
						<a href='https://drive.google.com/file/d/1BjSi6Y4BQRN1RtgDYHpQq56Hn9yn61Ny/view?usp=sharing' className={`Link nav-none ${theme && "Link-dark"}`} target='blank'>
							resume
						</a>
					</li>
					<li className={`Link nav-theme icons ${theme && "Link-dark"}`}>{theme ? <FiSun onClick={() => setTheme(!theme)} /> : <FaMoon onClick={() => setTheme(!theme)} />}</li>

					<FaBars className={`bar Link ${theme && "Link-dark"} ${isOpen && "bar-close"}`} onClick={() => setIsOpen(!isOpen)} />
					<GrClose className={`bar Link ${theme && "Link-dark"} ${!isOpen && "bar-close"}`} onClick={() => setIsOpen(!isOpen)} />
				</ul>
			</div>
			<div className={`drop-down ${!isOpen && "drop-up"} ${!theme && "drop-down-light"}`}>
				<ul>
					<li>
						<a href='#about' className={`bar-link ${!theme && "bar-link-light"}`} onClick={() => setIsOpen(false)}>
							About
						</a>
					</li>
					<li>
						<a href='#project' className={`bar-link ${!theme && "bar-link-light"}`} onClick={() => setIsOpen(false)}>
							portfolio
						</a>
					</li>
					<li>
						<a href='https://drive.google.com/file/d/1BjSi6Y4BQRN1RtgDYHpQq56Hn9yn61Ny/view?usp=sharing' className={`bar-link ${!theme && "bar-link-light"}`} onClick={() => setIsOpen(false)} target='blank'>
							resume
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Navbar;
