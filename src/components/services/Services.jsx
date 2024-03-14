import "./services.scss";
import "./media-services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-scroll";

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

const Services = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: "-100px" });

	return (
		<motion.div
			className="services"
			variants={variants}
			initial="initial"
			ref={ref}
			animate={isInView && "animate"}
		>
			<motion.div className="text__container" variants={variants}>
				<p>
					I focus on helping your brand grow
					<br /> and move forward
				</p>
				<hr />
			</motion.div>
			<motion.div className="title__container" variants={variants}>
				<div className="title">
					<img src="/people.webp" alt="people" />
					<h1>
						<motion.b>Unique</motion.b> Ideas and <motion.b>solutions</motion.b>
					</h1>
				</div>
				<div className="title">
					<h1>
						<motion.b>For Your</motion.b> Business
						<span style={{ color: "red" }}>.</span>
					</h1>
					<button>
						<Link to="Contact" smooth={true} duration={500}>
							WHAT I DO?
						</Link>
					</button>
				</div>
			</motion.div>
			<motion.div className="list__container" variants={variants}>
				<motion.div className="box">
					<h2>Fast</h2>
					<p>
						My React and Vite application ensures fast loading and high
						performance. I use modern technologies to provide instant response
						and meet the needs of the most demanding users.
					</p>
					<button>
						<Link to="Contact" smooth={true} duration={500}>
							Go!
						</Link>
					</button>
				</motion.div>
				<motion.div className="box">
					<h2>Quality</h2>
					<p>
						I guarantee the high quality of my product. I conduct thorough
						testing to ensure flawless operation of the application.
					</p>
					<button>
						{" "}
						<Link to="Contact" smooth={true} duration={500}>
							Go!
						</Link>
					</button>
				</motion.div>
				<motion.div className="box">
					<h2>Modern</h2>
					<p>
						My application is designed with the latest trends in design and
						technology in mind. I constantly update it to stay at the forefront
						of innovation.
					</p>
					<button>
						{" "}
						<Link to="Contact" smooth={true} duration={500}>
							Go!
						</Link>
					</button>
				</motion.div>
				<motion.div className="box">
					<h2>Exclusive</h2>
					<p>
						My application is unique. I offer exclusive features and
						capabilities that you won’t find in any other application.
					</p>
					<button>
						{" "}
						<Link to="Contact" smooth={true} duration={500}>
							Go!
						</Link>
					</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
