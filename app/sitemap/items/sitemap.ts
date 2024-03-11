import { MetadataRoute } from 'next'
import { items } from '@/data/items'
// export async function generateSitemaps() {
// 	// Fetch the total number of products and calculate the number of sitemaps needed
// 	return [{ id: 1 }]
// }

export default async function sitemap({
	id,
}: {
	id: number
}): Promise<MetadataRoute.Sitemap> {
	// Google's limit is 50,000 URLs per sitemap

	// const Items = Object.keys(items)
	const Items: string[] = []
	Object.keys(items).forEach(item => {
		// don't push if item can be converted into number
		// covert item to url and push it to Items
		if (isNaN(Number(item))) Items.push(encodeURIComponent(item))
	})

	return Items.map(Item => ({
		url: `https://infinitecraftrecipe.vercel.app/${Item}`,
		lastModified: new Date(),
		changeFrequency: 'never',
		priority: 0.7,
	}))
}
