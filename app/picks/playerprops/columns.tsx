'use client'

import { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
	id: string
	name: string
	'Consensus Line': string
	Diff: number
	Points: number
	avgSQPoints: number
	MatchDifficulty: number
	'Projected Defensive Matchup': string
	'Matchup Insight': string
}

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: 'name',
		header: 'name',
	},
	{
		accessorKey: 'Consensus Line',
		header: 'Consensus Line',
	},
	{
		accessorKey: 'Diff',
		header: 'Diff',
	},
	{
		accessorKey: 'Points',
		header: 'Points',
	},
	{
		accessorKey: 'avgSQPoints',
		header: 'avgSQPoints',
	},
	{
		accessorKey: 'MatchDifficulty',
		header: 'MatchDifficulty',
	},
	{
		accessorKey: 'Projected Defensive Matchup',
		header: 'Projected Defensive Matchup',
	},
	{
		accessorKey: 'Matchup Insight',
		header: 'Matchup Insight',
	},
]
