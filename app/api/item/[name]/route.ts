import { NextResponse } from 'next/server'
import { findCombinationsFromDB } from '@/lib/utils'
export const GET = async (request: Request, { params }: { params: { name: string } }) => {
	const constituents = await findCombinationsFromDB(params.name)
	return NextResponse.json({ constituents })
}
