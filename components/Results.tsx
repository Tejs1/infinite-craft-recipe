import Path from '@/components/Path'

import React from 'react'

import { ElementGraph } from '@/lib/actions'
import { findItem } from '@/lib/actions'
import { getPath } from '@/lib/actions'

async function Results({ item }: { item: string }) {
	// push({ result: 'wd', first: 'wind', second: 'earth', emoji: '🌸' })
	if (item === 'water' || item === 'fire' || item === 'earth' || item === 'wind') {
		return (
			<div className="flex justify-center">
				<div className="text-center max-w-xl">
					<h2 className="font-bold text-lg">{item.toUpperCase()}</h2>

					<div className="text-zinc-500 font-medium text-sm mt-3">{item + ' is A Basic Element'}</div>
				</div>
			</div>
		)
	}
	const isKey = await findItem(item)
	console.log(isKey)

	if (!isKey) {
		return (
			<div className="flex justify-center">
				<div className="text-center max-w-xl">
					<h2 className="font-bold text-lg">{'The Recipe of ' + item + ' is not available'}</h2>
				</div>
			</div>
		)
	}

	const path: ElementGraph | null = isKey ? await getPath(item) : null

	if (!path) {
		return (
			<div className="flex justify-center">
				<div className="text-center max-w-xl">
					<h2 className="font-bold text-lg">Error</h2>
				</div>
			</div>
		)
	}

	const stepsArray = Object.keys(path).map((key: string, index: number) => {
		return { result: key, first: path[key][0], second: path[key][1] }
	})

	return (
		<>
			{!path && (
				<div className="flex justify-center">
					<div className="text-center max-w-xl">
						<h2 className="font-bold text-lg">Item not found</h2>

						<div className="text-zinc-500 font-medium text-sm mt-3">
							We are constantly searching new recipes but couldn&apos;t find this item in our database yet. You might
							want to check again later to see if we have discovered it.
						</div>
					</div>
				</div>
			)}
			{path && <Path steps={stepsArray} />}
		</>
	)
}

export default Results
