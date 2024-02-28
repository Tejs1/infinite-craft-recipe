import App from '@/app/page'
import React from 'react'

export const runtime = 'nodejs'
export const fetchCache = 'force-cache'
// export const dynamic = 'force-dynamic'
import type { Metadata, ResolvingMetadata } from 'next'
import { findItemConstituents } from '@/lib/utils'

type Props = {
	params: { item: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	const item = params.item.replace(/%20/g, ' ')
	console.log('item', item)
	const { constituents: result } = await findItemConstituents(item)

	return {
		title: `Infinite Craft ` + item,
		// openGraph: {
		// 	images: ['/some-specific-page-image.jpg', ...previousImages],
		// },
		description: `Infinite Craft ${item} from ${result[0]} + ${result[1]}`,
	}
}

function Item({ params }: { params: any }) {
	return <App params={params} />
}

export default Item

// export async function generateStaticParams() {
// 	const itemList = await getAllItemKeys()
// 	return itemList.map(key => ({
// 		item: key,
// 	}))
// }
