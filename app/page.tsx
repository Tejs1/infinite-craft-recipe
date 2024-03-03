import React, { Suspense } from 'react'
import Results from '@/components/Results'
import { SearchBar } from '../components/SearchBar'
export const runtime = 'nodejs'
export default async function App({ item }: { item: string }) {
	console.log('hello', process.env.VERCEL_URL)
	return (
		<>
			<section className="w-full flex justify-center items-center">
				<SearchBar item={item} />
			</section>
			<Suspense fallback={<div>Loading...</div>}>
				<section className="w-full flex justify-center items-center">{item && <Results item={item} />} </section>
			</Suspense>
			<h3>{process.env.VERCEL_URL}</h3>
		</>
	)
}
