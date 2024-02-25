'use client'
import React from 'react'
import { Button } from './ui/button'
import { Copy } from 'lucide-react'
import { ElementGraph } from '@/lib/utils'

function Item({ name }: { name: string }) {
	return (
		<div>
			<div className="p-3 rounded-lg border font-medium">{name}</div>
		</div>
	)
}

function Path({
	steps,
}: {
	steps: {
		result: string
		first: string
		second: string
	}[]
}) {
	return (
		<div className="flex justify-center">
			<div className="p-12 flex flex-col gap-6 justify-center border rounded-lg">
				<h2 className="text-2xl font-bold">You&apos;ll need {steps.length} steps to craft this item:</h2>
				{/* <div className="grid grid-cols-3 gap-3">
					{steps.map(
						(
							step: {
								result: string
								first: string
								second: string
							},
							index: number,
						) => (
							<React.Fragment key={index}>
								<div className="flex justify-end gap-3 items-center">
									<Item name={step.first} />
									<div className="text-3xl">+</div>
								</div>
								<div className="flex justify-between gap-3 items-center">
									<Item name={step.second} />
									<div className="text-3xl">=</div>
								</div>
								<div className="flex justify-between items-center">
									<Item name={step.result} />
								</div>
							</React.Fragment>
						),
					)}
				</div> */}
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

				<Button
					onClick={() => {
						navigator.clipboard.writeText(
							steps
								.map(
									(steps: { result: string; first: string; second: string }) =>
										`${steps.first} + ${steps.second} = ${steps.result}`,
								)
								.join('\n'),
						)
					}}
					className="flex items-center gap-2"
				>
					<Copy size={14} />
					Copy to clipboard
				</Button>
			</div>
		</div>
	)
}

export default Path
