import { items } from '@/data/items'
import { NextResponse } from 'next/server'

export const GET = async () => {
	const res = { data: Object.keys(items) }
	return NextResponse.json(res)
}

// export const POST = async (request: Request) => {
// 	const data = await request.json()
// 	const todo = await db.todo.create({ data })
// 	return NextResponse.json({ data: todo })
// }
