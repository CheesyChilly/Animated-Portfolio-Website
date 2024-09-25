import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
	{
		id: 1,
		title: "Ott Platform Prototype",
		img: "/ott.png",
		desc: "An OTT platform prototype built with React JS, uses the TMDB API to fetch and display movie or TV show data. It includes a user authentication system, allowing users to log in and access content. The platform showcases various media categories, search functionalities.",
		link: "https://github.com/CheesyChilly/Ott-Platform-Prototype",
	},
	{
		id: 2,
		title: "Online Marketplace using Django",
		img: "/marketplace-crop.png",
		desc: "Marketplace website, developed using Django, features a dual-login system for normal users and admins. Normal users can browse products and contact sellers directly through the platform. Admins have access to an admin panel, where they can manage listings, users, etc.",
		link: "https://github.com/CheesyChilly/Online-MarketPlace_Django",
	},
	{
		id: 3,
		title: "Python Webscraper",
		img: "/scraper.png",
		desc: "A Python web scraper built with Beautiful Soup is designed to extract data from websites. It parses HTML or XML documents, allowing you to navigate the page's structure and retrieve specific information like titles, links, or tables.",
		link: "https://github.com/CheesyChilly/Python-Webscraper",
	},
];

const Single = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	return (
		<section>
			<div className="container">
				<div className="wrapper">
					<div className="imageContainer" ref={ref}>
						<img src={item.img} alt="" />
					</div>
					<motion.div className="textContainer" style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<button >See Demo</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	return (
		<div className="portfolio" ref={ref}>
			<div className="progress">
				<h1>Recent Projects</h1>
				<motion.div
					style={{ scaleX }}
					className="progressBar"></motion.div>
			</div>
			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Portfolio;
