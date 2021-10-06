import React from "react";
import "./Projects.css";
import Mega from "../../images/mega.png";
import Fedora from "../../images/fedora.png";
import Port from "../../images/port.png";
import Todo from "../../images/todo.png";
import Expense from "../../images/expense.png";
const Projects = ({ theme, setTheme }) => {
	return (
		<section className={`Projects ${theme && "Projects-dark"}`}>
			<div className='Projects-grid'>
				<div className={`project-item ${!theme && "project-item-light"}`}>
					<img src={Mega} alt='' />
					<h1>Mega Shopping</h1>
					<div className='project-btn'>
						<a href='https://mega-shopping.netlify.app/' className={`project-btn-dark ${theme && "project-btn-light"}`}>
							Live Demo
						</a>
					</div>
				</div>
				<div className={`project-item ${!theme && "project-item-light"}`}>
					<img src={Fedora} alt='' />
					<h1>Fedora Linux Clone</h1>
					<div className='project-btn'>
						<a href='https://fedora.netlify.app/' className={`project-btn-dark ${theme && "project-btn-light"}`}>
							Live Demo
						</a>
					</div>
				</div>
				<div className={`project-item ${!theme && "project-item-light"}`}>
					<img src={Port} alt='' />
					<h1>Portfolio</h1>
					<div className='project-btn'>
						<a href='https://fedora.netlify.app/' className={`project-btn-dark ${theme && "project-btn-light"}`}>
							Live Demo
						</a>
					</div>
				</div>
				<div className={`project-item ${!theme && "project-item-light"}`}>
					<img src={Todo} alt='' />
					<h1>Todo App</h1>
					<div className='project-btn'>
						<a href='https://pavan-todo.netlify.app/' className={`project-btn-dark ${theme && "project-btn-light"}`}>
							Live Demo
						</a>
					</div>
				</div>
				<div className={`project-item ${!theme && "project-item-light"}`}>
					<img src={Expense} alt='' />
					<h1>expense tracker</h1>
					<div className='project-btn'>
						<a href='https://pavandot-expense-tracker.netlify.app/' className={`project-btn-dark ${theme && "project-btn-light"}`}>
							Live Demo
						</a>
					</div>
				</div>
				{/* <div className={`project-item ${!theme && "project-item-light"}`}>
					<h1>Tailwidncss</h1>
				</div>
				<div className={`project-item ${!theme && "project-item-light"}`}>
					<h1>Git</h1>
				</div> */}
				{/* <div className={`project-item ${!theme && "project-item-light"}`}>
					<h1>Reactjs</h1>
				</div> */}
			</div>
		</section>
	);
};

export default Projects;
