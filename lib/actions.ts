'use server'
import db from '@/lib/db'
import { items } from '@/data/items'
import exp from 'constants'

export const getPath = async (item: string) => {
	return traceElement(item)
}
export type ElementGraph = { [key: string]: string[] }
async function traceElement(element: string, elementGraph: ElementGraph = {}): Promise<ElementGraph | null> {
	const BASE_ARRAY = ['wind', 'earth', 'fire', 'water']

	if (elementGraph[element]) return null

	if (BASE_ARRAY.includes(element)) return null

	let constituents = await findCombinationsFromJS(element)

	elementGraph[element] = constituents
	constituents.forEach(constituent => {
		elementGraph[constituent] ? elementGraph[constituent] : traceElement(constituent, elementGraph)
	})

	return elementGraph
}

// export const findCombinationsFromJS = async (compound: string): Promise<string[]> => {
// 	const result = items[compound]
// 	return result
// }
export const findCombinationsFromJS = async (compound: string): Promise<string[]> => {
	const result = await getOneItem(compound).then(res => {
		console.log('result', JSON.stringify(res))
		return res
	})
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

export async function getItems() {
	const items = await db.result.findMany()
	return items
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
