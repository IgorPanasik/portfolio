import emailjs from '@emailjs/browser';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './contact.scss';
import './media-contact.scss';

import FailureSvg from './FailureSvg';
import PhoneSvg from './PhoneSvg';
import SuccessSvg from './SuccessSvg';

const variants = {
	initial: {
		y: 500,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
};

const Contact = () => {
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const ref = useRef();
	const formRef = useRef();
	const [successTimeoutId, setSuccessTimeoutId] = useState(null);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const isInView = useInView(ref, { margin: '-100px' });

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				formRef.current,
				{
					publicKey: import.meta.env.VITE_PUBLIC_KEY,
				}
			)
			.then(
				result => {
					setSuccess(true);
					setName('');
					setEmail('');
					setMessage('');
					const id = setTimeout(() => setSuccess(false), 5000);
					setSuccessTimeoutId(id);
				},
				error => {
					setError(true);
					setName('');
					setEmail('');
					setMessage('');
				}
			);
	};

	useEffect(() => {
		return () => {
			if (successTimeoutId) {
				clearTimeout(successTimeoutId);
			}
		};
	}, [successTimeoutId]);

	return (
		<motion.div
			ref={ref}
			className='contact'
			variants={variants}
			initial='initial'
			whileInView='animate'
		>
			<motion.div className='text__container' variants={variants}>
				<motion.h1 variants={variants}>Let&apos;s work together</motion.h1>

				<motion.div className='item' variants={variants}>
					<h2>Mail</h2>
					<a href='mailto:panasik.igor.com@gmail.com'>
						panasik.igor.com@gmail.com
					</a>
				</motion.div>

				<motion.div className='item' variants={variants}>
					<h2>Address</h2>
					<span>Republic of Belarus, Minsk</span>
				</motion.div>

				<motion.div className='item' variants={variants}>
					<h2>Phone</h2>
					<a href='tel:+375298816824'>+375(29)881-68-24</a>
				</motion.div>
			</motion.div>
			<div className='form__container'>
				<PhoneSvg ref={ref} />

				<motion.form
					ref={formRef}
					onSubmit={sendEmail}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 4, duration: 1 }}
				>
					<input
						type='text'
						placeholder='Name'
						required
						name='name'
						onChange={e => setName(e.target.value)}
						value={name}
					/>
					<input
						type='email'
						placeholder='Email'
						required
						name='email'
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
					<textarea
						rows={8}
						placeholder='Message'
						name='message'
						onChange={e => setMessage(e.target.value)}
						value={message}
					/>
					<button>Submit</button>
					<AnimatePresence>
						{error && (
							<motion.div
								className='error-message'
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.5 }}
								transition={{ duration: 1 }}
							>
								<FailureSvg />
								Something went wrong, please try again later!
							</motion.div>
						)}
					</AnimatePresence>
					<AnimatePresence>
						{success && (
							<motion.div
								className='success-message'
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.5 }}
								transition={{ duration: 1 }}
							>
								<SuccessSvg />
								Message sent successfully!
							</motion.div>
						)}
					</AnimatePresence>
				</motion.form>
			</div>
		</motion.div>
	);
};

export default Contact;
