'use client'
import { useState, useEffect } from 'react'
import { Input } from './ui/input'
import { Popover, PopoverContent } from './ui/popover'
import { PopoverAnchor } from '@radix-ui/react-popover'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { debounce } from 'lodash'
import { SITE_URL } from '@/lib/utils'

export const SearchBar = ({ item }: { item?: string }) => {
	console.log('hello2', process.env.VERCEL_URL)
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
	const debouncedGetMatchingItemKeys = debounce(
		(query: string) => {
			if (query && !!query.trim() && query !== lastQuery) {
				setLastQuery(query)
				fetch(`${SITE_URL}/api/items/${query}`)
					.then(res => res.json())
					.then(data => {
						setSuggestions(data.data)
						setIsLoading(false)
					})
			}
			setIsLoading(false)
			console.log('ran', !!query.trim(), !!query)
		},

		300,
		{ leading: false, trailing: true },
	)
	useEffect(() => {
		if (!!query && !!query.trim()) {
			setIsLoading(true)
			debouncedGetMatchingItemKeys(query.trim())
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
									setTimeout(() => event.target.focus(), 0)
									query.trim() !== '' ? setShowItems(event.target.value !== '') : null
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
							{suggestions.length === 0 && !isLoading && <div className="p-2 text-center">No items found</div>}
						</PopoverContent>
					)}
				</Popover>
			</div>
			<div>
				<h3>{`${SITE_URL}/api/items/${query}`}</h3>
				<h3>{`process.env.NEXT_PUBLIC_SITE_URL ` + process.env.NEXT_PUBLIC_SITE_URL}</h3>
				<h3>{`process.env.NEXT_PUBLIC_VERCEL_URL ` + process.env.NEXT_PUBLIC_VERCEL_URL}</h3>
				<h3>{`process.env.VERCEL_URL ` + process.env.VERCEL_URL}</h3>
			</div>
		</>
	)
}
