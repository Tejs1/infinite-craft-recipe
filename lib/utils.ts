'use server'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
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
