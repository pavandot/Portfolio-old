import { useState } from "react";
//components
import Navbar from "./components/Navbar";
//pages
import Home from "./pages/Hero section/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
// import Loding from "./Loding";
function App() {
	const [theme, setTheme] = useState(false);
	// const [loading, setLoading] = useState(true);
	// useEffect(() => {
	// setTimeout(() => setLoading(false), 1000);
	// }, []);
	return (
		<section className={`container  ${theme && "container-dark"}`}>
			<div className='App'>
				<Navbar theme={theme} setTheme={setTheme} />
				<Home theme={theme} setTheme={setTheme} />
			</div>
			<About theme={theme} setTheme={setTheme} />
			<Projects theme={theme} setTheme={setTheme} />
		</section>
	);
}

export default App;
