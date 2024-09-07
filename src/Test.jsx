import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
	const [open, setOpen] = useState(false);

	const variants = {
		visible: (i) => ({
			opacity: 1,
			x: 70,
			transition: { delay: i * 0.3 },
		}),
		hidden: { opacity: 0 },
	};

	const items = ["Item1", "item2", "items3", "item4"];

	return (
		<div className="course">
			<motion.ul variants={variants} initial="hidden" animate="visible">
				{items.map((item,i) => (
					<motion.li variants={variants} key={item} custom={i}>
						{item}
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
};

export default Test;
