import * as React from 'react'

import { cn } from '@/lib/helpers'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'border transition ease-in-out duration-300 px-4 py-2 w-80 md:w-96 rounded-lg shadow-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:scale-105',
					className,
				)}
				ref={ref}
				{...props}
			/>
		)
	},
)
Input.displayName = 'Input'

export { Input }
