import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="w-screen flex min-h-screen flex-col items-center justify-center m-0 p-0 h-screen">
			<section
				key="1"
				className="w-screen py-8 md:py-16 lg:py-20 xl:py-32 bg-black text-white m-0 p-0 min-h-screen flex items-center justify-center flex-col h-full"
			>
				<div className="container px-4 md:px-6  h-full">
					<div className="flex flex-col items-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm dark:bg-gray-900">
								Embraced by the gaming community
							</div>
							<h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
								Infinite Craft Solver
							</h1>
							<p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
								Get the fastest path to craft any item in Infinite Craft
							</p>
						</div>
						<div className="space-x-4">
							<Link
								className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
								href="#"
							>
								Search Now
							</Link>
							<Link
								className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
								href="#"
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
				<div className="container px-4 md:px-6 mt-4  h-full">
					<form className="flex items-center justify-center">
						<input
							className="w-full max-w-md px-4 py-2 rounded-md border border-gray-200 border-gray-300 focus:outline-none focus:ring focus:ring-gray-400 dark:border-gray-700 dark:focus:ring-gray-600 dark:border-gray-800"
							placeholder="Search..."
							type="text"
						/>
						<button
							className="ml-2 px-4 py-2 bg-gray-900 text-white rounded-md shadow hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							type="submit"
						>
							Go
						</button>
					</form>
				</div>
			</section>
		</main>
	)
}
