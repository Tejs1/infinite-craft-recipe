'use server'
import db from '@/lib/db'

export const getPath = (item: string) => {
	return traceElement(item)
}
export type ElementGraph = { [key: string]: string[] }
async function traceElement(element: string, elementGraph: ElementGraph = {}): Promise<ElementGraph | null> {
	const BASE_ARRAY = ['wind', 'earth', 'fire', 'water']

	if (elementGraph[element]) return null

	if (BASE_ARRAY.includes(element)) return null

	let constituents = await findCombinationsFromDB(element)

	elementGraph[element] = constituents

	//wait till all promises are resolved
	await Promise.all(constituents.map(async constituent => await traceElement(constituent, elementGraph)))
	return elementGraph
}

// export const findCombinationsFromDB = async (compound: string): Promise<string[]> => {
// 	const result = items[compound]
// 	return result
// }
export const findCombinationsFromDB = async (compound: string): Promise<string[]> => {
	const result = await getOneItem(compound)
	if (result) {
		return [result.first, result.second]
	}
	return []
}

export async function push({
	result,
	first,
	second,
	emoji = '🔥',
}: {
	result: string
	first: string
	second: string
	emoji: string
}) {
	await db.result.create({
		data: {
			result: result,
			first: first,
			second: second,
			emoji: emoji,
		},
	})
}

export async function deleteItem(result: string) {
	await db.result.delete({
		where: {
			result: result,
		},
	})
}

export async function updateItem(result: string, first: string, second: string, emoji: string) {
	await db.result.update({
		where: {
			result: result,
		},
		data: {
			first: first,
			second: second,
			emoji: emoji,
		},
	})
}

export async function getOneItem(result: string) {
	const item = await db.result.findUnique({
		where: {
			result: result,
		},
	})
	return item
}

// update or create
export async function upsertItem(result: string, first: string, second: string, emoji: string) {
	const item = await db.result.upsert({
		where: {
			result: result,
		},
		update: {
			first: first,
			second: second,
			emoji: emoji,
		},
		create: {
			result: result,
			first: first,
			second: second,
			emoji: emoji,
		},
	})
	return item
}

//push all items to db
export async function pushAllItems() {
	for (const item in items) {
		const result = items[item]
		await upsertItem(item, result[0], result[1], '🔥')
	}
}
export async function getAllItems() {
	const items = await db.result.findMany()
	return items
}
//get all items keys from db
export async function getAllItemKeys() {
	const items = await db.result.findMany({
		select: {
			result: true,
		},
	})

	return items.map(item => item.result)
}
//find if item is in db
export async function findItem(result: string) {
	const item = await db.result.findUnique({
		where: {
			result: result,
		},
	})
	return item ? true : false
}

export async function getMatchingItems(query: string) {
	const items = await db.result.findMany({
		where: {
			OR: [
				{
					result: {
						startsWith: query,
					},
				},
				{
					result: {
						contains: query,
					},
				},
			],
		},
		take: 10,
	})
	//return only result
	return items.map(item => item.result)
}

export async function getMatchingItemKeys(query: string) {
	console.log('query', query)
	const startsWith = await db.result.findMany({
		where: {
			result: {
				startsWith: query,
			},
		},
		select: {
			result: true,
		},
		take: 5,
	})
	const contains = await db.result.findMany({
		where: {
			result: {
				contains: query,
			},
		},
		select: {
			result: true,
		},
		take: 5,
	})

	const set = new Set([...startsWith, ...contains].map(item => item.result))
	return Array.from(set)
}
