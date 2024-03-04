import React, { Suspense } from 'react'
import Results from '@/components/Results'
import { SearchBar } from '@/components/SearchBar'

// import { SITE_URL } from '@/lib/utils'
export default async function Page() {
	return (
		<>
			<section className="w-full flex justify-center items-center flex-col">
				<SearchBar />
			</section>

			<h3>{process.env.VERCEL_URL}</h3>
		</>
	)
}
