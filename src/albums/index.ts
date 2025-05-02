export type Album = {
	image: URL
	rym: string
	artist: string
	album: string
}

const albums: Record<string, Album[]> = {
	"2025-01-01": [
		{
			image: new URL("./images/sobrevivendo-no-inferno_racionais-mc's.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/racionais-mcs/sobrevivendo-no-inferno/",
			artist: "Racionais MC's",
			album: "Sobrevivendo no inferno",
		},
	],
	"2025-01-02": [
		{
			image: new URL("./images/hbo-(haitian-body-odor)_mach-hommy.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/mach-hommy/hbo-haitian-body-odor/",
			artist: "Mach-Hommy",
			album: "HBO (Haitian Body Odor)",
		}, {

			image: new URL("./images/beloved-paradise-jazz_mckinley-dixon.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/mckinley-dixon/beloved-paradise-jazz/",
			artist: "McKinley Dixon",
			album: "Beloved! Paradise! Jazz!? ",
		},
	],
	"2025-01-03": [
		{
			image: new URL("./images/orpheus-vs-the-sirens_hermit-and-the-recluse.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/hermit-and-the-recluse/orpheus-vs-the-sirens/",
			artist: "Hermit and the Recluse",
			album: "Orpheus vs. the Sirens",
		},
		{
			image: new URL("./images/ghost-tropic_songs:-ohia.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/songs-ohia/ghost-tropic/",
			artist: "Songs: Ohia",
			album: "Ghost Tropic",
		},
	],
	"2025-01-04": [
		{
			image: new URL("./images/realms-of-chaos_bolt-thrower.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/bolt-thrower/realm-of-chaos/",
			artist: "Bolt Thrower",
			album: "Realms of Chaos",
		},
	],
	"2025-01-05": [
		{
			image: new URL("./images/translating-the-name_saosin.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/saosin/translating-the-name/",
			artist: "Saosin",
			album: "Translating the Name",
		},
	],
	"2025-01-06": [
		{
			image: new URL("./images/i-can-tell-you-about-pain_converge.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/converge/i-can-tell-you-about-pain/",
			artist: "Converge",
			album: "I Can Tell You About Pain",
		},
	],
	"2025-01-07": [
		{
			image: new URL("./images/ultra-ego_feed-me-jack.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/feed-me-jack/ultra-ego/",
			artist: "Feed Me Jack",
			album: "Ultra Ego",
		},
	],
	"2025-01-08": [
		{
			image: new URL("./images/despise-the-sun_suffocation.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/suffocation/despise-the-sun/",
			artist: "Suffocation",
			album: "Despise the Sun",
		},
	],
	"2025-01-09": [
		{
			image: new URL("./images/alturas-de-machu-pichu_los-jaivas.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/los-jaivas/alturas-de-machu-pichu/",
			artist: "Los Jaivas",
			album: "Alturas de Machu Pichu ",
		},
		{
			image: new URL("./images/pierced-from-within_suffocation.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/suffocation/pierced-from-within/",
			artist: "Suffocation",
			album: "Pierced From Within",
		},
	],
	"2025-01-10": [
		{
			image: new URL("./images/nervous-breakdown_black-flag.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/black-flag/nervous-breakdown/",
			artist: "Black Flag",
			album: "Nervous Breakdown ",
		},
	],
	"2025-01-11": [
		{
			image: new URL("./images/154_wire.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/wire/154/",
			artist: "Wire",
			album: "154",
		},
	],
	"2025-01-12": [
		{
			image: new URL("./images/resurrection_sadistic-intent.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/sadistic-intent/resurrection/",
			artist: "Sadistic Intent",
			album: "Resurrection",
		},
	],
	"2025-01-13": [
		{
			image: new URL("./images/roxy-music_roxy-music.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/roxy-music/roxy-music/",
			artist: "Roxy Music",
			album: "Roxy Music",
		},
	],
	"2025-01-14": [
		{
			image: new URL("./images/embrace_embrace.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/embrace/embrace-1/",
			artist: "Embrace",
			album: "Embrace",
		},
	],
	"2025-01-15": [
		{
			image: new URL("./images/gateways-to-annihilation_morbid-angel.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/morbid-angel/gateways-to-annihilation/",
			artist: "Morbid Angel",
			album: "Gateways to Annihilation",
		},
	],
	"2025-01-16": [
		{
			image: new URL("./images/formulas-fatal-to-the-flesh_morbid-angel.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/morbid-angel/formulas-fatal-to-the-flesh/",
			artist: "Morbid Angel",
			album: "Formulas Fatal to the Flesh",
		},
	],
	"2025-01-17": [
		{
			image: new URL("./images/war-master_bolt-thrower.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/bolt-thrower/war-master/",
			artist: "Bolt Thrower",
			album: "War Master",
		},
	],
	"2025-01-18": [
		{
			image: new URL("./images/american-nervoso_botch.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/botch/american-nervoso/",
			artist: "Botch",
			album: "American Nervoso",
		},
	],
	"2025-01-19": [
		{
			image: new URL("./images/an-anthology-of-dead-ends_botch.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/botch/an-anthology-of-dead-ends/",
			artist: "Botch",
			album: "An Anthology of Dead Ends",
		},
	],
	"2025-01-20": [
		{
			image: new URL("./images/youth-of-america_wipers.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/wipers/youth-of-america/",
			artist: "Wipers",
			album: "Youth of America",
		},
	],
	"2025-01-21": [
		{
			image: new URL("./images/mass-vi_amenra.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/amenra/mass-vi/",
			artist: "Amenra",
			album: "Mass VI",
		},
	],
	"2025-01-22": [
		{
			image: new URL("./images/orchid_orchid.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/orchid/orchid/",
			artist: "Orchid",
			album: "Orchid",
		},
	],
	"2025-01-23": [
		{
			image: new URL("./images/horrified_repulsion.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/repulsion/horrified/",
			artist: "Repulsion",
			album: "Horrified",
		},
	],
	"2025-01-24": [
		{
			image: new URL("./images/floral-green_title-fight.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/title-fight/floral-green/",
			artist: "Title Fight",
			album: "Floral Green",
		},
	],
	"2025-01-25": [
		{
			image: new URL("./images/shed_title-fight.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/title-fight/shed/",
			artist: "Title Fight",
			album: "Shed",
		},
	],
	"2025-01-26": [
		{
			image: new URL("./images/buster_admiral-angry.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/admiral-angry/buster/",
			artist: "Admiral Angry",
			album: "Buster",
		},
	],
	"2025-01-27": [
		{
			image: new URL("./images/three-cheers-for-sweet-revenge_my-chemical-romance.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/my-chemical-romance/three-cheers-for-sweet-revenge/",
			artist: "My Chemical Romance",
			album: "Three Cheers for Sweet Revenge",
		},
	],
	"2025-01-28": [
		{
			image: new URL("./images/the-black-parade_my-chemical-romance.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/my-chemical-romance/the-black-parade/",
			artist: "My Chemical Romance",
			album: "The Black Parade",
		},
	],
	"2025-01-29": [
		{
			image: new URL("./images/songs-to-scream-at-the-sun_have-heart.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/have-heart/songs-to-scream-at-the-sun/",
			artist: "Have Heart",
			album: "Songs to Scream at the Sun",
		},
	],
	"2025-01-30": [
		{
			image: new URL("./images/didn't-it-rain_songs:-ohia.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/songs-ohia/didnt-it-rain/",
			artist: "Songs: Ohia",
			album: "Didn't It Rain",
		},
	],
	"2025-01-31": [
		{
			image: new URL("./images/dots-and-loops_stereolab.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/stereolab/dots-and-loops/",
			artist: "Stereolab",
			album: "Dots and Loops",
		},
	],
	"2025-02-01": [
		{
			image: new URL("./images/chairs-missing_wire.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/wire/chairs-missing/",
			artist: "Wire",
			album: "Chairs Missing",
		},
	],
	"2025-02-02": [
		{
			image: new URL("./images/knocknarea_maruja.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/maruja/knocknarea/",
			artist: "Maruja",
			album: "Knocknarea",
		},
	],
	"2025-02-03": [
		{
			image: new URL("./images/connla's-well_maruja.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/maruja/connlas-well/",
			artist: "Maruja",
			album: "Connla's Well",
		},
	],
	"2025-02-04": [
		{
			image: new URL("./images/bocanada_gustavo-cerati.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/gustavo-cerati/bocanada/",
			artist: "Gustavo Cerati",
			album: "Bocanada",
		},
	],
	"2025-02-05": [
		{
			image: new URL("./images/the-velvet-rope_janet-jackson.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/janet/the-velvet-rope/",
			artist: "Janet Jackson",
			album: "The Velvet Rope",
		},
	],
	"2025-02-06": [
		{
			image: new URL("./images/rain-upon-the-impure_the-ruins-of-beverast.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/the-ruins-of-beverast/rain-upon-the-impure/",
			artist: "The Ruins of Beverast",
			album: "Rain Upon the Impure",
		},
	],
	"2025-02-07": [
		{
			image: new URL("./images/blue-train_john-coltrane.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/john-coltrane/blue-train/",
			artist: "John Coltrane",
			album: "Blue Train",
		},
	],
	"2025-02-08": [
		{
			image: new URL("./images/brat_charlie-xcx.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/charli-xcx/brat/",
			artist: "Charlie XCX",
			album: "Brat",
		},
	],
	"2025-02-09": [
		{
			image: new URL("./images/more-gunfighter-ballads-and-trail-songs_marty-robbins.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/marty-robbins/more-gunfighter-ballads-and-trail-songs/",
			artist: "Marty Robbins",
			album: "More Gunfighter Ballads and Trail Songs",
		},
	],
	"2025-02-10": [
		{
			image: new URL("./images/the-rise-and-fall-of-a-midwest-princess_chappell-roan.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/chappell-roan/the-rise-and-fall-of-a-midwest-princess/",
			artist: "Chappell Roan",
			album: "The Rise and Fall of a Midwest Princess ",
		},
	],
	"2025-02-11": [
		{
			image: new URL("./images/attempted-martyr_prostitute.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/prostitute/attempted-martyr/",
			artist: "Prostitute",
			album: "Attempted Martyr",
		},
	],
	"2025-02-12": [
		{
			image: new URL("./images/giving-birth-to-thunder_indian-summer.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/comp/indian-summer/giving-birth-to-thunder/",
			artist: "Indian Summer",
			album: "Giving Birth to Thunder",
		},
	],
	"2025-02-13": [
		{
			image: new URL("./images/hejira_joni-mitchell.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/joni-mitchell/hejira/",
			artist: "Joni Mitchell",
			album: "Hejira",
		},
	],
	"2025-02-14": [
		{
			image: new URL("./images/dust-bowl-ballads_woody-guthrie.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/comp/woody-guthrie/dust-bowl-ballads/",
			artist: "Woody Guthrie",
			album: "Dust Bowl Ballads",
		},
	],
	"2025-02-15": [
		{
			image: new URL("./images/cave-world_viagra-boys.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/viagra-boys/cave-world/",
			artist: "Viagra Boys",
			album: "Cave World",
		},
	],
	"2025-02-16": [
		{
			image: new URL("./images/if-god-only-knew-the-rest-were-dead_disembodied.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/disembodied/if-god-only-knew-the-rest-were-dead/",
			artist: "Disembodied",
			album: "If God Only Knew the Rest Were Dead",
		},
	],
	"2025-02-17": [
		{
			image: new URL("./images/ladies-of-the-canyon_joni-mitchell.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/joni-mitchell/ladies-of-the-canyon/",
			artist: "Joni Mitchell",
			album: "Ladies of the Canyon",
		},
	],
	"2025-02-18": [
		{
			image: new URL("./images/7-songs-for-spiders_dax-riggs.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/dax-riggs/7-songs-for-spiders/",
			artist: "Dax Riggs",
			album: "7 Songs for Spiders",
		},
	],
	"2025-02-19": [
		{
			image: new URL("./images/to-be-continued_isaac-hayes.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/isaac-hayes/_to-be-continued/",
			artist: "Isaac Hayes",
			album: "...To Be Continued",
		},
	],
	"2025-02-20": [
		{
			image: new URL("./images/thunder-perfect-mind_current-93.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/current-93/thunder-perfect-mind/",
			artist: "Current 93",
			album: "Thunder Perfect Mind",
		},
	],
	"2025-02-21": [
		{
			image: new URL("./images/sleep-has-his-house_current-93.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/current-ninety-three/sleep-has-his-house/",
			artist: "Current 93",
			album: "Sleep Has His House",
		},
	],
	"2025-02-22": [
		{
			image: new URL("./images/all-the-pretty-little-horses_current-93.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/current-93/all-the-pretty-little-horses/",
			artist: "Current 93",
			album: "All the Pretty Little Horses",
		},
	],
	"2025-02-23": [
		{
			image: new URL("./images/gorilla-biscuits_gorilla-biscuits.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/gorilla-biscuits/gorilla-biscuits/",
			artist: "Gorilla Biscuits",
			album: "Gorilla Biscuits",
		},
	],
	"2025-02-24": [
		{
			image: new URL("./images/soft-black-stars_current-93.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/currentninetythree/soft-black-stars/",
			artist: "Current 93",
			album: "Soft Black Stars",
		},
	],
	"2025-02-25": [
		{
			image: new URL("./images/petitioning-the-empty-sky_converge.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/converge/petitioning-the-empty-sky/",
			artist: "Converge",
			album: "Petitioning the Empty Sky",
		},
	],
	"2025-02-26": [
		{
			image: "ERROR",
			rym: "https://rateyourmusic.com/release/album/converge/when-forever-comes-crashing-3/",
			artist: "Converge",
			album: "When Forever Comes Crashing ",
		},
	],
	"2025-02-27": [
		{
			image: new URL("./images/middle-spoon_cheekface.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/cheekface/middle-spoon/",
			artist: "Cheekface",
			album: "Middle Spoon",
		},
	],
	"2025-02-28": [
		{
			image: new URL("./images/i-want-to-be-there_sadness.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/sadness/i-want-to-be-there/",
			artist: "Sadness",
			album: "I Want to be There",
		},
	],
	"2025-03-01": [
		{
			image: new URL("./images/scott-4_scott-walker.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/scott-engel/scott-4/",
			artist: "Scott Walker",
			album: "Scott 4",
		},
	],
	"2025-03-02": [
		{
			image: new URL("./images/godflesh_godflesh.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/godflesh/godflesh/",
			artist: "Godflesh",
			album: "Godflesh",
		},
	],
	"2025-03-03": [
		{
			image: new URL("./images/streetcleaner_godflesh.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/godflesh/streetcleaner/",
			artist: "Godflesh",
			album: "Streetcleaner",
		},
	],
	"2025-03-04": [
		{
			image: new URL("./images/diabolical-conquest_incantation.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/incantation/diabolical-conquest/",
			artist: "Incantation",
			album: "Diabolical Conquest",
		},
	],
	"2025-03-05": [
		{
			image: new URL("./images/fires-within-fires_neurosis.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/neurosis/fires-within-fires/",
			artist: "Neurosis",
			album: "Fires Within Fires",
		},
	],
	"2025-03-06": [
		{
			image: "ERROR",
			rym: "https://rateyourmusic.com/release/album/armand-hammer/we-buy-diabetic-test-strips/",
			artist: "Armand Hammer",
			album: "We Buy Diabetic Test Strips ",
		},
	],
	"2025-03-07": [
		{
			image: new URL("./images/highway-61-revisited_bob-dylan.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/bob-dylan/highway-61-revisited/",
			artist: "Bob Dylan",
			album: "Highway 61 Revisited ",
		},
	],
	"2025-03-08": [
		{
			image: new URL("./images/clandestine_entombed.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/entombed/clandestine/",
			artist: "Entombed",
			album: "Clandestine",
		},
	],
	"2025-03-09": [
		{
			image: new URL("./images/no-wings-to-speak-of_hopesfall.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/hopesfall/no-wings-to-speak-of/",
			artist: "Hopesfall",
			album: "No Wings to Speak Of ",
		},
	],
	"2025-03-10": [
		{
			image: new URL("./images/wolverine-blues_entombed.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/entombed/wolverine-blues/",
			artist: "Entombed",
			album: "Wolverine Blues ",
		},
	],
	"2025-03-11": [
		{
			image: new URL("./images/salt-sermon_missouri-executive-order-44.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/missouri-executive-order-44/salt-sermon/",
			artist: "Missouri Executive Order 44",
			album: "Salt Sermon",
		},
	],
	"2025-03-12": [
		{
			image: new URL("./images/artaud_pescado-rabioso.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/pescado-rabioso/artaud/",
			artist: "Pescado Rabioso",
			album: "Artaud",
		},
	],
	"2025-03-13": [
		{
			image: new URL("./images/seventeen-dead-in-caldwell-county_missouri-executive-order-44.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/missouri-executive-order-44/seventeen-dead-in-caldwell-county/",
			artist: "Missouri Executive Order 44",
			album: "Seventeen Dead in Caldwell County",
		},
	],
	"2025-03-14": [
		{
			image: new URL("./images/broken-glass_crowbar.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/crowbar/broken-glass/",
			artist: "Crowbar",
			album: "Broken Glass",
		},
	],
	"2025-03-15": [
		{
			image: new URL("./images/ritual-music-for-the-true-clochard_urfaust.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/comp/urfaust/ritual-music-for-the-true-clochard/",
			artist: "Urfaust",
			album: "Ritual Music for the True Clochard",
		},
	],
	"2025-03-16": [
		{
			image: new URL("./images/odelay_beck.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/beck/odelay/",
			artist: "Beck",
			album: "Odelay",
		},
	],
	"2025-03-17": [
		{
			image: new URL("./images/agaetis-byrjun_sigur-ros.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/sigur-ros/agaetis-byrjun/",
			artist: "Sigur Rós",
			album: "Ágætis byrjun",
		},
	],
	"2025-03-18": [
		{
			image: new URL("./images/アダンの風-(windswept-adan)_青葉市子-(ichiko-aoba).jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/%E9%9D%92%E8%91%89%E5%B8%82%E5%AD%90/%E3%82%A2%E3%83%80%E3%83%B3%E3%81%AE%E9%A2%A8/",
			artist: "青葉市子 (Ichiko Aoba)",
			album: "アダンの風 (Windswept Adan)",
		},
	],
	"2025-03-19": [
		{
			image: new URL("./images/let-it-be_the-replacements.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/the-replacements/let-it-be/",
			artist: "The Replacements",
			album: "Let it Be",
		},
	],
	"2025-03-20": [
		{
			image: new URL("./images/still_nine-inch-nails.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/nine-inch-nails/still/",
			artist: "Nine Inch Nails",
			album: "Still",
		},
	],
	"2025-03-21": [
		{
			image: new URL("./images/a-celestial-ballad_dawn-of-orion.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/comp/dawn-of-orion/a-celestial-ballad/",
			artist: "Dawn of Orion",
			album: "A Celestial Ballad",
		},
	],
	"2025-03-22": [
		{
			image: new URL("./images/on-top-of-the-world_8ball-&-mjg.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/eightball-and-mjg/on-top-of-the-world/",
			artist: "8Ball & MJG",
			album: "On Top of the World",
		},
	],
	"2025-03-23": [
		{
			image: "ERROR",
			rym: "https://rateyourmusic.com/release/album/bathory/hammerheart/",
			artist: "Bathory",
			album: "Hammerheart",
		},
	],
	"2025-03-24": [
		{
			image: new URL("./images/tortured-existence_demolition-hammer.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/demolition-hammer/tortured-existence/",
			artist: "Demolition Hammer",
			album: "Tortured Existence",
		},
	],
	"2025-03-25": [
		{
			image: new URL("./images/bathory_bathory.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/bathory/bathory/",
			artist: "Bathory",
			album: "Bathory",
		},
	],
	"2025-03-26": [
		{
			image: new URL("./images/die-kreuzen_die-kreuzen.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/die-kreuzen/die-kreuzen-3/",
			artist: "Die Kreuzen",
			album: "Die Kreuzen",
		},
	],
	"2025-03-27": [
		{
			image: new URL("./images/three-sided-tape-volume-one_lil-ugly-mane.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/lil-ugly-mane/three-sided-tape-volume-one/",
			artist: "Lil Ugly Mane",
			album: "Three Sided Tape Volume One",
		},
	],
	"2025-03-28": [
		{
			image: new URL("./images/lonely-people-with-power_deafheaven.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/deafheaven/lonely-people-with-power/",
			artist: "Deafheaven",
			album: "Lonely People With Power",
		},
	],
	"2025-03-29": [
		{
			image: new URL("./images/what-a-fucking-nightmare_the-chisel.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/the-chisel/what-a-fucking-nightmare/",
			artist: "The Chisel",
			album: "What a Fucking Nightmare",
		},
	],
	"2025-03-30": [
		{
			image: new URL("./images/minecraft:-volume-beta_c418.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/c418/minecraft-volume-beta/",
			artist: "C418",
			album: "Minecraft: Volume Beta",
		},
	],
	"2025-03-31": [
		{
			image: new URL("./images/comin'-out-hard_8ball-&-mjg.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/eightball-and-mjg/comin-out-hard/",
			artist: "8Ball & MJG",
			album: "Comin' Out Hard",
		},
	],
	"2025-04-01": [
		{
			image: new URL("./images/10-years-gone_deafheaven.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/additional/deafheaven/10-years-gone/",
			artist: "Deafheaven",
			album: "10 Years Gone",
		},
	],
	"2025-04-02": [
		{
			image: new URL("./images/playaz-circle_lil-ugly-mane.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/mixtape/lil-ugly-mane/playaz-circle-1/",
			artist: "Lil Ugly Mane",
			album: "Playaz Circle",
		},
	],
	"2025-04-03": [
		{
			image: new URL("./images/twilight-of-the-gods_bathory.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/bathory/twilight-of-the-gods/",
			artist: "Bathory",
			album: "Twilight of the Gods",
		},
	],
	"2025-04-04": [
		{
			image: new URL("./images/crooked-rain,-crooked-rain_pavement.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/pavement/crooked-rain-crooked-rain-11/",
			artist: "Pavement",
			album: "Crooked Rain, Crooked Rain",
		},
	],
	"2025-04-05": [
		{
			image: new URL("./images/wowee-zowee_pavement.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/pavement/wowee-zowee/",
			artist: "Pavement",
			album: "Wowee Zowee",
		},
	],
	"2025-04-06": [
		{
			image: new URL("./images/watery,-domestic_pavement.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/pavement/watery-domestic/",
			artist: "Pavement",
			album: "Watery, Domestic",
		},
	],
	"2025-04-07": [
		{
			image: new URL("./images/massive-conspiracy-against-all-life_leviathan.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/leviathan/massive-conspiracy-against-all-life/",
			artist: "Leviathan",
			album: "Massive Conspiracy Against All Life",
		},
	],
	"2025-04-08": [
		{
			image: new URL("./images/far-away-from-the-sun_sacramentum.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/sacramentum/far-away-from-the-sun-8/",
			artist: "Sacramentum",
			album: "Far Away From the Sun",
		},
	],
	"2025-04-09": [
		{
			image: new URL("./images/autumn-eternal_panopticon.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/panopticon/autumn-eternal/",
			artist: "Panopticon",
			album: "Autumn Eternal",
		},
	],
	"2025-04-10": [
		{
			image: new URL("./images/kentucky_panopticon.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/panopticon/kentucky/",
			artist: "Panopticon",
			album: "Kentucky",
		},
	],
	"2025-04-11": [
		{
			image: new URL("./images/a-l'ame-enflammee,-l'ame-constellee_gris.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/gris/a-lame-enflammee-lame-constellee/",
			artist: "Gris",
			album: "À l'âme enflammée, l'âme constellée...",
		},
	],
	"2025-04-12": [
		{
			image: new URL("./images/civilisation-ii_kero-kero-bonito.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/kero-kero-bonito/civilisation-ii/",
			artist: "Kero Kero Bonito",
			album: "Civilisation II",
		},
	],
	"2025-04-13": [
		{
			image: new URL("./images/time-'n'-place_kero-kero-bonito.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/kero-kero-bonito/time-n-place/",
			artist: "Kero Kero Bonito",
			album: "Time 'n' Place",
		},
	],
	"2025-04-14": [
		{
			image: new URL("./images/hordanes-land_enslaved.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/enslaved/hordanes-land/",
			artist: "Enslaved",
			album: "Hordanes Land",
		},
	],
	"2025-04-15": [
		{
			image: new URL("./images/bonito-generation_kero-kero-bonito.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/kero-kero-bonito/bonito-generation/",
			artist: "Kero Kero Bonito",
			album: "Bonito Generation",
		},
	],
	"2025-04-16": [
		{
			image: new URL("./images/endless-detainment_serpent-column.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/serpent-column/endless-detainment/",
			artist: "Serpent Column",
			album: "Endless Detainment",
		},
	],
	"2025-04-17": [
		{
			image: new URL("./images/the-\"deep\"_soul-scream.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/soul-scream/the-deep/",
			artist: "Soul Scream",
			album: "The \"Deep\"",
		},
	],
	"2025-04-18": [
		{
			image: new URL("./images/tir-na-nog_maruja.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/maruja/tir-na-nog/",
			artist: "Maruja",
			album: "Tír na nÓg ",
		},
	],
	"2025-04-19": [
		{
			image: new URL("./images/civilisation-i_kero-kero-bonito.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/kero-kero-bonito/civilisation-i/",
			artist: "Kero Kero Bonito",
			album: "Civilisation I",
		},
	],
	"2025-04-20": [
		{
			image: new URL("./images/totep_kero-kero-bonito.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/kero-kero-bonito/totep/",
			artist: "Kero Kero Bonito",
			album: "TOTEP",
		},
	],
	"2025-04-21": [
		{
			image: new URL("./images/mercurial-world_magdalena-bay.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/magdalena-bay/mercurial-world/",
			artist: "Magdalena Bay",
			album: "Mercurial World",
		},
	],
	"2025-04-22": [
		{
			image: new URL("./images/the-ultra-violence_death-angel.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/death-angel/the-ultra-violence/",
			artist: "Death Angel",
			album: "The Ultra-Violence",
		},
	],
	"2025-04-23": [
		{
			image: new URL("./images/entertainment!_gang-of-four.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/gang-of-four/entertainment/",
			artist: "Gang of Four",
			album: "Entertainment!",
		},
	],
	"2025-04-24": [
		{
			image: new URL("./images/presence_mgla.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/mgla/presence/",
			artist: "Mgła",
			album: "Presence",
		},
	],
	"2025-04-25": [
		{
			image: new URL("./images/those-who-caress-the-pale_ved-buens-ende.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/ved-buens-ende/those-who-caress-the-pale/",
			artist: "Ved Buens Ende.....",
			album: "Those Who Caress the Pale",
		},
	],
	"2025-04-26": [
		{
			image: new URL("./images/sap_alice-in-chains.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/ep/alice-in-chains/sap/",
			artist: "Alice in Chains",
			album: "Sap",
		},
	],
	"2025-04-27": [
		{
			image: new URL("./images/brighten-the-corners_pavement.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/pavement/brighten-the-corners/",
			artist: "Pavement",
			album: "Brighten the Corners",
		},
	],
	"2025-04-28": [
		{
			image: new URL("./images/vikingligr-veldi_enslaved.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/enslaved/vikingligr-veldi/",
			artist: "Enslaved",
			album: "Vikingligr Veldi",
		},
	],
	"2025-04-29": [
		{
			image: new URL("./images/axioma-ethica-odini_enslaved.jpg", import.meta.url),
			rym: "https://rateyourmusic.com/release/album/enslaved/axioma-ethica-odini/",
			artist: "Enslaved",
			album: "Axioma Ethica Odini",
		},
	],
}

export default albums

// {
// 	image: "",
// 	rym: "",
//  artist: "",
//  album: "",
// }
