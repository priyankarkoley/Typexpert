import React from 'react';

export default function Dashboard({
	wordCount,
	letterCount,
	correctCount,
	inCorrectCount,
	totalTime,
	writtenWords,
	correctStore,
	text,
}: {
	wordCount: number;
	letterCount: number;
	correctCount: number;
	inCorrectCount: number;
	totalTime: number;
	writtenWords: string;
	correctStore: number[];
	text: string;
}) {
	let col1 =
		(letterCount + wordCount) / 5 / (totalTime / 600) >= 40
			? 'border-green-500 text-green-500'
			: (letterCount + wordCount) / 5 / (totalTime / 600) >= 30
				? 'border-yellow-600 text-yellow-600'
				: 'border-rose-600 text-rose-600';
	let col2 =
		(correctCount / wordCount) * 100 >= 80
			? 'border-green-500 text-green-500'
			: (correctCount / wordCount) * 100 >= 65
				? 'border-yellow-600 text-yellow-600'
				: 'border-rose-600 text-rose-600';
	return (
		<div className="w-full px-6 py-4">
			<div className="mb-10 flex items-center md:text-2xl lg:text-3xl">
				YOUR DASHBOARD:
				{/* {letterCount + text.length - 1 + wordCount} */}
			</div>
			<div className="space-y-4">
				<div className="relative flex items-center">
					Speed:
					<div className={`text-xl ${col1} absolute right-0 inline-block w-fit border-2 px-2 font-bold`}>
						{(letterCount + wordCount) / 5 / (totalTime / 600)
							? (letterCount + wordCount) / 5 / (totalTime / 600) !== Infinity
								? Math.round((letterCount + wordCount) / 5 / (totalTime / 600))
								: '00'
							: 'error'}{' '}
						wpm.
					</div>
				</div>
				<div className="relative flex items-center">
					Accuracy:
					<span className={`text-xl ${col2} absolute right-0 inline-block w-fit border-2 px-2 font-bold`}>
						{(correctCount / wordCount) * 100 ? Math.round((correctCount / wordCount) * 100) : '0'}%
					</span>
				</div>
				<div className="relative flex items-center">
					Total Words:
					<span className="absolute right-0 inline-block w-fit border-2 border-green-500 px-2 text-xl font-bold text-green-500">
						{wordCount}
					</span>
				</div>
				<div className="relative flex items-center">
					Correctly Spelled:
					<span className="absolute right-0 inline-block w-fit border-2 border-green-500 px-2 text-xl font-bold text-green-500">
						{correctCount}
					</span>
				</div>
				<div className="relative flex items-center">
					Incorrectly Spelled:
					<span
						className={`text-xl ${
							inCorrectCount ? 'border-rose-600 text-rose-600' : 'border-green-500 text-green-500'
						} absolute right-0 inline-block w-fit border-2 px-2 font-bold`}
					>
						{inCorrectCount}
					</span>
				</div>
				<div className="">
					You have written:
					<div>
						{writtenWords
							.split(' ')
							.slice(0, wordCount)
							.map((value, index) => {
								return (
									<span key={index}>
										<span className={` ${correctStore[index] === 1 ? 'text-green-400' : 'text-red-500'}`}>{value}</span>{' '}
									</span>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
}
