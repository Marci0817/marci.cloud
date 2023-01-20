import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Typing() {
	function toChar(x: string): string[] {
		let t = [];
		for (let i = 0; i < x.length; i++) {
			t.push(x[i]);
		}
		return t;
	}
	const titleVariants = {
		toIntial: {
			opacity: 0,
		},
		toAnimate: {
			opacity: 1,
		},
	};
	return (
		<motion.p
			className='text-black uppercase text-xl lg:text-xl font-bold'
			variants={titleVariants}
			initial='toIntial'
			animate='toAnimate'
			transition={{
				staggerChildren: 0.1,
				delayChildren: 0.5,
			}}>
			{toChar('Welcome back!').map((e) => (
				<motion.span
					className=''
					variants={titleVariants}
					transition={{ duration: 0 }}>
					{e}
				</motion.span>
			))}
		</motion.p>
	);
}
