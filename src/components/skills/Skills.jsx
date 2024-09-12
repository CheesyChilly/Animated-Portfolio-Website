import "./skills.scss";
import "/src/color.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

	return (
		<motion.div
			className="skills"
			variants={variants}
			initial="initial"
			// whileInView="animate"
			ref={ref}
			animate={isInView && "animate"}>
			<motion.div className="textContainer" variants={variants}>
				<p>
					I focus on Front end development <br />
					and UI/UX design
				</p>
				<hr />
			</motion.div>
			<motion.div className="titleContainer" variants={variants}>
				<div className="title">
					<img src="/people.webp" alt="" />
					<h1>
						<motion.b whileHover={{ color: "var(--secondary)" }}>
							Creative
						</motion.b>{" "}
						ideas
					</h1>
				</div>
				<div className="title">
					<h1>
						<motion.b whileHover={{ color: "var(--secondary)" }}>
							Steadily
						</motion.b>{" "}
						Expanding
					</h1>
					<button>My Skills</button>
				</div>
			</motion.div>
			<motion.div className="listContainer" variants={variants}>
				<div className="box">
					<h2>Title</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Nam culpa ratione, aliquid, ad omnis ab et velit
						maiores laudantium a recusandae quae id deleniti nemo.
						Expedita placeat praesentium voluptas magni!
					</p>
					<button>More</button>
				</div>
				<div className="box">
					<h2>Title</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Nam culpa ratione, aliquid, ad omnis ab et velit
						maiores laudantium a recusandae quae id deleniti nemo.
						Expedita placeat praesentium voluptas magni!
					</p>
					<button>More</button>
				</div>
				<div className="box">
					<h2>Title</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Nam culpa ratione, aliquid, ad omnis ab et velit
						maiores laudantium a recusandae quae id deleniti nemo.
						Expedita placeat praesentium voluptas magni!
					</p>
					<button>More</button>
				</div>
				<div className="box">
					<h2>Title</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Nam culpa ratione, aliquid, ad omnis ab et velit
						maiores laudantium a recusandae quae id deleniti nemo.
						Expedita placeat praesentium voluptas magni!
					</p>
					<button>More</button>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Skills;
