import "./app.scss";
import Navbar from "./components/navbar/Navbar";
// import Test from "./test";

// import { motion } from "framer-motion";

const App = () => {
	return (
		<div>
			<section id="Home">
				<Navbar />
			</section>
			<section id="Skills">Parallax1</section>
			<section>Skills</section>
			<section id="Projects">Parallax2</section>
			<section>Project1</section>
			<section>Project2</section>
			<section>Project3</section>
			<section id="Contact">Contact</section>
		</div>
	);
};

export default App;
