import React, { Suspense } from 'react'
import Results from '@/components/Results'
import { SearchBar } from '../components/SearchBar'

export default async function App({ params }: { params: any }) {
	//parse item to string dandelion%20ale -> dandelion ale
	const item = params ? params?.item?.replace(/%20/g, ' ') : null

	return (
		<>
			<section>
				<SearchBar item={item} />
			</section>
			<section>{item && <Results item={item} />} </section>
		</>
	)
}
