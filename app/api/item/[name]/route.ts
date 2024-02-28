import { findItem } from '@/lib/actions'
import { NextResponse } from 'next/server'

export const GET = async (request: Request, { params }: { params: { name: string } }) => {
	const isItem = await findItem(params.name)
	return NextResponse.json(isItem)
}
