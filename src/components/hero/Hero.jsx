import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-220%",
		transition: {
			repeat: Infinity,
			repeatType: "mirror",
			duration: 20,
		},
	},
};

const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="textContainer"
					variants={textVariants}
					initial="initial"
					animate="animate">
					<motion.h2 variants={textVariants}>ANKIT BOSE</motion.h2>
					<motion.h1 variants={textVariants}>
						Full Stack Web Developer
					</motion.h1>
					<motion.div variants={textVariants} className="buttons">
						<motion.a variants={textVariants} href="#Projects">
							See my recent projects
						</motion.a>
						<motion.a
							className="button2"
							variants={textVariants}
							href="#Contact">
							Contact Me
						</motion.a>
					</motion.div>
					<motion.img
						variants={textVariants}
						src="/scroll2.png"
						alt=""
						animate="scrollButton"
					/>
				</motion.div>
			</div>
			<motion.div
				className="slidingtext"
				variants={sliderVariants}
				initial="initial"
				animate="animate">
				Programmer Web Architect Front-End Maestro Alchemist
			</motion.div>
			<div className="imageContainer">
				<img src="/hero7.png" alt="" />
			</div>
		</div>
	);
};

export default Hero;
