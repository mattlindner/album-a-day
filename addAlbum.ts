import { input } from "@inquirer/prompts"
import fs from "fs/promises"
import sharp from "sharp"
import agent from "superagent"
import albums from "./src/albums"

function toKebabCase(str: string): string {
	return str.toLowerCase().replace(/ /g, "-")
}

// Read the existing albums data

// MATT TODO :- this will sometimes make it "tommorrow"
const today = new Date().toISOString().split("T")[0]
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

const filePath = `./src/albums/images/${toKebabCase(album)}_${toKebabCase(artist)}.jpg`
await sharp(imageBuffer).resize(200,200).jpeg({ quality: 80 }).toFile(filePath)
