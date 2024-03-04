import React, { Suspense } from 'react'
import { ElementGraph } from '@/types'
// import { getRecipe } from '@/lib/utils'

import Path from '@/components/Path'
async function Results({ item }: { item: string }) {
	const decodedItem = decodeURIComponent(item)

	const recipe = await fetch(`https://craft.discordtest.workers.dev/?recipe=${decodedItem}`).then(res => {
		if (!res.ok) {
			console.error('Network response was not ok')
		} else {
			return res.json()
		}
		return null
	})

	const path: ElementGraph | null = recipe

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

	if (!path || Object.keys(path).length === 0 || path[Object.keys(path)[0]].length === 0) {
		return (
			<div className="flex justify-center">
				<div className="text-center max-w-xl">
					<h2 className="font-bold text-lg">{'The Recipe of ' + item + ' is not available'}</h2>
				</div>
			</div>
		)
	}

	const stepsArray = Object.keys(path).map((key: string, index: number) => {
		return { result: key, first: path[key][0], second: path[key][1] }
	})

	return (
		<Suspense fallback={<div>Loading...</div>}>
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
		</Suspense>
	)
}

export default Results
