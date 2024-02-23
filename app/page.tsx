// pages/index.js

import Head from 'next/head'
import { SearchBar } from '../components/SearchBar' // Assuming you have a SearchBar component

export default function Home() {
	return (
		<>
			<Head>
				<title>Infinite Craft Recipes</title>
				<meta name="description" content="Find the fastest crafting paths in Infinite Craft" />
			</Head>

			<main className="min-h-screen bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center flex flex-col items-center justify-center ">
				<h1 className="text-4xl md:text-6xl font-bold text-center">Infinite Craft Crafting Path Finder</h1>
				<p className="text-xl mt-4 text-center">Discover the fastest ways to craft your items</p>
				<SearchBar />
			</main>
		</>
	)
}
