import { Payment, columns } from './columns'
import { DataTable } from './data-table'

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: '728ed52f',
			name: 'mike',
			'Consensus Line': 'mike',
			Diff: 100,
			Points: 100,
			avgSQPoints: 100,
			MatchDifficulty: 100,
			'Projected Defensive Matchup': 'mike',
			'Matchup Insight': 'loreum ipsum dolar sit amet  ',
		},
		{
			id: '728ed52f',
			name: 'mike',
			'Consensus Line': 'mike',
			Diff: 100,
			Points: 100,
			avgSQPoints: 100,
			MatchDifficulty: 100,
			'Projected Defensive Matchup': 'mike',
			'Matchup Insight': 'loreum ipsum dolar sit amet  ',
		},
		{
			id: '728ed52f',
			name: 'mike',
			'Consensus Line': 'mike',
			Diff: 100,
			Points: 100,
			avgSQPoints: 100,
			MatchDifficulty: 100,
			'Projected Defensive Matchup': 'mike',
			'Matchup Insight': 'loreum ipsum dolar sit amet  ',
		},
		{
			id: '728ed52f',
			name: 'mike',
			'Consensus Line': 'mike',
			Diff: 100,
			Points: 100,
			avgSQPoints: 100,
			MatchDifficulty: 100,
			'Projected Defensive Matchup': 'mike',
			'Matchup Insight': 'loreum ipsum dolar sit amet  ',
		},
		// ...
	]
}

export default async function DemoPage() {
	const data = await getData()

	return (
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={data} />
		</div>
	)
}
