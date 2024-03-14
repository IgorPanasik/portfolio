import "./portfolio.scss";
import "./media-portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { items } from "./items";
import Single from "./Singe";

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
				<h1>Featured Works</h1>
				<motion.div style={{ scaleX }} className="progress__bar"></motion.div>
			</div>
			{items.map(item => {
				return <Single item={item} key={item.id} />;
			})}
		</div>
	);
};

export default Portfolio;
