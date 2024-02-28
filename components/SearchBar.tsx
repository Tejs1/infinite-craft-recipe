'use client'
import { useState, useEffect } from 'react'
import { Input } from './ui/input'
import { Popover, PopoverContent } from './ui/popover'
import { PopoverAnchor } from '@radix-ui/react-popover'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getMatchingItemKeys } from '@/lib/utils'
import { debounce } from 'lodash'

export const SearchBar = ({ item }: { item?: string }) => {
	console.log('hello2', process.env.VERCEL_URL)
	const [query, setQuery] = useState(item ?? '')
	const [suggestions, setSuggestions] = useState<string[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [showItems, setShowItems] = useState(false)
	const router = useRouter()
	const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			router.push(`/${query}`)
			setShowItems(false)
		}
		if (event.key === 'Escape') {
			setShowItems(false)
		}
	}
	const debouncedGetMatchingItemKeys = debounce(
		(query: string) => {
			getMatchingItemKeys(query).then(data => {
				setSuggestions(data.res.data)
				setIsLoading(false)
			})
		},
		300,
		{ leading: false, trailing: true },
	)
	useEffect(() => {
		if (query !== '') {
			setIsLoading(true)
			debouncedGetMatchingItemKeys(query)
		}
		return () => {
			debouncedGetMatchingItemKeys.cancel()
		}
	}, [query])

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
								onKeyDown={event => handleSearch(event)}
								placeholder="Search for an item"
								className="w-full"
							/>
						</div>
					</PopoverAnchor>
					{query && (
						<PopoverContent>
							{suggestions.map(item => (
								<Link href={`/${item}`} key={item}>
									<div
										key={item}
										className="py-2 px-2	 cursor-pointer bg-white hover:bg-gray-100"
										onClick={() => {
											setShowItems(false)
											setQuery(item)
										}}
									>
										{item}
									</div>
								</Link>
							))}
							{isLoading && <div className="p-2 text-center">Loading...</div>}
							{suggestions.length === 0 && !isLoading && <div className="p-2 text-center">No items found</div>}
						</PopoverContent>
					)}
				</Popover>
			</div>
		</>
	)
}
