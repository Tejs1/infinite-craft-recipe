'use client'
import React from 'react'
import { Button } from './button'
import { Copy } from 'lucide-react'
export function ClientButton({
	steps,
}: {
	steps: { result: string; first: string; second: string }[]
}) {
	return (
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
			aria-label="Copy to clipboard"
		>
			<Copy size={14} />
			Copy to clipboard
		</Button>
	)
}
