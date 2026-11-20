import { NextResponse } from 'next/server'
import { items } from '@/data/items'

export const GET = async (request: Request, { params }: { params: Promise<{ name: string }> }) => {
	const result = items[(await params).name]
	const res = { data: result }
	return NextResponse.json(res)
}
