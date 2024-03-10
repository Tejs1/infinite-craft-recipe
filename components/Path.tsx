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
			<article className="p-12 flex flex-col gap-6 justify-center border rounded-lg  mt-4">
				<h2 className="text-2xl font-bold">No Results</h2>
			</article>
		)
	return (
		<article className="flex justify-center mt-4 p-12  flex-col gap-6  border rounded-lg">
			<h2 className="text-2xl font-bold" id="crafting-steps-heading">
				You&apos;ll need {steps.length} steps to craft {steps[0].result}
			</h2>

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
		</article>
	)
}

export default Path
