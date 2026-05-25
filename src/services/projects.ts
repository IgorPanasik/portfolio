import Battleship from '@/assets/images/battleship.webp';
import Blog from '@/assets/images/blog-site.webp';
import Calculate from '@/assets/images/calc.webp';
import Converter from '@/assets/images/CC.webp';
import Drum from '@/assets/images/drum.webp';
import Flower from '@/assets/images/flower.webp';
import Music from '@/assets/images/music-player.webp';
import Pomodoro from '@/assets/images/pomodoro.webp';
import Quote from '@/assets/images/quote.webp';
import Hosting from '@/assets/images/raid.webp';
import rti from '@/assets/images/rti.png';
import Rti24 from '@/assets/images/rti24.webp';
import Stopwatch from '@/assets/images/stopwatch.webp';
import Todo from '@/assets/images/todo.webp';
import Travel from '@/assets/images/travel.webp';
import Travia from '@/assets/images/travia.webp';
import Weather from '@/assets/images/weather-site.webp';

type Tools = string[];

interface IProjects {
	id: string;
	title: string;
	img: string;
	desc: string;
	tools: Tools;
	link: string;
}

export const projects: IProjects[] = [
	{
		id: crypto.randomUUID(),
		title: 'Battleship Game — Vanilla JS Architecture & UI Showcase',
		img: Battleship,
		desc: 'A classic tactical naval combat game built from scratch using Modern JavaScript (ES6+), CSS3, and HTML5. This project was developed as a comprehensive educational capstone, transitioning from a single-file application into a highly decoupled, modular enterprise-grade architecture.This implementation was built as part of the JavaScript path from The Odin Project curriculum. Original Lesson Specification: The Odin Project - Battleship',
		tools: ['HTML', 'css', 'JavaScript', 'babel', 'jest', 'webpack', 'eslint'],
		link: 'https://igorpanasik.github.io/battleship-odin/',
	},

	{
		id: crypto.randomUUID(),
		title: 'Ritual Transport International',
		img: rti,
		desc: 'Modern and simple, beautiful Multilanguages website a funeral services. Full Responsive.',
		tools: ['HTML', 'css', 'JavaScript', 'emailJS', 'postCSS', 'vite'],
		link: 'https://rtillc.by/',
	},

	{
		id: crypto.randomUUID(),
		title: 'Astra Funeral Home',
		img: Rti24,
		desc: 'Optimized commercial landing page. Bilingual, cross-browser, and cross-platform compatible with full deployment.',
		tools: ['HTML', 'CSS', 'JavaScript', 'emailJS', 'postCSS', 'BEM', 'Vite'],
		link: 'https://rti24.by',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Weather',
		img: Weather,
		desc: 'Modern weather application. with geolocation and the ability to find out the weather for 5 days. Full Responsive.',
		tools: ['React.js', 'Scss', 'Vite', 'Third-party APIs'],
		link: 'https://igorpanasik.github.io/weather-app-react.js/',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Currency Converter',
		img: Converter,
		desc: 'Modern and simple the Currency Converter using APIs as well as various preferred style libraries. Full Responsive.',
		tools: [
			'React.js',
			'Tailwindcss',
			'Vite',
			'Third-party APIs',
			'TypeScript',
			'Zod',
		],
		link: 'https://igorpanasik.github.io/currency-converter-react.js/',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Modern ToDo',
		img: Todo,
		desc: 'This project provides a clean and user-friendly interface for managing your tasks, enhanced with smooth animations for a delightful user experience. Full Responsive.',
		tools: ['Webpack', 'SWC', 'React', 'TS', 'PostCss', 'Scss'],
		link: 'https://igorpanasik.github.io/modern-todo-list/',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Stopwatch App',
		img: Stopwatch,
		desc: 'Modern and simple stopwatch application, intuitive and fully responsive.',
		tools: ['React.js', 'Scss', 'Vite'],
		link: 'https://igorpanasik.github.io/stopwatch-react.js/',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Pomodoro Timer',
		img: Pomodoro,
		desc: 'Modern Pomodoro timer application, with the ability to change the mode and with a sound signal. Full Responsive.',
		tools: ['React.js', 'Scss', 'Vite'],
		link: 'https://igorpanasik.github.io/pomodoro-timer-react.js/',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Drum Machine',
		img: Drum,
		desc: 'Modern, exciting drum machine with different melodies and settings. Full Responsive.',
		tools: ['React.js', 'Scss', 'Vite'],
		link: 'https://igorpanasik.github.io/drum-machine-react.js/',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Music App',
		img: Music,
		desc: 'A modern and simple application for listening to music, intuitive and fully responsive.',
		tools: ['React.js', 'Scss', 'Vite'],
		link: 'https://igorpanasik.github.io/music-player-react.js/',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Blog',
		img: Blog,
		desc: 'A fullstack website is analogous to a blog, which has a database of users as well as their articles. Full Responsive.',
		tools: [
			'MongoDb',
			'Firebase',
			'Node.js',
			'Vite',
			'Netlify',
			'Express.js',
			'React.js',
			'Scss',
		],
		link: 'https://blog-app-panasik-igor.netlify.app/',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Random Quote App',
		img: Quote,
		desc: 'Modern and simple random quote app, intuitive and fully responsive.',
		tools: ['React.js', 'Scss', 'Vite'],
		link: 'https://igorpanasik.github.io/random-quote-machine-react.js/',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Calculate App',
		img: Calculate,
		desc: 'Modern and simple calculator application, intuitive and fully responsive.',
		tools: ['React.js', 'Scss', 'Vite'],
		link: 'https://igorpanasik.github.io/calculator-react.js/',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Raid Hosting',
		img: Hosting,
		desc: 'Modern and simple, beautiful website for game hosting. Full Responsive.',
		tools: ['HTML', 'Scss', 'JavaScript'],
		link: 'https://igorpanasik.github.io/raidHostGame/',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Travel Website',
		img: Travia,
		desc: 'Modern and simple, beautiful Multipages website for Travel. Full Responsive.',
		tools: ['HTML', 'Scss', 'JavaScript'],
		link: 'https://igorpanasik.github.io/MultipagesTravelWebsite/pages/destinations.html',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Travel Blog',
		img: Travel,
		desc: 'Modern and simple, beautiful Multipages website for Travel. Full Responsive.',
		tools: ['HTML', 'Scss', 'JavaScript'],
		link: 'https://igorpanasik.github.io/Travel/',
	},

	{
		id: crypto.randomUUID(),
		title: 'The Flower Shop',
		img: Flower,
		desc: 'Modern and simple, beautiful Multipages website a Flower shop. Full Responsive.',
		tools: ['HTML', 'Scss', 'JavaScript'],
		link: 'https://igorpanasik.github.io/FlowerShop/',
	},
];
