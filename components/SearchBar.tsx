'use client'
import { useState } from 'react'
import { Input } from './ui/input'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { PopoverAnchor } from '@radix-ui/react-popover'
import { useRouter } from 'next/navigation'
import { itemKeys } from '@/data/items'

export const SearchBar = ({ item }: { item?: string }) => {
	const [query, setQuery] = useState(item ?? '')
	const [showItems, setShowItems] = useState(false)
	const router = useRouter()

	function onSearch(query: string) {
		router.push(`/${encodeURIComponent(query)}`)
	}

	return (
		<>
			<div className="flex gap-3 mt-6">
				<Popover open={showItems}>
					<PopoverAnchor asChild>
						<div className="w-full bg-white">
							<Input
								value={query}
								onChange={event => {
									setQuery(event.target.value)
									setShowItems(event.target.value !== '')
									setTimeout(() => event.target.focus(), 0)
								}}
								onFocus={event => {
									setShowItems(true)
									setTimeout(() => event.target.focus(), 0)
								}}
								onKeyDown={event => {
									if (event.key === 'Escape') {
										setShowItems(false)
									}
								}}
								placeholder="Search for an item"
								className="w-full"
							/>
						</div>
					</PopoverAnchor>
					<PopoverContent>
						{itemKeys
							.filter(item => item.toString().toLowerCase().includes(query.toLowerCase()))
							.slice(0, 10)
							.map(item => (
								<div
									key={item}
									className="p-2  cursor-pointer"
									onClick={() => {
										setQuery(item)
										setShowItems(false)
										onSearch(item)
									}}
								>
									{item}
								</div>
							))}

						{itemKeys.length === 0 && <div className="p-2 text-center">No items found</div>}
					</PopoverContent>
				</Popover>
			</div>
		</>
	)
}
