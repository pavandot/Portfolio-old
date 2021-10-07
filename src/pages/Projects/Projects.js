import React from "react";
import "./Projects.css";
import Mega from "../../images/mega.png";
// import Fedora from "../../images/fedora.png";
// import Port from "../../images/port.png";
// import Todo from "../../images/todo.png";
// import Expense from "../../images/expense.png";
// icons
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiJavascript, SiCss3 } from "react-icons/si";
const Projects = ({ theme, setTheme }) => {
	return (
		<section className={`project ${theme ? "project-dark" : "project-light"}`} id='project'>
			<div className='project-title'>
				<span>
					<img src='https://reilly.dev/static/media/Planet.fb3c50f9.svg' alt='alt' />
				</span>
				<p>Here's What I've Worked On</p>
			</div>
			<div className='project-item'>
				<div className='project-img'>
					<img src={Mega} alt='mega' />
				</div>
				<div className='project-info'>
					<h1>Mega Shopping </h1>
					<p>A full stack shopping website that allows user to add multiple items in to cart and can buy the items </p>
					<div className='project-tech'>
						<span>
							<FaReact className={`project-icons ${theme ? "project-icons-dark" : "project-icons-light"}`} />
							<p>React</p>
						</span>
						<span>
							<SiRedux className={`project-icons ${theme ? "project-icons-dark" : "project-icons-light"}`} />
							<p>Redux</p>
						</span>
						<span>
							<SiTailwindcss className={`project-icons ${theme ? "project-icons-dark" : "project-icons-light"}`} />
							<p>Tailwind CSS</p>
						</span>
						<span>
							<SiJavascript className={`project-icons ${theme ? "project-icons-dark" : "project-icons-light"}`} />
							<p>JavaScript</p>
						</span>
						<span>
							<SiCss3 className={`project-icons ${theme ? "project-icons-dark" : "project-icons-light"}`} />
							<p>CSS</p>
						</span>
					</div>
					<div className='project-btn-group'>
						<a href='https://mega-shopping.netlify.app/' className='project-btn-1'>
							Live Demo
						</a>
						<a href='https://github.com/pavandot/mega-shopping.git' className='project-btn-2'>
							View Source
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
