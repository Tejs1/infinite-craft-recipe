import { getAllItemKeys } from '@/lib/actions'
import { NextResponse } from 'next/server'

export const GET = async () => {
	const data = await getAllItemKeys()
	return NextResponse.json({ data })
}

// export const POST = async (request: Request) => {
// 	const data = await request.json()
// 	const todo = await db.todo.create({ data })
// 	return NextResponse.json({ data: todo })
// }