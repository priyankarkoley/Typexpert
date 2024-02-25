import Link from 'next/link';
import React from 'react';
export default function Timer({
	time,
	onReset,
}: {
	time: { ms: number; s: number; m: number; h: number };
	onReset: any;
}) {
	return (
		<div className="flex h-10 sm:space-x-2">
			<div className="hidden w-full flex-wrap items-center sm:flex">
				Your Time:&nbsp;
				<div>{`
					${time.h == 0 ? '' : (time.h < 10 ? '0' + time.h : time.h) + ':'}
					${time.m < 10 ? '0' + time.m : time.m} :
					${time.s < 10 ? '0' + time.s : time.s}.
					${time.ms < 10 ? time.ms : time.ms}
				`}</div>
			</div>
			<button
				className="flex h-full items-center justify-center rounded-md bg-gray-200 bg-opacity-60 px-3 font-bold tracking-wider text-gray-950 shadow-md shadow-gray-700 hover:bg-opacity-100 hover:shadow-gray-900 disabled:bg-stone-500"
				onClick={() => {
					onReset();
				}}
			>
				RESET
			</button>
			<div className="w-full sm:hidden"></div>
			<Link
				className="flex h-full items-center justify-center rounded-md bg-gray-200 bg-opacity-60 px-3 font-bold tracking-tight text-gray-950 shadow-md shadow-gray-700 hover:bg-opacity-100 hover:shadow-gray-900 disabled:bg-stone-500"
				href={'/history'}
				// target="_blank"
			>
				HISTORY
			</Link>
		</div>
	);
}
