'use client';
import { useRef, useState, useEffect } from 'react';
import Timer from './Timer';
import { _TYPE_THIS } from './../var';
import { motion } from 'framer-motion';

export default function Main({
	wordCount,
	wpm,
	acc,
	setWordCount,
	letterCount,
	setLetterCount,
	correctCount,
	setCorrectCount,
	inCorrectCount,
	setInCorrectCount,
	totalTime,
	settotalTime,
	time,
	setTime,
	text,
	setText,
	writtenWords,
	setWrittenWords,
	correctStore,
	setCorrectStore,
}: {
	wordCount: number;
	wpm: number;
	acc: number;
	setWordCount: any;
	letterCount: number;
	setLetterCount: any;
	correctCount: number;
	setCorrectCount: any;
	inCorrectCount: number;
	setInCorrectCount: any;
	totalTime: number;
	settotalTime: any;
	time: { ms: number; s: number; m: number; h: number };
	setTime: any;
	text: string;
	setText: any;
	writtenWords: string;
	setWrittenWords: any;
	correctStore: number[];
	setCorrectStore: any;
}) {
	const inputElement = useRef<any>(null);
	const wrodsList = [..._TYPE_THIS];
	const [TYPE_THIS, setTYPE_THIS] = useState<string[]>([]); //TODO
	const [i, setI] = useState<number>(0);
	const [col, setCol] = useState<string>('bg-indigo-300 bg-opacity-30 text-white');
	const [int, setInt] = useState<NodeJS.Timer>();
	const [status, setStatus] = useState(0);
	const [punc, setPunc] = useState<boolean>(false);

	//LOOK HERE :: DATA & SETDATA DECLARATION
	const [data, setData] = useState<object[]>(JSON.parse(localStorage.getItem('data') || '[]'));
	// if(localStorage.getItem("data"))console.log(JSON.parse('[{"hello":"world"}]'));

	useEffect(() => {
		function shuffle(array: string[]) {
			let currentIndex = array.length,
				randomIndex;

			// While there remain elements to shuffle.
			while (currentIndex != 0) {
				// Pick a remaining element.
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex--;

				// And swap it with the current element.
				[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
			}
			array[0] = array[0][0].toUpperCase() + array[0].slice(1);
			return array.slice(0, 50);
		}
		setTYPE_THIS(shuffle(_TYPE_THIS));
	}, []);

	useEffect(() => {
		//console.log('data Changed: ', data);
		if (data) localStorage.setItem('data', JSON.stringify(data));
	}, [data]);
	let myGivenString = TYPE_THIS;
	let [tt, milliseconds, seconds, minutes, hours] = [totalTime, time.ms, time.m, time.s, time.h];

	const start = () => {
		if (status === 0) {
			setStatus(1);
			settotalTime(0);
			tt = 0;
			run();
			setInt(setInterval(run, 100));
		}
	};
	const pause = () => {
		clearInterval(int);
		setStatus(2);
		setCol('bg-indigo-300 bg-opacity-30 text-white');
		setLetterCount(letterCount + text.length);
		setText('');
		setData(() => {
			let today = new Date();
			const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			let date = today.getDate() + 'th' + monthNames[today.getMonth()] + ' ' + today.getFullYear().toString().slice(-2);
			let _hr = today.getHours() < 12 ? today.getHours() : today.getHours() - 12;
			let hr = _hr < 10 ? '0' + _hr : _hr;
			let min = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
			let time = hr + ':' + min + (today.getHours() < 12 ? ' AM' : ' PM');
			let dateTime = time + '\n' + date;

			// console.log(hr + ":" + min);
			// console.log("text", text);
			// console.log("lc: " + (letterCount + text.length + wordCount));
			// console.log(
			//   "wpm",
			//   (letterCount + text.length + wordCount) / 5 / (totalTime / 600)
			// );
			// console.log("CC", correctCount);
			// console.log("acc", (correctCount / wordCount) * 100);

			return [
				...data,
				{
					dateTime,
					wpm: (letterCount + text.length + wordCount) / 5 / (totalTime / 600),
					acc: (correctCount / wordCount) * 100,
				},
			];
		});
	};

	const run = () => {
		if (minutes === 60) {
			minutes = 0;
			hours++;
		}
		if (seconds === 60) {
			seconds = 0;
			minutes++;
		}
		if (milliseconds === 10) {
			milliseconds = 0;
			seconds++;
		}
		milliseconds++;
		tt++;
		settotalTime(tt);
		return setTime({ ms: milliseconds, s: seconds, m: minutes, h: hours });
	};
	let checker = (word: string) => {
		function incorrectWordAction() {
			setInCorrectCount((prev: number) => prev + 1);
			setCorrectStore((prev: number[]) => {
				return prev.map((value, index) => {
					if (index == i) return 0;
					else return value;
				});
			});
		}
		function correctWordAction() {
			setCorrectCount((prev: number) => prev + 1);
			setCorrectStore((prev: number[]) => {
				return prev.map((value, index) => {
					if (index == i) return 1;
					else return value;
				});
			});
		}

		if (status === 1) {
			if (word.includes(' ')) {
				setLetterCount(letterCount + text.length);
				setWrittenWords(writtenWords + word);
				setText('');
				if (word.trim() === myGivenString[i]) {
					correctWordAction();
				} else {
					incorrectWordAction();
				}
				setI(i + 1);
			}
			if (word === myGivenString[i] + ' ') word = '';
			if (myGivenString !== undefined && myGivenString[i].includes(word))
				setCol('text-white bg-indigo-300 bg-opacity-30');
			else setCol('text-white bg-red-400');
			if (word === myGivenString[i]) setCol('bg-green-400 text-black');
		}
		//LAST WORD
		if (i === wordCount - 1 && (myGivenString[i] === word || word.includes(' '))) {
			//TODO ISSUE
			// console.log(letterCount)
			// setLetterCount(letterCount + text.length);
			// console.log(letterCount)
			setWrittenWords(writtenWords + word);
			if (word.trim() === myGivenString[i]) {
				correctWordAction();
			} else {
				incorrectWordAction();
			}
			setI(i + 1);
			pause();
		}
		if (word.includes(' ')) setText('');
	};

	const addPunctutaion = () => {
		setTYPE_THIS((prev: string[]): string[] => {
			return prev.map((val, index, pre): string => {
				if (index == wordCount - 1) {
					return val + '.';
				} else {
					const fac = 4;
					const ran = Math.random();
					if (ran < 0.01 * fac) {
						return val + ',';
					} else if (ran < 0.02 * fac) {
						if (pre[index + 1]) {
							pre[index + 1] = pre[index + 1][0].toUpperCase() + pre[index + 1].slice(1);
						}
						return val + '.';
					} else if (ran < 0.03 * fac) {
						if (pre[index + 1]) {
							pre[index + 1] = pre[index + 1][0].toUpperCase() + pre[index + 1].slice(1);
						}
						return val + '?';
					} else if (ran < 0.04 * fac) {
						if (pre[index + 1]) {
							pre[index + 1] = pre[index + 1][0].toUpperCase() + pre[index + 1].slice(1);
						}
						return val + '!';
					} else if (ran < 0.05 * fac) {
						return val + ';';
					} else return val;
				}
			});
		});
		// console.log(wrodsList);
	};

	const removePunctutaion = () => {
		setTYPE_THIS(wrodsList);
	};
	const resetWithoutShufle = () => {
		setStatus(0);
		clearInterval(int);
		setTime({ ms: 0, s: 0, m: 0, h: 0 });
		setText('');
		setCol('bg-indigo-300 bg-opacity-30 text-white');
		setI(0);
		setCorrectStore(correctStore.map(() => -1));
		setLetterCount(0);
		setCorrectCount(0);
		setInCorrectCount(0);
		settotalTime(0);
		setWrittenWords('');
		inputElement.current.focus();
	};
	const reset = () => {
		function shuffle(array: string[]) {
			let currentIndex = array.length,
				randomIndex;

			// While there remain elements to shuffle.
			while (currentIndex != 0) {
				// Pick a remaining element.
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex--;

				// And swap it with the current element.
				[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
			}
			array[0] = array[0][0].toUpperCase() + array[0].slice(1);
			return array.slice(0, 50);
		}
		setTYPE_THIS(shuffle(_TYPE_THIS));
		setStatus(0);
		clearInterval(int);
		setTime({ ms: 0, s: 0, m: 0, h: 0 });
		setText('');
		setCol('bg-indigo-300 bg-opacity-30 text-white');
		setI(0);
		setCorrectStore(correctStore.map(() => -1));
		setLetterCount(0);
		setCorrectCount(0);
		setInCorrectCount(0);
		settotalTime(0);
		setWrittenWords('');
		inputElement.current.focus();
	};

	return (
		<motion.div
			layout
			transition={{ layout: { duration: 0.8, type: 'spring' } }}
			className="space-y-5 p-6 md:w-full md:space-y-10"
		>
			<div className="flex text-sm sm:text-lg">
				<div>
					<button
						onClick={() => {
							setWordCount(10);
							reset();
							setCorrectStore(
								Array.apply(null, Array(10)).map(function () {
									return -1;
								}),
							);
						}}
						className={`${wordCount === 10 ? 'underline' : ''} hover:underline`}
					>
						10
					</button>{' '}
					/{' '}
					<button
						onClick={() => {
							setWordCount(20);
							reset();
							setCorrectStore(
								Array.apply(null, Array(20)).map(function () {
									return -1;
								}),
							);
						}}
						className={`${wordCount === 20 ? 'underline' : ''} hover:underline`}
					>
						20
					</button>{' '}
					/{' '}
					<button
						onClick={() => {
							setWordCount(35);
							reset();
							setCorrectStore(
								Array.apply(null, Array(35)).map(function () {
									return -1;
								}),
							);
						}}
						className={`${wordCount === 35 ? 'underline' : ''} hover:underline`}
					>
						35
					</button>{' '}
					/{' '}
					<button
						onClick={() => {
							setWordCount(50);
							reset();
							setCorrectStore(
								Array.apply(null, Array(50)).map(function () {
									return -1;
								}),
							);
						}}
						className={`${wordCount === 50 ? 'underline' : ''} hover:underline`}
					>
						50
					</button>
				</div>
				<button
					className="ml-auto"
					onClick={() => {
						setPunc(!punc);
						if (!punc) addPunctutaion();
						else removePunctutaion();
						resetWithoutShufle();
					}}
				>
					Punctuation : <span>{`${punc ? 'ON!' : 'OFF'}`}</span>
				</button>
			</div>
			<motion.div
				layout
				transition={{ layout: { duration: 0.2, type: 'spring' } }}
				className="w-full text-justify text-sm md:text-base lg:text-lg"
			>
				{TYPE_THIS.slice(0, wordCount).map((value: String, index: any) => {
					return (
						<motion.span layout transition={{ layout: { duration: 0.5, type: 'spring' } }} key={index}>
							<motion.span
								layout
								transition={{ layout: { duration: 0.5, type: 'spring' } }}
								className={`${i === index ? 'border-b-2 border-green-500' : ''} ${
									correctStore[index] === -1
										? 'text-white'
										: correctStore[index] === 1
											? 'text-green-500'
											: 'text-red-500'
								}`}
							>{`${value}`}</motion.span>{' '}
						</motion.span>
					);
				})}
			</motion.div>
			<motion.input
				layout
				transition={{ layout: { duration: 0.5, type: 'spring' } }}
				ref={inputElement}
				autoFocus
				autoCapitalize="none"
				className={`${col} w-full rounded-md p-2`}
				onChange={e => {
					start();
					setText(e.target.value);
					checker(e.target.value == text ? '' : e.target.value);
				}}
				value={text}
			/>
			<div className="">
				<Timer time={time} onReset={reset} />
			</div>
		</motion.div>
	);
}
