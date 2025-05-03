export type Album = {
	image: string
	rym: string
	artist: string
	album: string
}

export type AlbumData = {
	[date: string]: Album[]
}

const value: AlbumData
export default value
