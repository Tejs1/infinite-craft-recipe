const { items } = require('./items')
const fs = require('fs')
const writeToFile = (fileName, data) => {
	const jsonData = JSON.stringify(data)
	fs.writeFile(fileName, jsonData, err => {
		console.log(err)
	})
}
//split txt file into smaller files
const getChunks = (file, lineCount) =>
	new Promise((resolve, reject) =>
		fs.readFile(file, 'utf8', (err, data) => {
			if (err) {
				return reject(err)
			}
			const lines = data.trim().split('\n')
			const chunks = []
			for (let i = 0; i < lines.length; i += lineCount) {
				chunks.push(lines.slice(i, i + lineCount))
			}
			return resolve(chunks)
		}),
	)

const splitFileAndWrite = () => {
	getChunks('itemKeys.txt', 1000).then(chunks => {
		chunks.forEach((chunk, i) => {
			writeToFile(`itemKeys-${i}.json`, chunk)
		})
	})
}

//get cookies from storage
const getCookies = () => {
	const cookies = document.cookie.split(';')
	const cookieObj = {}
	cookies.forEach(cookie => {
		const [key, value] = cookie.split('=')
		cookieObj[key.trim()] = value
	})
	return cookieObj
}

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
const ItemWithKeyStringsAndArrayOfLowercaseStrings = Object.keys(items).reduce((acc, key) => {
	const item = items[key]

	const lowercaseItem = item.map(i => i.toLowerCase())
	const keyString = key.toString().toLowerCase()
	acc[keyString] = lowercaseItem
	return acc
}, {})
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
