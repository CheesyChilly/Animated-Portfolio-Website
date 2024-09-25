import "./skills.scss";
import "/src/color.scss";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Skills = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: "-100px" });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("animate");
		} else {
			controls.start("initial");
		}
	}, [isInView, controls]);

	return (
		<motion.div className="skills">
			<motion.div
				className="pageWrapper skills"
				variants={variants}
				initial="initial"
				ref={ref}
				animate={controls}>
				<motion.div className="textContainer" variants={variants}>
					<p>
						I focus on Front end development <br />
						and UI/UX design
					</p>
					<hr />
				</motion.div>
				<motion.div className="titleContainer" variants={variants}>
					<div className="title">
						<img src="/abstract.png" alt="" />
						<h1>
							<motion.b
								whileHover={{ color: "var(--secondary)" }}>
								Creative
							</motion.b>{" "}
							<span>ideas</span>
						</h1>
					</div>
					<div className="title">
						<h1>
							<motion.b
								whileHover={{ color: "var(--secondary)" }}>
								Steadily
							</motion.b>{" "}
							<span>Expanding</span>
						</h1>
						<button>My Skills</button>
					</div>
				</motion.div>
				<motion.div className="listContainer" variants={variants}>
					<div className="box">
						<h2>Front-End</h2>
						<ul>
							<li>Expertise in HTML, CSS, and JavaScript</li>
							<li>
								Focus on responsive design and UX/UI principles
							</li>
							<li>Proficient in React</li>
							<li>Skilled in Figma</li>
						</ul>

						{/* <button>More</button> */}
					</div>
					<div className="box">
						<h2>Back-End</h2>
						<ul>
							<li>Skilled in Node.js and Express</li>
							<li>Experience with REST API integration</li>
							<li>Database management using MongoDB</li>
							
						</ul>
						{/* <button>More</button> */}
					</div>
					<div className="box">
						<h2>Cybersecurity</h2>
						<ul>
							<li>
								Proficient in cybersecurity
								fundamentals
							</li>
							<li>
								Knowledge of encryption and secure coding
								practices
							</li>
							<li>
								Familiar with blockchain technology
							</li>
						</ul>
						{/* <button>More</button> */}
					</div>
					<div className="box">
						<h2>3D art & Game Dev</h2>
						<ul>
							<li>
								Skilled in 3D modeling
								using Blender
							</li>
							<li>
								Experience with creating assets for games
							</li>
							<li>
								Proficient in game development with Godot engine
							</li>
							
						</ul>
						{/* <button>More</button> */}
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Skills;
