'use client'
import { useState, useEffect } from 'react'
import { Input } from './ui/input'
import { Popover, PopoverContent } from './ui/popover'
import { PopoverAnchor } from '@radix-ui/react-popover'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useDebounce } from 'use-debounce'

export const SearchBar = ({ item }: { item?: string }) => {
	const [query, setQuery] = useState(item ?? '')
	const [lastQuery, setLastQuery] = useState<string>('')
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

	const [debouncedQuery] = useDebounce(query, 300)

	useEffect(() => {
		if (
			debouncedQuery &&
			!!debouncedQuery.trim() &&
			debouncedQuery !== lastQuery
		) {
			setIsLoading(true)
			setSuggestions([])
			setLastQuery(debouncedQuery.trim())
			fetch(`/api/items/${debouncedQuery.trim()}`)
				.then(res => res.json())
				.then(data => {
					setSuggestions(data.data)
					setIsLoading(false)
				})
				.catch(() => {
					setIsLoading(false)
				})
		}
	}, [debouncedQuery, lastQuery])

	// ...

	return (
		<div className="flex gap-3 mt-6">
			<Popover open={showItems}>
				<PopoverAnchor asChild>
					<div className="w-full bg-white">
						<Input
							type="search"
							aria-label="Search for an item"
							value={query}
							onChange={event => {
								setQuery(event.target.value)
								setTimeout(() => event.target.focus(), 0)
								setShowItems(event.target.value.trim() !== '')
							}}
							onFocus={event => {
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
						{suggestions.length === 0 && !isLoading && (
							<div
								className="w-full p-2 text-center inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2  ease-in-out duration-300
								hover:scale-105"
								onClick={() => setQuery('')}
							>
								No items found Clear Search
							</div>
						)}
					</PopoverContent>
				)}
			</Popover>
		</div>
	)
}
