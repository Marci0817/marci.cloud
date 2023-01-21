import Head from 'next/head';
import StatusCard from '@/components/StatusCard';
import Typing from '@/components/Typing';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<>
			<Head>
				<title>marci.cloud</title>
				<meta name='description' content='marci.cloud' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='bg-darkBlue w-full h-screen'>
				<StatusCard />
				<motion.div className='text-babyBlue font-poppins flex items-center justify-center -translate-y-1/2 top-1/3 relative'>
					<div className='w-96 h-auto rounded-xl bg-white py-14 px-10 flex flex-col justify-between drop-shadow-2xl'>
						<div className='text-center'>
							<Typing />
						</div>
						<div className='text-gray-600 mt-4 text-center md:text-md'>
							Can&apos;t show further information..
						</div>
						<div className='mx-auto mt-8'>
							<button
								className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'
								onClick={() =>
									(window.location.href = 'https://code.marci.cloud')
								}>
								Go to the secret lab
							</button>
							<p className='text-xs text-gray-400 mt-3'>
								Note: Entry requires a permit
							</p>
						</div>
					</div>
				</motion.div>
				<div className='absolute w-full bottom-0'>
					<p className='relative  left-1/2 -translate-x-1/2 w-full text-center text-gray-200 text-xs font-poppins mt-6 p-4'>
						Copyright © {new Date().getFullYear()}{' '}
						<a href='https://marci.cloud' className='text-blue-500'>
							marci.cloud
						</a>{' '}
						All rights reserved.
					</p>
				</div>
			</main>
		</>
	);
}
