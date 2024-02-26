import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Infinite Craft Solver',
	description: 'Find the fastest crafting paths in Infinite Craft',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// const marginTopClass = item ? 'mt-5' : 'mt-60'
	return (
		<html lang="en">
			<body className={inter.className}>
				<>
					<Head>
						<title>Infinite Craft Solver</title>
						<meta name="description" content="Find the fastest crafting paths in Infinite Craft" />
					</Head>

					<main className="min-h-screen bg-gradient-radial bg-opacity-50 bg-cover bg-center flex flex-col items-center justify-start ">
						<section className={` flex flex-col  items-center justify-center mt-3 `}>
							<h1 className="text-4xl md:text-6xl font-bold text-center">Infinite Craft Recipes</h1>
							<p className="text-xl mt-2 text-center">Fastest ways to craft your items</p>
						</section>
						{children}
					</main>
				</>
			</body>
		</html>
	)
}
