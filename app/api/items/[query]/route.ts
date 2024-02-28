import { NextResponse } from 'next/server'
import { findKeys } from '@/lib/utils'

export const GET = async (request: Request, { params }: { params: { query: string } }) => {
	const data = await findKeys(params.query)
	return NextResponse.json({ data })
}
