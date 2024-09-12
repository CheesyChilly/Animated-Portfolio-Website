import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
	return (
		<div className="navbar">
			{/* Sidebar */}
			<Sidebar />
			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}>
					Portfolio by Yours Truly
				</motion.span>
				<div className="social">
					<a
						href="https://www.linkedin.com/in/ankit-bose-62596a231/"
						target="_blank"
						rel="noopener noreferrer">
						<img src="/linkedin.png" alt="" />
					</a>
					<a
						href="https://github.com/CheesyChilly"
						target="_blank"
						rel="noopener noreferrer">
						<img src="/github.png" alt="" />
					</a>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<img src="/facebook.png" alt="" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
