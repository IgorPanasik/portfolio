import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './hero.scss';
import './media-hero.scss';

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},

	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: '-220%',
		transition: {
			repeat: Infinity,
			repeatType: 'mirror',
			duration: 20,
		},
	},
};

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero__wrapper'>
				<motion.div
					className='hero__text-container'
					variants={textVariants}
					initial='initial'
					animate='animate'
				>
					<motion.h2 variants={textVariants}>Panasik Igor</motion.h2>
					<motion.h1 variants={textVariants}>
						Frontend developer and UI designer
					</motion.h1>
					<motion.div variants={textVariants} className='hero__buttons'>
						<motion.button variants={textVariants}>
							<Link to='Portfolio' smooth={true} duration={500}>
								See the Latest Works
							</Link>
						</motion.button>
						<motion.button variants={textVariants}>
							<Link to='Contact' smooth={true} duration={500}>
								Contact Me
							</Link>
						</motion.button>
					</motion.div>
					<motion.img
						variants={textVariants}
						src='./scroll.webp'
						alt='scroll'
						animate='scrollButton'
					/>
				</motion.div>

				<motion.div
					initial={{ x: 500, opacity: 0 }}
					animate={{
						x: 0,
						opacity: 1,
						transition: {
							duration: 1,
							staggerChildren: 0.1,
						},
					}}
					className='hero__image-container'
				>
					<img src='./creator.webp' alt='a human' />
				</motion.div>
			</div>

			<motion.div
				className='sliding__text-container'
				variants={sliderVariants}
				initial='initial'
				animate='animate'
			>
				My name is Panasik Igor
			</motion.div>
		</div>
	);
};

export default Hero;
