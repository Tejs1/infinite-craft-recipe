import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { items } from '@/data/items'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getPath = (item: string) => {
	return traceElement(item)
}
export type ElementGraph = { [key: string]: string[] }
function traceElement(element: string, elementGraph: ElementGraph = {}): ElementGraph | null {
	const BASE_ARRAY = ['wind', 'earth', 'fire', 'water']

	if (elementGraph[element]) return null

	if (BASE_ARRAY.includes(element)) return null

	let constituents = findCombinationsFromJS(element)

	elementGraph[element] = constituents
	constituents.forEach(constituent => {
		elementGraph[constituent] ? elementGraph[constituent] : traceElement(constituent, elementGraph)
	})

	return elementGraph
}

export const findCombinationsFromJS = (compound: string): string[] => {
	const result = items[compound]
	return result
}
