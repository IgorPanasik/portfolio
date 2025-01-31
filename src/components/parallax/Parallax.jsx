import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import './media-parallax.scss';
import './parallax.scss';

const Parallax = ({ type }) => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});
	const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

	const yText = useTransform(
		scrollYProgress,
		[0, 1],
		isMobile ? ['0%', '1200%'] : ['0%', '500%']
	);
	const yBg = useTransform(
		scrollYProgress,
		[0, 1],
		isMobile ? ['0%', '300%'] : ['0%', '100%']
	);

	return (
		<div
			className='parallax'
			ref={ref}
			style={{
				background:
					type === 'services'
						? 'linear-gradient(180deg, #0c0c1d, #111132'
						: 'linear-gradient(180deg, #0c0c1d, #5a5a5e',
			}}
		>
			<motion.h1 style={{ y: yText }}>
				{type === 'services' ? 'What I Do?' : 'What I Did?'}
			</motion.h1>
			<motion.div className='mountains'></motion.div>
			<motion.div
				style={{
					y: yBg,
					backgroundImage: `url(${
						type === 'services' ? './planets.webp' : './sun.webp'
					})`,
				}}
				className='planets'
			></motion.div>
			<motion.div style={{ x: yBg }} className='stars'></motion.div>
		</div>
	);
};

export default Parallax;
