// const { items, itemKeys } = require('./items')

// const fs = require('fs')
// const writeToFile = (fileName, data) => {
// 	const jsonData = JSON.stringify(data)
// 	fs.writeFile(fileName, jsonData, err => {
// 		console.log(err)
// 	})
// }

// // writeToFile('itemKeys.js', itemKeys)
// //split txt file into smaller files
// const getChunks = (file, lineCount) =>
// 	new Promise((resolve, reject) =>
// 		fs.readFile(file, 'utf8', (err, data) => {
// 			if (err) {
// 				return reject(err)
// 			}
// 			const lines = data.trim().split('\n')
// 			const chunks = []
// 			for (let i = 0; i < lines.length; i += lineCount) {
// 				chunks.push(lines.slice(i, i + lineCount))
// 			}
// 			return resolve(chunks)
// 		}),
// 	)

// const splitFileAndWrite = () => {
// 	getChunks('itemKeys.txt', 1000).then(chunks => {
// 		chunks.forEach((chunk, i) => {
// 			writeToFile(`itemKeys-${i}.json`, chunk)
// 		})
// 	})
// }

// //get cookies from storage
// const getCookies = () => {
// 	const cookies = document.cookie.split(';')
// 	const cookieObj = {}
// 	cookies.forEach(cookie => {
// 		const [key, value] = cookie.split('=')
// 		cookieObj[key.trim()] = value
// 	})
// 	return cookieObj
// }

//combinations
// first,second,result,emoji
// Water,Water,Lake,'🌊'
// Fire,Water,Steam,'💨'
// Water,Wind,Wave,'🌊'
// Earth,Water,Plant,'🌱'
// Lake,Water,Ocean,'🌊'
// Steam,Water,Cloud,'☁️'
// Water,Wave,Tsunami,'🌊'
// Plant,Water,Swamp,'🐊'
// Ocean,Water,Fish,'🐟'
// Cloud,Water,Rain,'🌧️'
// Swamp,Water,Marsh,'🌿'
// Fish,Water,Fishbowl,'🐠'
// Rain,Water,Rainbow,'🌈'
// Fire,Fire,Volcano,'🌋'
// Fire,Wind,Smoke,'💨'
// Earth,Fire,Lava,'🌋'
// Fire,Steam,Engine,'🚗'
// Cloud,Fire,Lightning,'⚡️'
// Fire,Swamp,Dragon,'🐉'
// Fire,Fish,Sushi,'🍣'
// Fire,Fishbowl,Goldfish,'🐠'
// Fire,Lightning,Sun,'☀️'
// Fire,Sushi,Wasabi,'🌶️'
// Fire,Goldfish,Boiled Fish,'🐟'
// Fire,Sun,Solar,'☀️'
// Fire,Wasabi,Fire Breath,'🔥'
// Wind,Wind,Tornado,'🌪️'
// Earth,Wind,Dust,'🌫️'
// Lake,Wind,Storm,'⛈️'
// Plant,Wind,Dandelion,'🌼'
// Tsunami,Wind,Hurricane,'🌀'

// convert items keys which are number to string
// const ItemWithKeyStringsAndArrayOfLowercaseStrings = Object.keys(items).reduce((acc, key) => {
// 	const item = items[key]

// 	const lowercaseItem = item.map(i => i.toLowerCase())
// 	const keyString = key.toString().toLowerCase()
// 	acc[keyString] = lowercaseItem
// 	return acc
// }, {})
// enum ELEMENTS {
// 	Wind = 'Wind',
// 	Earth = 'Earth',
// 	Fire = 'Fire',
// 	Water = 'Water',
// }
// type Element = keyof typeof ELEMENTS
// const ItemKeys = Object.keys(ItemWithKeyStringsAndArrayOfLowercaseStrings)
// const enumObject = ItemKeys.reduce((acc, key) => {
// 	acc[key] = key
// 	return acc
// }, {})
// writeToFile('itemKeys.txt', enumObject)

// 11 requests
// 525 kB transferred
// 1.6 MB resources
// Finish: 498 ms
// DOMContentLoaded: 344 ms
// Load: 460 ms

//2041
// 10 requests
// 501 kB transferred
// 1.6 MB resources
// Finish: 108 ms
// DOMContentLoaded: 51 ms
// Load: 173 ms

// pebbel
// 10 requests
// 499 kB transferred
// 1.5 MB resources
// Finish: 99 ms
// DOMContentLoaded: 42 ms
// Load: 156 ms

// everclear
// 10 requests
// 4.5 kB transferred
// 1.6 MB resources
// Finish: 45 ms
// DOMContentLoaded: 41 ms
// Load: 150 ms

// 10 requests
// 7.6 kB transferred
// 1.6 MB resources
// Finish: 48 ms
// DOMContentLoaded: 44 ms
// Load: 107 ms

// const fetchData = async url => {
// 	const response = await fetch(url, {
// 		headers: {
// 			'User-Agent': 'Solver',
// 			Referer: 'https://neal.fun/infinite-craft/',
// 		},
// 	})
// 	return response.json()
// }

// const a = 'fire'
// const b = 'goat'
// fetchData(`https://neal.fun/api/infinite-craft/pair?first=${b}&second=${a}`).then(data => console.log(data))
