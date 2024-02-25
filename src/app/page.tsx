'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import Footer from '@/components/Footer';
const Main = dynamic(() => import('../components/Main'), {
	loading: () => (
		<div className=" space-y-5 p-6 md:w-full md:space-y-10">
			<div className="text-lg">
				<button className={`underllne hover:underline`}>10</button> /{' '}
				<button className={`underllne hover:underline`}>20</button> /{' '}
				<button className={`underllne hover:underline`}>35</button> /{' '}
				<button className={`underllne hover:underline`}>50</button>
			</div>
			<div className="w-full text-justify text-sm md:text-base lg:text-lg">Loading...</div>
			<input className={`w-full rounded-md bg-indigo-300 bg-opacity-30 p-2 text-white caret-neutral-50`} />
			<div className="h-20">TIme Loading...</div>
		</div>
	),

	ssr: false,
});

export default function Home() {
	const [wordCount, setWordCount] = useState<number>(10);
	const [letterCount, setLetterCount] = useState<number>(0);
	const [correctCount, setCorrectCount] = useState<number>(0);
	const [inCorrectCount, setInCorrectCount] = useState<number>(0);
	const [text, setText] = useState<string>('');
	const [writtenWords, setWrittenWords] = useState<string>('');
	const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
	const [totalTime, settotalTime] = useState(0);

	let wpm = (letterCount + wordCount) / 5 / (totalTime / 600);
	let acc = (correctCount / wordCount) * 100;
	const [correctStore, setCorrectStore] = useState<Array<number>>(
		Array.apply(null, Array(wordCount)).map(function () {
			return -1;
		}),
	);

	return (
		<div className="relative w-full flex-col justify-center md:h-screen">
			<div className="absolute -z-50 h-full w-full overflow-hidden bg-gray-900 bg-fixed">
				<div className="absolute left-2/3 top-1/2 z-10 -ml-32 -mt-10 h-24 w-24 animate-circlesm rounded-full bg-violet-800 opacity-40 blur-xl sm:h-44 sm:w-44 md:h-64 md:w-64"></div>
				<div className="absolute left-1/2 top-1/2 -z-50 -ml-10 -mt-72 h-44 w-44 animate-circlemd rounded-full bg-yellow-600 opacity-40 blur-xl sm:h-64 sm:w-64 md:h-96 md:w-96"></div>
				<div className="absolute left-1/3 top-1/2 z-20 -ml-32 -mt-80 h-32 w-32 animate-circlexl rounded-full bg-red-500 opacity-40 blur-xl sm:h-52 sm:w-52 md:h-80 md:w-80"></div>
				<div className="absolute left-1/3 top-1/2 -z-20 -ml-52 -mt-20 h-32 w-32 animate-circlesm rounded-full bg-green-600 opacity-40 blur-xl sm:h-52 sm:w-52 md:h-80 md:w-80"></div>
				<div className="w-15 h-15 sm:w-30 sm:h-30 absolute left-2/3 top-1/2 -z-20 -mt-72 ml-12 animate-circlexl rounded-full bg-cyan-600 opacity-40 blur-xl md:h-40 md:w-40"></div>
			</div>
			<Navbar />
			<div className="flex items-center justify-center overflow-y-auto">
				<div className="bg-red-8000 max-w-5xl space-y-8 p-7 sm:inline-block sm:p-10 md:flex md:space-x-7 md:space-y-0">
					<div className="rounded-lg bg-green-100 bg-opacity-10 text-white shadow-lg md:w-3/5 lg:p-4">
						<Main
							wordCount={wordCount}
							wpm={wpm}
							acc={acc}
							setWordCount={setWordCount}
							letterCount={letterCount}
							setLetterCount={setLetterCount}
							correctCount={correctCount}
							setCorrectCount={setCorrectCount}
							inCorrectCount={inCorrectCount}
							setInCorrectCount={setInCorrectCount}
							totalTime={totalTime}
							settotalTime={settotalTime}
							time={time}
							setTime={setTime}
							text={text}
							setText={setText}
							writtenWords={writtenWords}
							setWrittenWords={setWrittenWords}
							correctStore={correctStore}
							setCorrectStore={setCorrectStore}
						/>
					</div>
					<div className="rounded-lg bg-green-100 bg-opacity-10 text-white shadow-lg md:w-2/5 lg:p-4">
						<Dashboard
							wordCount={wordCount}
							// wpm={wpm}
							// acc={acc}
							letterCount={letterCount}
							correctCount={correctCount}
							inCorrectCount={inCorrectCount}
							totalTime={totalTime}
							writtenWords={writtenWords}
							correctStore={correctStore}
							text={text}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
