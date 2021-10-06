import TypeIt from "typeit-react";
import LigthHero from "../../images/Light-Hero.svg";
import Darkhero from "../../images/Dark-Hero.svg";
import "./Home.css";

const Home = ({ theme, setTheme }) => {
	return (
		<section className={`Home ${!theme && "Home-dark"}`} id='home'>
			<div className='info'>
				<h1>
					<span>👋</span> My name is
				</h1>
				<p className='name'>Pavan Kumar</p>
				<div className='job-container'>
					<TypeIt
						getBeforeInit={(instance) => {
							instance.type("JavaScript Developer").pause(750).delete(20).pause(500).type("Programmer ").pause(500);

							return instance;
						}}
						options={{
							waitUntilVisible: true,
							loop: true,
							cursor: false,
						}}
						element={"p"}
						className='job'
					/>
				</div>
				<p className='about'>
					Hi! I am web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development. I enjoy creating beautifully
					designed, intuitive and functional websites.
				</p>
			</div>
			<div>
				{}
				<img src={theme ? LigthHero : Darkhero} alt='Drak' width='300' className='hero' />
			</div>
		</section>
	);
};

export default Home;
