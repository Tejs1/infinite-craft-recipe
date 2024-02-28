import { findCombinationsFromDB } from '@/lib/actions'
import { NextResponse } from 'next/server'

export const GET = async (request: Request, { params }: { params: { name: string } }) => {
	const constituents = await findCombinationsFromDB(params.name)
	return NextResponse.json(constituents)
}
