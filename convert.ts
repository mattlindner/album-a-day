import fs from "fs/promises"
import sharp from "sharp"
import agent from "superagent"
import albums, {Album} from "./src/albums"
import deburr from "lodash.deburr"

function toKebabCase(str: string): string {
	return deburr(str).toLowerCase().trim().replace(/ /g, "-").replace(/[.]/g, "")
}

const newObj = await Object.keys(albums).reduce(async (accP, date) => {
	const acc = await accP
	acc[date] = []

	for (const a of albums[date]) {
		const imageUrl = a.image
		const imageBuffer = await agent.get(imageUrl).buffer(true).parse(agent.parse.image).then(r=> ({ok: r.body})).catch(e => ({ok: false}))
		const fileName = `${toKebabCase(a.album)}_${toKebabCase(a.artist)}`

		if (imageBuffer.ok !== false) {
			const filePath = `./src/albums/images/${fileName}.jpg`
			// await sharp(imageBuffer.ok).resize(500,500).jpeg({ quality: 80 }).toFile(filePath)
			acc[date].push({
				...a,
				image: `lol - ./images/${fileName}.jpg`,
			})
		} else {
			acc[date].push({
				...a,
				image: `ERROR`,
			})
			// await fs.writeFile(`./src/albums/${fileName}.ERROR`, "")
		}
	}

	console.log("acc", acc)
	return acc
}, {} as Promise<Record<string, Album[]>>)

fs.writeFile("test.json", JSON.stringify(newObj, null, 4))
