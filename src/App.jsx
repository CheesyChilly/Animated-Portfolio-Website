import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";

// import { motion } from "framer-motion";

const App = () => {
	return (
		<div>
			<section id="Home">
				<Navbar />
				<Hero />
			</section>
			<section id="Skills">
				<Parallax type="skills" />
			</section>
			<section>
				<Skills />
			</section>
			<section id="Projects">
				<Parallax type="projects" />
			</section>
			<Portfolio/>
			<section id="Contact">Contact</section>
		</div>
	);
};

export default App;
