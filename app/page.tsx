import React, { Suspense } from 'react'
import Results from '@/components/Results'
import Head from 'next/head'
import { SearchBar } from '../components/SearchBar'

export default async function App({ params }: { params: any }) {
	//parse item to string dandelion%20ale -> dandelion ale
	const item = params ? params?.item?.replace(/%20/g, ' ') : null

	const marginTopClass = item ? 'mt-5' : 'mt-60'
	return (
		<>
			<Head>
				<title>Infinite Craft Solver</title>
				<meta name="description" content="Find the fastest crafting paths in Infinite Craft" />
			</Head>

			<main className="min-h-screen bg-gradient-radial bg-opacity-50 bg-cover bg-center flex flex-col items-center justify-start ">
				<section className={` flex flex-col  items-center justify-center ${marginTopClass}`}>
					<h1 className="text-4xl md:text-6xl font-bold text-center">Infinite Craft Recipes</h1>
					<p className="text-xl mt-4 text-center">Discover the fastest ways to craft your items</p>
					<SearchBar item={item} />
				</section>
				<section>{item && <Results item={item} />} </section>
			</main>
		</>
	)
}
