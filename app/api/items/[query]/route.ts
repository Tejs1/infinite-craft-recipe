import { NextResponse } from 'next/server'
import { items } from '@/data/items'
const keys = Object.keys(items)

export const GET = async (
	request: Request,
	{ params }: { params: { query: string } },
) => {
	const query = params.query

	if (!query) return NextResponse.json({ data: null })
	// let i = 0
	// let j = 0
	const includesArray = keys
		.filter(key => key.toLowerCase().includes(query.toLowerCase()))
		.slice(0, 5)
	const startsWithArray = keys
		.filter(key => key.toLowerCase().startsWith(query.toLowerCase()))
		.slice(0, 5)

	// for (let index = 0; i < 5 || index < keys.length; index++) {
	// 	if (keys[index].includes(query)) {
	// 		includesArray.push(keys[index])
	// 	}
	// 	i++
	// }

	// for (let index = 0; j < 5 || index < keys.length; index++) {
	// 	if (keys[index].startsWith(query)) {
	// 		startsWithArray.push(keys[index])
	// 	}
	// 	j++
	// }

	const set = new Set([...startsWithArray, ...includesArray])

	const res = { data: Array.from(set) }
	return NextResponse.json(res)
}
