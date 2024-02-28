import React, { Suspense } from 'react'
import Results from '@/components/Results'
import { SearchBar } from '../components/SearchBar'
export const runtime = 'nodejs'
export default async function App({ params }: { params: any }) {
	const item = params ? params?.item?.replace(/%20/g, ' ') : null
	console.log('hello', process.env.VERCEL_URL)
	return (
		<>
			<section>
				<SearchBar item={item} />
			</section>
			<section>{item && <Results item={item} />} </section>
			<h3>{process.env.VERCEL_URL}</h3>
		</>
	)
}
