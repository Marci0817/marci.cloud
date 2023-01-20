import React, { use, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function StatusCard() {
	const [statusCode, setStatusCode] = useState(1);

	interface StatusCode {
		text: string;
		color: string;
	}

	interface StatusCodes {
		[key: number]: StatusCode;
	}

	const statusCodes: StatusCodes = {
		0: { text: "Connected to marci's network", color: 'green' },
		1: { text: 'Connecting', color: 'yellow' },
		404: { text: 'Error', color: 'red' },
	};

	return (
		<motion.div
			className='text-center py-4 lg:px-4'
			initial={{ y: -300 }}
			animate={{ y: 0 }}
			transition={{
				y: { duration: 1 },
				default: { ease: 'easeInOut' },
			}}
			onAnimationComplete={() =>
				setTimeout(() => {
					setStatusCode(0);
				}, 3000)
			}>
			<div className=' items-center text-indigo-100 leading-none rounded-full inline-flex'>
				<motion.span
					className={`flex w-3 h-3 bg-${statusCodes[statusCode].color}-500 rounded-full`}
					animate={{ scale: [1.1, 1, 1.1] }}
					transition={{
						duration: 1,
						repeat: Infinity,
					}}></motion.span>
				<span className='font-semibold mr-2 text-left flex-auto ml-2'>
					{statusCodes[statusCode].text}
				</span>
			</div>
		</motion.div>
	);
}
