import { NextResponse } from 'next/server'
import { getPath } from '@/lib/utils'

export const GET = async (request: Request, { params }: { params: { item: string } }) => {
	const path = await getPath(params.item)
	const res = { data: path }
	return NextResponse.json(res)
}
