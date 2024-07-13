import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<div className="sticky bottom-0 flex h-9 w-full items-center justify-center space-x-5 bg-gray-900 text-center text-sm text-gray-400 shadow shadow-gray-800 md:absolute lg:h-10 lg:text-sm">
			<Link
				href={'https://github.com/priyankarkoley/Typexpert'}
				target="_blank"
				className="text-md right-5 pt-1 hover:animate-bounce sm:absolute sm:text-lg md:text-xl lg:text-2xl"
			>
				<i className="devicon-github-original text-white"></i>
			</Link>
			<div className="w-fit">
				Developed by{' '}
				<Link
					target="_blank"
					className="animate-pulse text-white hover:cursor-pointer hover:text-lime-400 hover:underline"
					href={'https://priyankarkoley.com'}
				>
					priyankarkoley
				</Link>{' '}
				with <span className="animate-pulse text-white">♥️</span>
			</div>
			<div className="left-1 flex items-center sm:absolute">
				<Link
					href={'https://nextjs.org'}
					target="_blank"
					className="devicon-nextjs-original-wordmark pr-1 text-2xl sm:pr-2 sm:text-4xl"
				></Link>
				<Link
					href={'https://tailwindcss.com'}
					target="_blank"
					className="devicon-tailwindcss-plain text-md font-thin sm:text-lg"
				></Link>
			</div>
		</div>
	);
}
