'use client';

import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import Link from 'next/link';

export default function Page() {
	interface datatype {
		dateTime: string;
		wpm: number;
		acc: number;
	}
	const [options, setOptions] = useState<object>({});
	const [data, setData] = useState<datatype[]>();

	useEffect(() => {
		if (typeof window !== 'undefined') setData(JSON.parse(localStorage.getItem('data') || '[]'));
	}, []);

	useEffect(() => {
		window.addEventListener('storage', () => {
			setData(JSON.parse(localStorage.getItem('data') || '[]'));
		});
		if (data) {
			localStorage.setItem('data', JSON.stringify(data));
			const warr: number[] = [];
			const acarr: number[] = [];
			const timearr: string[] = [];
			for (let i = 0; i < data.length; i++) {
				warr.push(data[i].wpm);
				acarr.push(data[i].acc);
				timearr.push(data[i].dateTime);
			}
			
			const opt = {
				title: {
					text: 'Your Progress',
					textStyle: { color: '#ffffff' },
				},
				tooltip: {
					trigger: 'axis',
				},
				legend: {
					data: ['WPM', 'Accuracy'],
					textStyle: { color: '#ffffff' },
				},
				color: ['#ff0000', '#00ff00'],
				textStyle: { color: '#ffffff' },
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true,
				},
				toolbox: {
					feature: {
						saveAsImage: {},
					},
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: timearr, // TODO
				},
				yAxis: {
					type: 'value',
				},
				series: [
					{
						name: 'WPM',
						type: 'line',
						stack: 'Total',
						data: warr, // TODO
					},
					{
						name: 'Accuracy',
						type: 'line',
						stack: 'Total',
						data: acarr, // TODO
					},
				],
			};
			if (window.innerWidth < 640) opt.title.text = "";
			setOptions(opt);
		}
	}, [data]);

	return (
		<div className="relative flex h-screen w-full flex-col items-center justify-center">
			<div className="absolute -z-50 h-full w-full overflow-hidden bg-gray-900 bg-fixed">
				<div className="absolute left-2/3 top-1/2 z-10 -ml-32 -mt-10 h-24 w-24 animate-circlesm rounded-full bg-violet-800 opacity-40 blur-xl sm:h-44 sm:w-44 md:h-64 md:w-64" />
				<div className="absolute left-1/2 top-1/2 -z-50 -ml-10 -mt-72 h-44 w-44 animate-circlemd rounded-full bg-yellow-600 opacity-40 blur-xl sm:h-64 sm:w-64 md:h-96 md:w-96" />
				<div className="absolute left-1/3 top-1/2 z-20 -ml-32 -mt-80 h-32 w-32 animate-circlexl rounded-full bg-red-500 opacity-40 blur-xl sm:h-52 sm:w-52 md:h-80 md:w-80" />
				<div className="absolute left-1/3 top-1/2 -z-20 -ml-52 -mt-20 h-32 w-32 animate-circlesm rounded-full bg-green-600 opacity-40 blur-xl sm:h-52 sm:w-52 md:h-80 md:w-80" />
				<div className="w-15 h-15 sm:w-30 sm:h-30 absolute left-2/3 top-1/2 -z-20 -mt-72 ml-12 animate-circlexl rounded-full bg-cyan-600 opacity-40 blur-xl md:h-40 md:w-40" />
			</div>
			{data ? (
				data[0] ? (
					<>
						<div className="h-96 w-full px-10">
							<ReactEcharts option={options} />
						</div>
						<div className="flex gap-2">
							<button
								className="flex h-10 items-center justify-center rounded-md bg-gray-200 bg-opacity-60 px-3 font-bold tracking-wider text-gray-950 shadow-md shadow-gray-700 hover:bg-opacity-100 hover:shadow-gray-900 disabled:bg-stone-500"
								onClick={() => {
									localStorage.clear();
									setData(JSON.parse('[]'));
								}}
							>
								CLEAR DATA
							</button>
							<Link
								href="/"
								className="flex h-10 items-center justify-center rounded-md bg-gray-200 bg-opacity-60 px-3 font-bold tracking-tight text-gray-950 shadow-md shadow-gray-700 hover:bg-opacity-100 hover:shadow-gray-900 disabled:bg-stone-500"
							>
								HOME
							</Link>
						</div>
					</>
				) : (
					<>
						<div className="text-md flex w-full items-center justify-center p-7 text-center text-white sm:p-48 sm:text-2xl">
							There's no history yet. Go make some history and come back!
						</div>
						<div className="h-20 sm:hidden"></div>
						<Link
							className="flex h-10 items-center rounded-md bg-gray-200 bg-opacity-60 px-3 font-bold tracking-wider text-gray-950 shadow-md shadow-gray-700 hover:bg-opacity-100 hover:shadow-gray-900 disabled:bg-stone-500"
							href="/"
						>
							Let's Make Some Data
						</Link>
					</>
				)
			) : (
				<div className="text-md flex w-full animate-pulse items-center justify-center p-7 text-justify text-white sm:p-48 sm:text-2xl">
					Loading... Just one more second!
				</div>
			)}
		</div>
	);
}
