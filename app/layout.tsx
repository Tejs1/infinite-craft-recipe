import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Infinite Craft Solver',
	description: 'Find the fastest crafting paths in Infinite Craft',
	generator: 'Next.js',
	applicationName: 'Infinite Craft Solver',
	referrer: 'origin-when-cross-origin',
	keywords: ['Infinite ', 'Recipe', 'Craft Solver', 'Infinite Craft Recipe'],
	authors: [{ name: 'Tejas' }, { name: 'Tejas', url: 'https://twitter.com/tejsrelax' }],
	creator: 'Tejas Thorat',
	publisher: 'Tejas Thorat',
	robots: 'index, follow',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// const marginTopClass = item ? 'mt-5' : 'mt-60'
	return (
		<html lang="en" className="w-full">
			<body className={inter.className + ' overflow-y-scroll'}>
				<>
					<main className="w-full min-h-screen bg-gradient-radial bg-opacity-50 bg-cover bg-center flex flex-col items-center justify-start ">
						<section className={` w-full flex flex-col  items-center justify-center mt-3 `}>
							<h1 className="w-full text-4xl md:text-6xl font-bold text-center">Infinite Craft Recipes</h1>
							<p className="w-full text-xl mt-2 text-center">Fastest ways to craft your items</p>
						</section>
						{children}
					</main>
				</>
				<SpeedInsights />
				<Analytics mode={'production'} />;
			</body>
		</html>
	)
}
