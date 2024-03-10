// import App from '@/app/page'
import React, { Suspense } from 'react'

// export const dynamic = 'force-dynamic'
// import type { Metadata, ResolvingMetadata } from 'next'
// import { SITE_URL } from '@/lib/utils'

// type Props = {
// 	params: { item: string }
// }

// export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
// 	const item = decodeURIComponent(params.item)

// 	const data = await fetch(`${SITE_URL}/api/item/${item}`)
// 		.then(res => res.json())
// 		.catch(err => console.log(err))
// 	console.log('data', data)
// 	return {
// 		title: `Infinite Craft ` + item,
// 		description: `Infinite Craft ${item} from ${data?.data[0]} + ${data?.data[1]}`,
// 	}
// }

import Results from '@/components/Results'
import { SearchBar } from '@/components/SearchBar'

export default async function Page({ params }: { params: { item: string } }) {
	const item = decodeURIComponent(params.item)

	return (
		<>
			<section
				aria-labelledby="search-heading"
				className="w-full flex justify-center items-center flex-col"
			>
				<h2 id="search-heading" className="sr-only">
					Item Search
				</h2>
				<SearchBar item={item} />
			</section>
			<Suspense fallback={<div>Loading...</div>}>
				<section
					aria-labelledby="crafting-steps-heading"
					className="w-full flex justify-center items-center"
				>
					{item && <Results item={item} />}
				</section>
			</Suspense>
		</>
	)
}

// export async function generateStaticParams() {
// 	const itemList = await getAllItemKeys()
// 	return itemList.map(key => ({
// 		item: key,
// 	}))
// }
