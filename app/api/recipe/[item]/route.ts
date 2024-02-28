import { NextResponse } from 'next/server'
import { getPath } from '@/lib/actions'

export const GET = async (request: Request, { params }: { params: { item: string } }) => {
	const path = await getPath(params.item)
	return NextResponse.json({ path })
}
