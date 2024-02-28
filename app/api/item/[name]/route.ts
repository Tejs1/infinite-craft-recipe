import { NextResponse } from 'next/server'
import { items } from '@/data/items'
export const GET = (request: Request, { params }: { params: { name: string } }) => {
	const result = items[params.name]
	const res = { data: result }
	return NextResponse.json(res)
}
