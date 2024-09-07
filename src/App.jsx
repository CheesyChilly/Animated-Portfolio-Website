import "./app.scss";
import Navbar from "./components/navbar/Navbar";
// import Test from "./test";

// import { motion } from "framer-motion";

const App = () => {
	return (
		<div>
			<section>
				<Navbar />
			</section>
			<section>Parallax1</section>
			<section>Skills</section>
			<section>Parallax2</section>
			<section>Project1</section>
			<section>Project2</section>
			<section>Project3</section>
			<section>Contact</section>
		</div>
	);
};

export default App;
