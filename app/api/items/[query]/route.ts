import { NextResponse } from 'next/server'
import { getMatchingItemKeys } from '@/lib/actions'

export const GET = async (request: Request, { params }: { params: { query: string } }) => {
	const data = await getMatchingItemKeys(params.query)
	return NextResponse.json({ data })
}
