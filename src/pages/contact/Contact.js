import React from "react";
import { FaTwitter, FaGithubSquare, FaArrowUp } from "react-icons/fa";
import { RiGitlabFill } from "react-icons/ri";
import "./Contact.css";
const Contact = ({ theme }) => {
	return (
		<section className={`contact ${theme ? "contact-dark" : "contact-light"}`} id='contact'>
			<div>
				<a href='https://twitter.com/pavanreddy0850' className={` contact-me ${theme ? "contact-me-dark" : "contact-me-light"}`}>
					<FaTwitter />
				</a>
				<a href='https://github.com/pavandot' className={` contact-me ${theme ? "contact-me-dark" : "contact-me-light"}`}>
					<FaGithubSquare />
				</a>
				<a href='https://gitlab.com/pavandot' className={` contact-me ${theme ? "contact-me-dark" : "contact-me-light"}`}>
					<RiGitlabFill />
				</a>
			</div>
			<p>Made with ❤️ by pavan</p>
			<div>
				<a href='#navbar-home' className={`${theme ? "contact-me-dark" : "contact-me-light"}`}>
					<FaArrowUp />
				</a>
			</div>
		</section>
	);
};

export default Contact;
