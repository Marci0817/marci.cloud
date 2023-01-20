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
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap'
					rel='stylesheet'></link>
			</Head>
			<main className='bg-darkBlue h-screen w-full'>
				<StatusCard />
				<motion.div className='text-babyBlue font-poppins flex flex-row mt-64 justify-center items-center w-full'>
					<div className='w-96 h-auto rounded-xl bg-white py-14 px-10 flex flex-col justify-between drop-shadow-2xl'>
						<div className='text-center'>
							<Typing />
						</div>
						<div className='text-gray-600 mt-4 text-center md:text-md'>
							Can't show further information..
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
			</main>
			<div className='relative w-full'>
				<p className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center text-gray-200 text-xs font-poppins mt-6 p-4'>
					Copyright © {new Date().getFullYear()}{' '}
					<a href='https://marci.cloud' className='text-blue-500'>
						marci.cloud
					</a>{' '}
					All rights reserved.
				</p>
			</div>
		</>
	);
}