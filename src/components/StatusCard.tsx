import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function StatusCard() {
	const [statusCode, setStatusCode] = useState<number>(1);
	interface StatusCode {
		text: string;
		color: string;
	}

	interface StatusCodes {
		[key: number]: StatusCode;
	}

	const statusCodes: StatusCodes = {
		0: { text: "Connected to marci's network", color: 'rgb(34 197 94)' },
		1: { text: 'Connecting', color: 'rgb(234 179 8)' },
		404: { text: 'Error', color: 'rgb(239 68 68)' },
	};

	useEffect(() => {
		setTimeout(() => {
			setStatusCode(0);
		}, 3000);
	}, []);

	return (
		<motion.div
			className='text-center py-4 lg:px-4'
			initial={{ y: -300 }}
			animate={{ y: 0 }}
			transition={{
				y: { duration: 1 },
				default: { ease: 'easeInOut' },
			}}>
			<div className='items-center text-indigo-100 leading-none rounded-full inline-flex'>
				<motion.span
					className={`flex w-3 h-3 rounded-full `}
					animate={{ scale: [1.1, 1, 1.1] }}
					style={{ backgroundColor: statusCodes[statusCode].color }}
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
