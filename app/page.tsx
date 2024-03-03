import React, { Suspense } from 'react'
import Results from '@/components/Results'
import { SearchBar } from '@/components/SearchBar'

import { SITE_URL } from '@/lib/utils'
export default async function Page() {
	console.log(
		'VERCEL_URL',
		process.env.VERCEL_URL,
		'NEXT_PUBLIC_VERCEL_URL',
		process.env.NEXT_PUBLIC_VERCEL_URL,
		'NEXT_PUBLIC_SITE_URL',
		process.env.NEXT_PUBLIC_SITE_URL,
		'SITE_URL',
		SITE_URL,
	)
	return (
		<>
			<section className="w-full flex justify-center items-center flex-col">
				<SearchBar />
			</section>

			<h3>{process.env.VERCEL_URL}</h3>
		</>
	)
}
