import React, { Suspense } from 'react'
import Results from '@/components/Results'
import { SearchBar } from '@/components/SearchBar'

// import { SITE_URL } from '@/lib/utils'
export default async function Page() {
	return (
		<section
			aria-labelledby="search-heading"
			className="w-full flex justify-center items-center flex-col"
		>
			<h2 id="search-heading" className="sr-only">
				Item Search
			</h2>
			<SearchBar />
		</section>
	)
}
