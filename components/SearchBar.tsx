// components/SearchBar.js

export const SearchBar = () => {
	return (
		<div className="mt-8">
			<input
				type="text"
				placeholder="Search items..."
				className="transition ease-in-out duration-300 px-4 py-2 w-80 md:w-96 rounded-lg shadow-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:scale-105"
			/>
		</div>
	)
}
