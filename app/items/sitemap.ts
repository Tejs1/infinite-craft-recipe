import { MetadataRoute } from 'next'
import { items } from '@/data/items'
export async function generateSitemaps() {
	// Fetch the total number of products and calculate the number of sitemaps needed
	return [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 },
		{ id: 6 },
		{ id: 7 },
		{ id: 8 },
		{ id: 9 },
	]
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
	// Google's limit is 50,000 URLs per sitemap

	// const Items = Object.keys(items)
	const Items: string[] = []
	Object.keys(items).forEach(item => {
		// don't push if item can be converted into number
		// covert item to url and push it to Items
		if (isNaN(Number(item))) Items.push(encodeURIComponent(item))
	})
	// get items for this sitemap
	const length = Items.length / 9
	const start = (id - 1) * length
	const end = start + length
	const slicedItems = Items.slice(start, end)
	const sitemap: MetadataRoute.Sitemap = []
	if (id === 1) {
		sitemap.push({
			url: `https://infinitecraftrecipe.vercel.app`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'never',
			priority: 1,
		})
	}
	slicedItems.forEach(Item =>
		sitemap.push({
			url: `https://infinitecraftrecipe.vercel.app/${Item}`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'never',
			priority: 0.7,
		}),
	)

	return sitemap
}
