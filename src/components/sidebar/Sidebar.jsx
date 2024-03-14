import "./sidebar.scss";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";

const variants = {
	open: {
		clipPath: "circle(1200px at 50px 50px)",
		transition: {
			type: "spring",
			stiffness: 20,
		},
	},
	closed: {
		clipPath:
			window.innerWidth <= 720
				? "circle(20px at 50px 50px)"
				: "circle(30px at 50px 50px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

const Sidebar = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();

	useEffect(() => {
		const handleClickOutside = e => {
			if (node.current.contains(e.target)) {
				return;
			}
			setOpen(false);
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<motion.div
			ref={node}
			className="sidebar"
			animate={open ? "open" : "closed"}
		>
			<motion.div className="sidebar__background" variants={variants}>
				<Links setOpen={setOpen} />
			</motion.div>
			<ToggleButton setOpen={setOpen} />
		</motion.div>
	);
};

export default Sidebar;
