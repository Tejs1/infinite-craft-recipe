import { NextResponse } from 'next/server'
import { items } from '@/data/items'
import { ElementGraph } from '@/types'

export const GET = async (request: Request, { params }: { params: { item: string } }) => {
	const path = await getPath(params.item)
	const res = JSON.stringify({ data: path })
	return NextResponse.json(res)
}

const getPath = (item: string) => {
	return traceElement(item)
}
function traceElement(element: string, elementGraph: ElementGraph = {}): ElementGraph | null {
	const BASE_ARRAY = ['wind', 'earth', 'fire', 'water']

	if (elementGraph[element]) return null

	if (BASE_ARRAY.includes(element)) return null

	let constituents = findCombinationsFromDB(element)
	if (!constituents || constituents.length === 0) return null

	elementGraph[element] = constituents

	//wait till all promises are resolved
	constituents.map(constituent => traceElement(constituent, elementGraph))
	return elementGraph
}

const findCombinationsFromDB = (compound: string): string[] => {
	const result = items[compound]
	return result
}
