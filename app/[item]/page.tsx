import App from '@/app/page'
import React from 'react'

// export const runtime = 'edge'
// export const fetchCache = 'force-no-store'
// export const dynamic = 'force-dynamic'

function Item({ params }: { params: any }) {
	return <App params={params} />
}

export default Item

// export async function generateStaticParams() {
// 	return ['pebble', '2041', 'bhangra', 'everclear', 'zoologist'].map(key => ({
// 		item: key,
// 	}))
// }
