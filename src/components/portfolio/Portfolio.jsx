import "./portfolio.scss";
import { useScroll, motion, useSpring } from "framer-motion";
import { useRef } from "react";

const item = [
	{
		id: 1,
		title: "project1",
		img: "https://images.pexels.com/photos/28318918/pexels-photo-28318918/free-photo-of-a-picnic-table-with-a-camera-cheese-and-a-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		desc: "lorem ipdi jifdi  ohj oisdf ",
	},
	{
		id: 2,
		title: "project2",
		img: "https://images.pexels.com/photos/28318918/pexels-photo-28318918/free-photo-of-a-picnic-table-with-a-camera-cheese-and-a-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		desc: "lorem ipdi jifdi  ohj oisdf ",
	},
	{
		id: 3,
		title: "project3",
		img: "https://images.pexels.com/photos/28318918/pexels-photo-28318918/free-photo-of-a-picnic-table-with-a-camera-cheese-and-a-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		desc: "lorem ipdi jifdi  ohj oisdf ",
	},
	{
		id: 4,
		title: "project4",
		img: "https://images.pexels.com/photos/28318918/pexels-photo-28318918/free-photo-of-a-picnic-table-with-a-camera-cheese-and-a-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		desc: "lorem ipdi jifdi  ohj oisdf ",
	},
];

const Single = ({ item }) => {
	return <section>{item.title}</section>;
};

const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 20,
	});

	return (
		<div className="portfolio" ref={ref}>
			<div className="progress">
				<h1>Featured Works</h1>
				<motion.div
					style={{ scaleX: scaleX }}
					className="progressBar"></motion.div>
			</div>
			{item.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Portfolio;
