export const BASE_URL =
	process.env.NEXT_PUBLIC_MY_ENV === 'production'
		? 'https://infinitecraftrecipe.vercel.app'
		: process.env.NEXT_PUBLIC_MY_ENV === 'preview'
		? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
		: 'http://localhost:3000'
