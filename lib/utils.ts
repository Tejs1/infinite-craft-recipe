// import { items } from '@/data/items'
// import { ElementGraph } from '@/types'
// const keys = Object.keys(items)
//replace url with env variable
const SITE_URL = process.env.VERCEL_URL ? `http://${process.env.VERCEL_URL}` : 'http://localhost:3000'

export async function getMatchingItemKeys(query: string) {
	const items = await fetch(`${SITE_URL}/api/items/${query}`)
	return items.json()
}

export async function getRecipe(query: string) {
	const recipe = await fetch(`${SITE_URL}/api/recipe/${query}`)
	return recipe.json()
}

export async function findItemConstituents(query: string) {
	const item = await fetch(`${SITE_URL}/api/item/${query}`)
	return item.json()
}

// export const getAllItemKeys = async () => {
// 	return { keys }
// }

// export const findKeys = async (query: string) => {
// 	//filter only 1st 5 items
// 	if (!query) return []
// 	let i = 0
// 	let j = 0
// 	const includesArray = []
// 	const startsWithArray = []

// 	for (let index = 0; i < 5; index++) {
// 		if (keys[index].includes(query)) {
// 			includesArray.push(keys[index])
// 			i++
// 		}
// 	}

// 	for (let index = 0; j < 5; index++) {
// 		if (keys[index].startsWith(query)) {
// 			startsWithArray.push(keys[index])
// 			j++
// 		}
// 	}

// 	const set = new Set([...startsWithArray, ...includesArray])
// 	return Array.from(set)
// }

// export const getPath = async (item: string) => {
// 	return traceElement(item)
// }
// async function traceElement(element: string, elementGraph: ElementGraph = {}): Promise<ElementGraph | null> {
// 	const BASE_ARRAY = ['wind', 'earth', 'fire', 'water']

// 	if (elementGraph[element]) return null

// 	if (BASE_ARRAY.includes(element)) return null

// 	let constituents = await findCombinationsFromDB(element)
// 	if (!constituents || constituents.length === 0) return null

// 	elementGraph[element] = constituents

// 	//wait till all promises are resolved
// 	await Promise.all(constituents.map(async constituent => await traceElement(constituent, elementGraph)))
// 	return elementGraph
// }

// export const findCombinationsFromDB = async (compound: string): Promise<string[]> => {
// 	const result = items[compound]
// 	return result
// }
