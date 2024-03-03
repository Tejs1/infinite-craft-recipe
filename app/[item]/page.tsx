import App from '@/app/page'
import React from 'react'

export const runtime = 'nodejs'
export const fetchCache = 'force-cache'
// export const dynamic = 'force-dynamic'
import type { Metadata, ResolvingMetadata } from 'next'
import { SITE_URL } from '@/lib/utils'

type Props = {
	params: { item: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	const item = decodeURIComponent(params.item)

	const data = await fetch(`${SITE_URL}/api/item/${item}`)
		.then(res => res.json())
		.catch(err => console.error(err))

	return {
		title: `Infinite Craft ` + item,
		description: `Infinite Craft ${item} from ${data?.data[0]} + ${data?.data[1]}`,
	}
}

function Item({ params }: { params: any }) {
	const item = decodeURIComponent(params.item)
	return <App item={item} />
}

export default Item

// export async function generateStaticParams() {
// 	const itemList = await getAllItemKeys()
// 	return itemList.map(key => ({
// 		item: key,
// 	}))
// }
