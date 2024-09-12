import { useRef } from "react";
import "./parallax.scss";
import "/src/color.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
	const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	return (
		<div
			className="parallax"
			ref={ref}
			style={{
				background:
					type === "skills"
						? "linear-gradient(180deg, var(--bgcolor-lighter), var(--bgcolor))"
						: "linear-gradient(180deg, var(--bgcolor), var(--bgcolor-lighter))",
			}}>
			<motion.h1 style={{ y: yText }}>
				{type === "skills" ? "What are my skills?" : "What did I make?"}
			</motion.h1>
			<motion.div className="mountains"></motion.div>
			<motion.div
				className="planets"
				style={{
					y: yBg,
					backgroundImage: `url(${
						type === "skills" ? "/planets.png" : "/sun.png"
					})`,
				}}></motion.div>
			<motion.div style={{ x: yBg }} className="stars"></motion.div>
		</div>
	);
};

export default Parallax;
