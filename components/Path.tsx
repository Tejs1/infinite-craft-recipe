import { ClientButton } from './ui/ClientButton'

function Path({
	steps,
}: {
	steps: {
		result: string
		first: string
		second: string
	}[]
}) {
	const first = steps[0].first
	const second = steps[0].second
	const result = steps[0].result
	if (first === undefined || second === undefined || result === undefined)
		return (
			<div className="flex justify-center mt-4">
				<div className="p-12 flex flex-col gap-6 justify-center border rounded-lg">
					<h2 className="text-2xl font-bold">No Results</h2>
				</div>
			</div>
		)
	return (
		<div className="flex justify-center mt-4">
			<div className="p-12 flex flex-col gap-6 justify-center border rounded-lg">
				<h2 className="text-2xl font-bold">You&apos;ll need {steps.length} steps to craft this item:</h2>

				<table className="w-full">
					<tbody>
						{steps.map(
							(
								step: {
									result: string
									first: string
									second: string
								},
								index: number,
							) => (
								<tr key={index}>
									<td>{step.first}</td>
									<td>+</td>
									<td>{step.second}</td>
									<td>=</td>
									<td>{step.result}</td>
								</tr>
							),
						)}
					</tbody>
				</table>
				<ClientButton steps={steps} />
			</div>
		</div>
	)
}

export default Path
