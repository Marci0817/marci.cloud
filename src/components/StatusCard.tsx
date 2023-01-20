import React, { use, useState } from 'react';
import { motion } from 'framer-motion';

export default function StatusCard() {
	const [isAnimationCompleted, setAnimationCompleted] = useState(false);
	return (
		<motion.div
			className='text-center py-4 lg:px-4'
			initial={{ y: -300 }}
			animate={{ y: 0 }}
			transition={{
				y: { duration: 1 },
				default: { ease: 'easeInOut' },
			}}
			onAnimationComplete={() => {
				console.log('asd');
			}}>
			<div className=' items-center text-indigo-100 leading-none rounded-full inline-flex'>
				<motion.span
					className='flex w-3 h-3 bg-green-500 rounded-full'
					animate={{ scale: [1.1, 1, 1.1] }}
					transition={{
						duration: 1,
						repeat: Infinity,
					}}></motion.span>
				<span className='font-semibold mr-2 text-left flex-auto ml-2'>
					Connected to marci's network
				</span>
			</div>
		</motion.div>
	);
}
