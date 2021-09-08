import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//components
import Navbar from "./components/Navbar";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Loding from "./Loding";
function App() {
	const [theme, setTheme] = useState(false);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);
	return (
		<>
			{loading === false ? (
				<section className={`container  ${theme && "container-dark"}`}>
					<div className='App'>
						<Router>
							<Navbar theme={theme} setTheme={setTheme} />
							<Switch>
								<Route exact path='/'>
									<Home theme={theme} setTheme={setTheme} />
								</Route>
								<Route path='/about'>
									<About theme={theme} setTheme={setTheme} />
								</Route>
								<Route path='/projects'>
									<Projects theme={theme} setTheme={setTheme} />
								</Route>
								<Route path='/skills'>
									<Skills theme={theme} setTheme={setTheme} />
								</Route>
							</Switch>
						</Router>
					</div>
				</section>
			) : (
				<Loding />
			)}
		</>
	);
}

export default App;
