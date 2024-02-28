import { getAllItemKeys } from '@/lib/utils'
import { NextResponse } from 'next/server'

export const GET = async () => {
	const data = await getAllItemKeys()
	const res = { data: data }
	return NextResponse.json({ res })
}

// export const POST = async (request: Request) => {
// 	const data = await request.json()
// 	const todo = await db.todo.create({ data })
// 	return NextResponse.json({ data: todo })
// }
