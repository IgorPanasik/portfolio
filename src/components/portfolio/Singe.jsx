import "./portfolio.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Single = ({ item }) => {
	const ref = useRef();

	const isSmallScreen = useMediaQuery({ query: "(max-width: 527px)" });

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const y = useTransform(
		scrollYProgress,
		[0, 1],
		isSmallScreen ? [-130, 130] : [-300, 300]
	);

	return (
		<section>
			<div className="container">
				<div className="wrapper">
					<div className="image__container" ref={ref}>
						<img src={item.img} alt="a screenshot of project" />
					</div>
					<motion.div className="text__container" style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<button>
							<a target="_blank" href={item.link}>
								See Demo
							</a>
						</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Single;
