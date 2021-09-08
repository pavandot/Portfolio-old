import React from "react";
import "./Skills.css";
import { FaJsSquare, FaHtml5, FaLinux, FaCss3Alt, FaGitAlt, FaReact } from "react-icons/fa";

const Skills = ({ theme, setTheme }) => {
	return (
		<section className={`Skills ${theme && "Skills-dark"}`}>
			<div className='Skills-grid'>
				<div className={`grid-item ${!theme && "grid-item-light"}`}>
					<FaJsSquare className='icons' />
					<h1>JavaScript</h1>
				</div>
				<div className={`grid-item ${!theme && "grid-item-light"}`}>
					<FaHtml5 className='icons' />
					<h1>Html & Css</h1>
				</div>
				<div className={`grid-item ${!theme && "grid-item-light"}`}>
					<FaLinux className='icons' />
					<h1>Linux</h1>
				</div>
				<div className={`grid-item ${!theme && "grid-item-light"}`}>
					<FaCss3Alt className='icons' />
					<h1>Tailwidncss</h1>
				</div>
				<div className={`grid-item ${!theme && "grid-item-light"}`}>
					<FaGitAlt className='icons' />
					<h1>Git</h1>
				</div>
				<div className={`grid-item ${!theme && "grid-item-light"}`}>
					<FaReact className='icons' />
					<h1>Reactjs</h1>
				</div>
			</div>
		</section>
	);
};

export default Skills;
