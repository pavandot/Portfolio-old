import React from "react";
import "./About.css";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaLinux, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import profile from "../../images/profile.jpg";
const About = ({ theme, setTheme }) => {
	return (
		<section className={`about-me ${theme ? "about-me-dark" : "about-me-light"}`} id='about'>
			<div className='about-me-info'>
				<div className='title'>
					<img src='https://reilly.dev/static/media/Satellite.a82bcbb7.svg' alt='icon' />
					<h1>About me</h1>
				</div>
				<p>
					Hello! My name is Pavan Kumar - I absolutely love the process of creating things through code. It involves a combination of some of my favorite things: logic, creativity, and computers! I genuinely have a passion for people and always enjoy
					meeting new people!
				</p>
				<div>
					<p>Here's some of the technologies I've been working with:</p>
					<div className='about-skills'>
						<ul>
							<li>
								<span>
									<IoLogoJavascript />
								</span>
								JavaScript
							</li>
							<li>
								<span>
									<FaReact />
								</span>
								React
							</li>
							<li>
								<span>
									<SiTailwindcss />
								</span>
								Tailwind CSS
							</li>
						</ul>
						<ul>
							<li>
								<span>
									<FaLinux />
								</span>
								Linux
							</li>
							<li>
								<span>
									<FaGithub />
								</span>
								Git
							</li>
							<li>
								<span>
									<SiRedux />
								</span>
								Redux
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='about-me-img'>
				<div className={`about-me-img-fram`}>
					<img src={profile} alt='' />
				</div>
			</div>
		</section>
	);
};

export default About;
