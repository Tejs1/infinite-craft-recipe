import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Infinite Craft Recipe - Discover Fast Crafting Paths',
	description:
		'Explore the fastest ways to craft items in Infinite Craft. Utilize our solver to get quick answers for crafting recipes and strategies.',
	generator: 'Next.js',
	applicationName: 'Infinite Craft Recipe',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'Infinite ',
		'Recipe',
		'Craft',
		'solver',
		'browser',
		'browser game',
		'Craft Solver',
		'Craft Answers',
		'Craft Recipe',
		'Infinite Craft Recipe',
		'Infinite Craft Solver',
		'Infinite Craft',
		'Infinite Craft Solver',
		'Infinite Craft Browser',
		'infinite craft recipe',
		'Crafting Recipes',
		'Game Crafting Guide',
		'Online Crafting Tool',
		'Crafting Game Solver',
		'Recipe Finder',
		'Crafting Strategies',
		'Game Recipes',
		'Infinite Craft Guide',
		'Crafting Tips',
		'Browser Game Crafting',
	],
	authors: [
		{ name: 'Tejas' },
		{ name: 'Tejas', url: 'https://twitter.com/tejsrelax' },
	],
	creator: 'Tejas Thorat',
	publisher: 'Tejas Thorat',
	robots: 'index, follow',
	verification: { google: '94lvWfeQMJYpjC7RF4mTCzwWzeJ_gSdYFsdZHZ9LD-E' },
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
				<main className="w-full min-h-screen bg-gradient-radial bg-opacity-50 bg-cover bg-center flex flex-col items-center justify-start ">
					<header
						aria-labelledby="main-heading"
						className={` w-full flex flex-col  items-center justify-center mt-3 `}
					>
						<h1 className="w-full text-4xl md:text-6xl font-bold text-center">
							Infinite Craft Recipes
						</h1>
						<p className="w-full text-xl mt-2 text-center">
							Fastest ways to craft your items
						</p>
					</header>
					{children}
				</main>
				<footer>{/* <!-- Footer content here --> */}</footer>
				<SpeedInsights />
				<Analytics mode={'production'} />;
			</body>
		</html>
	)
}
