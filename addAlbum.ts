import { input } from "@inquirer/prompts"
import fs from "fs/promises"
import sharp from "sharp"
import agent from "superagent"
import albums from "./src/albums"
import deburr from "lodash.deburr"

function toKebabCase(str: string): string {
	return deburr(str).toLowerCase().trim().replace(/ /g, "-").replace(/[.]/g, "").replace(/\//g, "")
}

const today = new Date()
const todayDateString = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toJSON().split("T")[0]
const urlRegex = /^(https?):\/\/[^\s/$.?#].[^\s]*$/i
const toTitleCase = (s: string) =>
	s
		.replace(/-/g, " ")
		.split(" ")
		.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(" ")

const rym = await input({
	message: "Enter the RYM url:",
	validate: v => urlRegex.test(v),
	required: true,
})

const urlChunks = rym.split("/")

const defaultArtist = toTitleCase(urlChunks[urlChunks.length - 3])
const defaultAlbum = toTitleCase(urlChunks[urlChunks.length - 2])

const artist = await input({
	message: "Enter the artist:",
	default: defaultArtist,
	required: true,
})

const album = await input({
	message: "Enter the album:",
	default: defaultAlbum,
	required: true,
})

const imageUrl = await input({
	message: "Enter an image url:",
	validate: v => urlRegex.test(v),
	required: true,
})

const imageBuffer = await agent.get(imageUrl).buffer(true).parse(agent.parse.image).then(r=> r.body)

const filename = `${toKebabCase(album)}_${toKebabCase(artist)}.jpg`
await sharp(imageBuffer).resize(500,500).jpeg({ quality: 80 }).toFile(`./public/${filename}`)

const newAlbumData = albums
newAlbumData[todayDateString] = [{image: filename, rym, artist, album}]

await fs.writeFile('./src/albums/index.json', JSON.stringify(newAlbumData, null, 4))
