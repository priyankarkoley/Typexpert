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
		<div className="flex h-7 space-x-2 sm:h-10">
			<div className="flex w-full flex-wrap items-center">
				Your Time:&nbsp;
				<div>{`
          ${time.h == 0 ? '' : (time.h < 10 ? '0' + time.h : time.h) + ':'}
					${time.m < 10 ? '0' + time.m : time.m} :
					${time.s < 10 ? '0' + time.s : time.s}.
					${time.ms < 10 ? time.ms : time.ms}
				`}</div>
			</div>
			<button
				className="h-full rounded-md bg-gray-200 bg-opacity-60 px-3 font-bold tracking-wider text-gray-950 shadow-md shadow-gray-700 hover:bg-opacity-100 hover:shadow-gray-900 disabled:bg-stone-500"
				onClick={() => {
					onReset();
				}}
			>
				RESET
			</button>
			<Link
				className="h-full rounded-md bg-gray-200 bg-opacity-60 p-3 px-3 font-bold tracking-tight text-gray-950 shadow-md shadow-gray-700 hover:bg-opacity-100 hover:shadow-gray-900 disabled:bg-stone-500"
				href={'/history'}
				// target="_blank"
			>
				HISTORY
			</Link>
		</div>
	);
}
