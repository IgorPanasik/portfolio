import "./navbar.scss";
import "./media-navbar.scss";
import {
	Github,
	Linkedin,
	Mail,
	Send,
	BriefcaseBusiness,
	Smartphone,
} from "lucide-react";

import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
	return (
		<div className="navbar">
			<Sidebar />
			<div className="wrapper">
				<motion.a
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{
						opacity: 1,
						scale: 1,
						cx: [null, 100],
						cx: 500,
						x: [null, 100, 0],
					}}
					transition={{ duration: 0.5 }}
					href="https://igorpanasik.github.io/portfolio/"
					className="wrapper__logo-name"
				>
					Portfolio<span>&#x25A0;</span>
				</motion.a>
				<div className="wrapper__social-icons">
					{[
						{
							title: "GitHub",
							href: "https://github.com/IgorPanasik",
							icon: <Github size={40} />,
						},
						{
							title: "Linkedin",
							href: "www.linkedin.com/in/igor-panasik-351174252",
							icon: <Linkedin size={40} />,
						},

						{
							title: "Gmail",
							href: "mailto:panasik.igor.com@gmail.com",
							icon: <Mail size={40} />,
						},

						{
							title: "Telegram",
							href: "https://t.me/The_ManWhoLaughs",
							icon: <Send size={40} />,
						},

						{
							title: "Rabota.by",
							href: "https://rabota.by/resume/c134e59dff0bfd62f30039ed1f786950303538",
							icon: <BriefcaseBusiness size={40} />,
						},

						{
							title: "+375(29)8816824",
							href: "tel:+375298816824",
							icon: <Smartphone size={40} />,
						},
					].map((link, index) => (
						<motion.a
							target="_blank"
							key={index}
							title={link.title}
							href={link.href}
							initial={{ opacity: 0, x: 100, y: -100 }}
							animate={{ opacity: 1, x: 0, y: 0 }}
							transition={{ delay: index * 0.2 }}
						>
							{link.icon}
						</motion.a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
