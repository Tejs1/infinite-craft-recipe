// import { items } from 'db.js'
// import fs from 'fs'

// /**
//  * @typedef {Object} Env
//  */

// // eslint-disable-next-line import/no-anonymous-default-export
// export default {
// 	/**
// 	 * @param {Request} request
// 	 * @param {Env} env
// 	 * @param {ExecutionContext} ctx
// 	 * @returns {Promise<Response>}
// 	 */

// 	async fetch(request, env, ctx) {
// 		try {
// 			if (!request || !request.url || !request.method) {
// 				console.log('request', request)
// 				throw new Error('Invalid request object')
// 			}

// 			if (request.method !== 'GET') {
// 				console.log('request', request.method)
// 				throw new Error('Only GET requests are supported')
// 			}

// 			const url = new URL(request.url)

// 			if (!url || !url.pathname) {
// 				throw new Error('Malformed URL')
// 			}
// 			let element = url.toString().split('=')[1]
// 			if (url.pathname !== '/api' && !element) {
// 				return new Response('Not Found', { status: 404 })
// 			}

// 			if (element) {
// 				const elementGraph = traceElement(element)
// 				if (elementGraph) {
// 					return new Response(JSON.stringify(elementGraph), {
// 						status: 200,
// 						headers: { 'Content-Type': 'application/json' },
// 					})
// 				}

// 				return new Response('Element not found', { status: 404 })
// 			}

// 			return new Response('Successful! request recipes using ?recipe={Name}', { status: 200 })
// 		} catch (error) {
// 			console.error('Error occurred:', error.message)
// 			return new Response('Internal Server Error', { status: 500 })
// 		}
// 	},
// }

// function traceElement(element, elementGraph = {}) {
// 	const BASE_ARRAY = ['Wind', 'Earth', 'Fire', 'Water']
// 	if (elementGraph[element]) return

// 	if (BASE_ARRAY.includes(element)) return

// 	let constituents = findCombinationsFromJS(element)
// 	if (!constituents) return null

// 	if (!constituents || constituents.length === 0) {
// 		elementGraph[element] = [element]
// 	}
// 	elementGraph[element] = constituents.flat()

// 	for (const [first, second] of constituents) {
// 		elementGraph[first] ? elementGraph[first] : traceElement(first, elementGraph)
// 		elementGraph[second] ? elementGraph[second] : traceElement(second, elementGraph)
// 	}
// 	return elementGraph
// }
// const findCombinationsFromJS = compound => {
// 	if (!items[compound]) {
// 		throw new Error(`No combinations found for compound: ${compound}`)
// 	}
// 	const result = items[compound]
// 	return [result]
// }

// con { items } from '@/data/items.js'
