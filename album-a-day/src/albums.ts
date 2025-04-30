export type Album = {
	image: string
	rym: string
	artist: string
	album: string
}

const albums: Record<string, Album[]> = {
	"2025-01-01": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.genius.com%2F0853e27a7878c0485f0031ff97921bb6.800x800x1.jpg&f=1&nofb=1&ipt=954b21f5237520c5ab4d1598f5610f77f93f372392384fd394a32f86cdd96408&ipo=images",
			rym: "https://rateyourmusic.com/release/album/racionais-mcs/sobrevivendo-no-inferno/",
			artist: "Racionais MC's",
			album: "Sobrevivendo no inferno",
		},
	],
	"2025-01-02": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.genius.com%2F7232b61807fcd40d1f96219ad7d97036.864x864x1.png&f=1&nofb=1&ipt=1c63b62a9b0f33838081273809e765ffdd2f7976d1c62887688b1ffce1432398&ipo=images",
			rym: "https://rateyourmusic.com/release/album/mach-hommy/hbo-haitian-body-odor/",
			artist: "Mach-Hommy",
			album: "HBO (Haitian Body Odor)",
		},
		{
			image: "https://duckduckgo.com/i/d236abcf.png",
			rym: "https://rateyourmusic.com/release/album/mckinley-dixon/beloved-paradise-jazz/",
			artist: "McKinley Dixon",
			album: "Beloved! Paradise! Jazz!? ",
		},
	],
	"2025-01-03": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrownsvilleka.com%2Fcdn%2Fshop%2Fproducts%2FOrpheus_vs_The_Sirens_73f23ec4-cf83-41e7-87aa-89cce87e96ee.jpg%3Fv%3D1536689621%26width%3D1946&f=1&nofb=1&ipt=12239b583deff4f08a97d17251e8781e6dc0112a287aba5677db72df3c47f254&ipo=images",
			rym: "https://rateyourmusic.com/release/album/hermit-and-the-recluse/orpheus-vs-the-sirens/",
			artist: "Hermit and the Recluse",
			album: "Orpheus vs. the Sirens",
		},
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.discogs.com%2FjL_mNSQVC78I8ENVRYuL1u_JhqGF6ajZB7MlbIfPIOA%2Frs%3Afit%2Fg%3Asm%2Fq%3A90%2Fh%3A600%2Fw%3A600%2FczM6Ly9kaXNjb2dz%2FLWRhdGFiYXNlLWlt%2FYWdlcy9SLTUwODY3%2FNy0xMTI1MzM0ODk5%2FLmpwZw.jpeg&f=1&nofb=1&ipt=d1f8e256a8c6fa1bfa732bc8f903e334628700f9790eb568ec4911cc910aa5bc&ipo=images",
			rym: "https://rateyourmusic.com/release/album/songs-ohia/ghost-tropic/",
			artist: "Songs: Ohia",
			album: "Ghost Tropic",
		},
	],
	"2025-01-04": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff4.bcbits.com%2Fimg%2Fa4022766229_10.jpg&f=1&nofb=1&ipt=d753552174fdab0382aa2a879e14515ca818ed8892685ff36b49f9f34101a6dc&ipo=images",
			rym: "https://rateyourmusic.com/release/album/bolt-thrower/realm-of-chaos/",
			artist: "Bolt Thrower",
			album: "Realms of Chaos",
		},
	],
	"2025-01-05": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft2.genius.com%2Funsafe%2F600x600%2Fhttps%3A%252F%252Fimages.genius.com%252F8491d6a08cb2723d66ac84c3e1eaa3b1.1000x1000x1.jpg&f=1&nofb=1&ipt=39ce4fc5856866dd44a67f54cbe554129d84d06bede417fb7415ae19c7f29878&ipo=images",
			rym: "https://rateyourmusic.com/release/ep/saosin/translating-the-name/",
			artist: "Saosin",
			album: "Translating the Name",
		},
	],
	"2025-01-06": [
		{
			image:
        "https://res.cloudinary.com/epitaph/image/upload/c_fill,f_auto,h_540,q_auto,w_540/v1/epitaph/releases/converge.jpg",
			rym: "https://rateyourmusic.com/release/ep/converge/i-can-tell-you-about-pain/",
			artist: "Converge",
			album: "I Can Tell You About Pain",
		},
	],
	"2025-01-07": [
		{
			image: "https://f4.bcbits.com/img/a0247537585_16.jpg",
			rym: "https://rateyourmusic.com/release/ep/feed-me-jack/ultra-ego/",
			artist: "Feed Me Jack",
			album: "Ultra Ego",
		},
	],
	"2025-01-08": [
		{
			image: "https://f4.bcbits.com/img/a0812755685_16.jpg",
			rym: "https://rateyourmusic.com/release/ep/suffocation/despise-the-sun/",
			artist: "Suffocation",
			album: "Despise the Sun",
		},
	],
	"2025-01-09": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdns-images.dzcdn.net%2Fimages%2Fcover%2F8599e0e6a6342dea3ac616a66cd3365b%2F500x500.jpg&f=1&nofb=1&ipt=a6f612e45121a2f71a9f8e644c812a6e0ff316d39017c1fac9ffa4a6748c7d6a&ipo=images",
			rym: "https://rateyourmusic.com/release/album/los-jaivas/alturas-de-machu-pichu/",
			artist: "Los Jaivas",
			album: "Alturas de Machu Pichu ",
		},
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.albumoftheyear.org%2Falbum%2F38120-pierced-from-within.jpg&f=1&nofb=1&ipt=4c53deb17ec23fc115f47bc6240ee19932b7911c27898038583e09780178758d&ipo=images",
			rym: "https://rateyourmusic.com/release/album/suffocation/pierced-from-within/",
			artist: "Suffocation",
			album: "Pierced From Within",
		},
	],
	"2025-01-10": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-RbhJuLpcZfs%2FUnUswiCIS6I%2FAAAAAAAAANg%2FZFX5mlcul5g%2Fs1600%2Ffront.jpg&f=1&nofb=1&ipt=5e1f5a6c16fb314b544bc22c31c69851845ad869a8dbf0642c99edc45a3e4e81&ipo=images",
			rym: "https://rateyourmusic.com/release/ep/black-flag/nervous-breakdown/",
			artist: "Black Flag",
			album: "Nervous Breakdown ",
		},
	],
	"2025-01-11": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2Fcvm5P-xc2EE_xatOoZxAEcDTtqQ%3D%2Ffit-in%2F600x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-540618-1381945153-4338.jpeg.jpg&f=1&nofb=1&ipt=c7c1c009c7cecec3a27eb2190a8be838e0ceffc120a8bc33b39a621da27d1b8f&ipo=images",
			rym: "https://rateyourmusic.com/release/album/wire/154/",
			artist: "Wire",
			album: "154",
		},
	],
	"2025-01-12": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.metal-archives.com%2Fimages%2F1%2F2%2F8%2F5%2F12854.gif%3F5643&f=1&nofb=1&ipt=e9680d802eaaa1aae984ba98c79f735b27ef2c194629efd8af291e119d273030&ipo=images",
			rym: "https://rateyourmusic.com/release/ep/sadistic-intent/resurrection/",
			artist: "Sadistic Intent",
			album: "Resurrection",
		},
	],
	"2025-01-13": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F91yGbmMuK5L._SL1397_.jpg&f=1&nofb=1&ipt=67ad6f7710d053825331147a5a5695c6ff071acc154e0443e9bab12664e4f881&ipo=images",
			rym: "https://rateyourmusic.com/release/album/roxy-music/roxy-music/",
			artist: "Roxy Music",
			album: "Roxy Music",
		},
	],
	"2025-01-14": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2735b7a1826fd4535376fcf69c6&f=1&nofb=1&ipt=28cab02db4dbf6ab07acaf48586b9973800025b396c3bbae92ba5ee7f395f9da&ipo=images",
			rym: "https://rateyourmusic.com/release/album/embrace/embrace-1/",
			artist: "Embrace",
			album: "Embrace",
		},
	],
	"2025-01-15": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FLIO8Q3sy-swTSNqLKsnpeb2EEuI%3D%2Ffit-in%2F600x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-914498-1172329498.jpeg.jpg&f=1&nofb=1&ipt=c29adccc8a36fe2b2edda704223ea9065c9d4ef0d22fa35e57d7a6a8f3db24a2&ipo=images",
			rym: "https://rateyourmusic.com/release/album/morbid-angel/gateways-to-annihilation/",
			artist: "Morbid Angel",
			album: "Gateways to Annihilation",
		},
	],
	"2025-01-16": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmetal.academy%2Fuploads%2Freleases%2F76c50f11ba6b6a4c023d9c480deb4188.jpg&f=1&nofb=1&ipt=aa599b4a9de7a5786e37ad1e4d71c515101d5da2eee1f40f4f9619a0cf666056&ipo=images",
			rym: "https://rateyourmusic.com/release/album/morbid-angel/formulas-fatal-to-the-flesh/",
			artist: "Morbid Angel",
			album: "Formulas Fatal to the Flesh",
		},
	],
	"2025-01-17": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-lWijaVtNNiQ%2FUtNeyGql_VI%2FAAAAAAAABEs%2Fb3skFsPSg4Y%2Fs1600%2Fbolt%2Bthrower%2B-%2Bwar%2Bmaster.jpg&f=1&nofb=1&ipt=89c2fff45ddc5b7d2a2161245976e69c731a2e8befa86f2089f40fb9757a5480&ipo=images",
			rym: "https://rateyourmusic.com/release/album/bolt-thrower/war-master/",
			artist: "Bolt Thrower",
			album: "War Master",
		},
	],
	"2025-01-18": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fdev1.mtimg.com%2Fproduct_photos%2Fimgs%2F000%2F017%2F479%2Ffull%2FBotch_AmericanNervoso_CD-2.jpg%3F1432666947&f=1&nofb=1&ipt=4ca779f011b59016850ba9739ec882a5876db465d9e53e02e5e914946615a450&ipo=images",
			rym: "https://rateyourmusic.com/release/album/botch/american-nervoso/",
			artist: "Botch",
			album: "American Nervoso",
		},
	],
	"2025-01-19": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hydrahead.com%2Fpress%2Fbotch%2Fimages%2FHH666063_botch_f_4c.jpg&f=1&nofb=1&ipt=651b40222c508d574ccbfe45ca9ebb8a9c3722a60e4d524e92a75bef6dfc2668&ipo=images",
			rym: "https://rateyourmusic.com/release/ep/botch/an-anthology-of-dead-ends/",
			artist: "Botch",
			album: "An Anthology of Dead Ends",
		},
	],
	"2025-01-20": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FSsGxiGhNL9ek-hgo2rRUY-mVjEk%3D%2Ffit-in%2F600x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-882740-1302506674.jpeg.jpg&f=1&nofb=1&ipt=7c569f42bc65a6ab78bb6678682e2f134110acf717f702a2f57397556227cc83&ipo=images",
			rym: "https://rateyourmusic.com/release/album/wipers/youth-of-america/",
			artist: "Wipers",
			album: "Youth of America",
		},
	],
	"2025-01-21": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-iJCHqqc_kzg%2FWgBIPMvpLVI%2FAAAAAAAAQBQ%2FoUBsTAZRxJ0lq0eSEPxbe8nJdKyK64UAACLcBGAs%2Fs1600%2Famenra.jpg&f=1&nofb=1&ipt=abf1fd77ddedd3cce1673fe26ac724bff78a760e2554be3289d14f64bc99ffc2&ipo=images",
			rym: "https://rateyourmusic.com/release/album/amenra/mass-vi/",
			artist: "Amenra",
			album: "Mass VI",
		},
	],
	"2025-01-22": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Falbumart.besteveralbums.com%2Falbumart%2Falbum_large_103312_57e754ea4a721.jpg&f=1&nofb=1&ipt=436e07f2f55c47f977dd75371c8ff222673485e4e761a3a9ebbfa5395b231341&ipo=images",
			rym: "https://rateyourmusic.com/release/album/orchid/orchid/",
			artist: "Orchid",
			album: "Orchid",
		},
	],
	"2025-01-23": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.season-of-mist.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F2%2Fthumbnail%2F9df78eab33525d08d6e5fb8d27136e95%2FR%2Fe%2FRepulsion-Horrified-LP-COLOURED-128683-1-1671523095.jpg&f=1&nofb=1&ipt=a6cd86923d0e11c11795f9f5cc10cb009481b6ebd41fb3784e55c8a56b61ac06&ipo=images",
			rym: "https://rateyourmusic.com/release/album/repulsion/horrified/",
			artist: "Repulsion",
			album: "Horrified",
		},
	],
	"2025-01-24": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0064%2F5935%2F9283%2Fproducts%2FTITLE_FIGHT-Floral_Green-LP_2000x_4f00c295-48de-49c0-9076-63027d8136a6_1024x.jpg%3Fv%3D1640200068&f=1&nofb=1&ipt=991e19354eb258c1a0736c1854fc5944ec044814752fb652a3511f2c58da6c78&ipo=images",
			rym: "https://rateyourmusic.com/release/album/title-fight/floral-green/",
			artist: "Title Fight",
			album: "Floral Green",
		},
	],
	"2025-01-25": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmerchbar.imgix.net%2Falbums%2Freleases%2F5193670.jpeg%3Fq%3D40%26auto%3Dcompress%2Cformat%26ar%3D1%3A1%26w%3D1400&f=1&nofb=1&ipt=4a2c5670999312d66759268ae11db50e9da3f2a54d70adc5f7dee7afd3aee5a3&ipo=images",
			rym: "https://rateyourmusic.com/release/album/title-fight/shed/",
			artist: "Title Fight",
			album: "Shed",
		},
	],
	"2025-01-26": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff4.bcbits.com%2Fimg%2Fa0051474930_5.jpg&f=1&nofb=1&ipt=e25c20054a29d5428fc9d88662faf0f39a4a31274c6fe035dd4bb4c1df05dd79&ipo=images",
			rym: "https://rateyourmusic.com/release/album/admiral-angry/buster/",
			artist: "Admiral Angry",
			album: "Buster",
		},
	],
	"2025-01-27": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpm1.narvii.com%2F6671%2F5fb735c14205552b1582d99554667ec4260a5ba2_hq.jpg&f=1&nofb=1&ipt=c29a8f7c7159d853764a7ed5b24e88e881b84797d006f6fbe5562da1f982ccc6&ipo=images",
			rym: "https://rateyourmusic.com/release/album/my-chemical-romance/three-cheers-for-sweet-revenge/",
			artist: "My Chemical Romance",
			album: "Three Cheers for Sweet Revenge",
		},
	],
	"2025-01-28": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstarsandscars.com%2Fwp-content%2Fuploads%2F2017%2F05%2FMy-Chemical-Romance-The-Black-Parade-Album-Cover.jpg&f=1&nofb=1&ipt=18be7241967ee52b60fa979305368101d9ad4c998a0eed1da40a087c1318e82d&ipo=images",
			rym: "https://rateyourmusic.com/release/album/my-chemical-romance/the-black-parade/",
			artist: "My Chemical Romance",
			album: "The Black Parade",
		},
	],
	"2025-01-29": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.genius.com%2F467394044f5810aefe7c1aeaa34167c5.1000x1000x1.png&f=1&nofb=1&ipt=2f36a8482d949868ed816049a2ee1e0ea37d24bbb823863ed3b1f43be79f4157&ipo=images",
			rym: "https://rateyourmusic.com/release/album/have-heart/songs-to-scream-at-the-sun/",
			artist: "Have Heart",
			album: "Songs to Scream at the Sun",
		},
	],
	"2025-01-30": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frvamag.com%2Fwp-content%2Fuploads%2F2014%2F12%2F997590c8.jpg&f=1&nofb=1&ipt=5e6d687c2d6a1b6d6f9013c694367e5025e22eff70e923811e5f013283dc8fea&ipo=images",
			rym: "https://rateyourmusic.com/release/album/songs-ohia/didnt-it-rain/",
			artist: "Songs: Ohia",
			album: "Didn't It Rain",
		},
	],

	"2025-01-31": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faltamont.pt%2Fwp-content%2Fuploads%2F2020%2F09%2Fstereolab.jpg&f=1&nofb=1&ipt=4ad846dc96ede6e6529b28eb3a4945d7812b336659cbf35c833c46b05657a456&ipo=images",
			rym: "https://rateyourmusic.com/release/album/stereolab/dots-and-loops/",
			artist: "Stereolab",
			album: "Dots and Loops",
		},
	],
	"2025-02-01": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273b099d03bb44b48861ac62594&f=1&nofb=1&ipt=6d0c9e6f958dd4080f5f9758f0d76dd0f4e242e8f0cbfdb999625a90c7c8a6d3&ipo=images",
			rym: "https://rateyourmusic.com/release/album/wire/chairs-missing/",
			artist: "Wire",
			album: "Chairs Missing",
		},
	],
	"2025-02-02": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fartrockstore.com%2Fcdn%2Fshop%2Fproducts%2Fa1232947052_10_grande.jpg%3Fv%3D1683181499&f=1&nofb=1&ipt=6c84ce8aafb2bea7537569f30dc4cad25049ccd22e7efb8e5e0267447e54512a&ipo=images",
			rym: "https://rateyourmusic.com/release/ep/maruja/knocknarea/",
			artist: "Maruja",
			album: "Knocknarea",
		},
	],
	"2025-02-03": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.soundofviolence.net%2FReviews%2Foriginals%2FMaruja_-_Connlas_Well_EP.jpg&f=1&nofb=1&ipt=52fc661654d801db060e7dd9e9463f7bf465c6af1856fca81ae94ce3e988cf6e&ipo=images",
			rym: "https://rateyourmusic.com/release/ep/maruja/connlas-well/",
			artist: "Maruja",
			album: "Connla's Well",
		},
	],
	"2025-02-04": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2731152471596980e1bba03b6ab&f=1&nofb=1&ipt=d77395a616ce1f3c90cd1684674e54bff8e7a5dd91a2830a64b15c47122bf7ec&ipo=images",
			rym: "https://rateyourmusic.com/release/album/gustavo-cerati/bocanada/",
			artist: "Gustavo Cerati",
			album: "Bocanada",
		},
	],
	"2025-02-05": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpagesix.com%2Fwp-content%2Fuploads%2Fsites%2F3%2F2022%2F10%2Fjanet-jackson-70.jpg&f=1&nofb=1&ipt=8c8772e1c6a6e02adde20c4f558999dd5f9de28901a4a5035d38703013709b35&ipo=images",
			rym: "https://rateyourmusic.com/release/album/janet/the-velvet-rope/",
			artist: "Janet Jackson",
			album: "The Velvet Rope",
		},
	],
	"2025-02-06": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Falbumart.besteveralbums.com%2Falbumart%2Falbum_large_33102_50b143a79da1d.jpg&f=1&nofb=1&ipt=9910c71757ce114b986498f93bf1bda119dc6026099effaf0efc9a1e8f0d7a9f&ipo=images",
			rym: "https://rateyourmusic.com/release/album/the-ruins-of-beverast/rain-upon-the-impure/",
			artist: "The Ruins of Beverast",
			album: "Rain Upon the Impure",
		},
	],
	"2025-02-07": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0613%2F3493%2Fproducts%2Fblue-train-5269591f6c6d5_1024x1024.jpg%3Fv%3D1446154827&f=1&nofb=1&ipt=8cbe395e2c48474261656fa2bdcf8ad3d952555ef9d9dbd18ed8fce2aa71b427&ipo=images",
			rym: "https://rateyourmusic.com/release/album/john-coltrane/blue-train/",
			artist: "John Coltrane",
			album: "Blue Train",
		},
	],
	"2025-02-08": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F60%2FCharli_XCX_-_Brat_%2528album_cover%2529.png%2F220px-Charli_XCX_-_Brat_%2528album_cover%2529.png&f=1&nofb=1&ipt=6620c365d1a6c92c62cab268a58313a20851426b93c4c30dae9e770649ea8b07&ipo=images",
			rym: "https://rateyourmusic.com/release/album/charli-xcx/brat/",
			artist: "Charlie XCX",
			album: "Brat",
		},
	],
	"2025-02-09": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis4-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic123%2Fv4%2Fbf%2F97%2Ffb%2Fbf97fb84-a22f-f7ca-9b05-0416e8416874%2F886447689882.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=de632905c40f518674f246e7e66c535dfb6b72662db6ce545d8f62e1fc904cec&ipo=images",
			rym: "https://rateyourmusic.com/release/album/marty-robbins/more-gunfighter-ballads-and-trail-songs/",
			artist: "Marty Robbins",
			album: "More Gunfighter Ballads and Trail Songs",
		},
	],
	"2025-02-10": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.albumoftheyear.org%2Falbum%2F712410-the-rise-fall-of-a-midwest-princess_1226.jpg&f=1&nofb=1&ipt=44dba0fe551c0666f081a937d27c36024b56d1d36624772b5f87d48dea8df841&ipo=images",
			rym: "https://rateyourmusic.com/release/album/chappell-roan/the-rise-and-fall-of-a-midwest-princess/",
			artist: "Chappell Roan",
			album: "The Rise and Fall of a Midwest Princess ",
		},
	],
	"2025-02-11": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic211%2Fv4%2Fb0%2F07%2F41%2Fb007419e-a302-eab1-ddfa-54fcbaf59f36%2Fartwork.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=2aee1dc95eef911b3b31edcd641efe5aea8b97ba972391c8e28098993c3b071e&ipo=images",
			rym: "https://rateyourmusic.com/release/album/prostitute/attempted-martyr/",
			artist: "Prostitute",
			album: "Attempted Martyr",
		},
	],
	"2025-02-12": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5ud_ROpLdm3WQWrQGRdTHAHaHa%26pid%3DApi&f=1&ipt=e99b6cd79202329830dc56476990629b9e9384d5c1a6a7857cc5ee56a6b66688&ipo=images",
			rym: "https://rateyourmusic.com/release/comp/indian-summer/giving-birth-to-thunder/",
			artist: "Indian Summer",
			album: "Giving Birth to Thunder",
		},
	],
	"2025-02-13": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Falbumart.besteveralbums.com%2Falbumart%2Falbum_large_133_600ee7a809c65.jpg&f=1&nofb=1&ipt=198a8904cfa59e4932b3f731e9a9c176b997fcc47c4e2965ab5c9eab642c1b44&ipo=images",
			rym: "https://rateyourmusic.com/release/album/joni-mitchell/hejira/",
			artist: "Joni Mitchell",
			album: "Hejira",
		},
	],
	"2025-02-14": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F03463a7e-d86c-4379-8353-60dd4ee82b89_1.d59a45a8de26aab7cfcc09aba8265797.jpeg%3FodnWidth%3D612%26odnHeight%3D612%26odnBg%3Dffffff&f=1&nofb=1&ipt=6056f85fa5081d6dc88b7a0f01940e1c8554e33e74dd61ff481342363aadaa25&ipo=images",
			rym: "https://rateyourmusic.com/release/comp/woody-guthrie/dust-bowl-ballads/",
			artist: "Woody Guthrie",
			album: "Dust Bowl Ballads",
		},
	],
	"2025-02-15": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.discogs.com%2FO3PbZ0OM3YBj5G83elezgBrjcxeXQWQfrCWpbbUIhUY%2Frs%3Afit%2Fg%3Asm%2Fq%3A90%2Fh%3A593%2Fw%3A600%2FczM6Ly9kaXNjb2dz%2FLWRhdGFiYXNlLWlt%2FYWdlcy9SLTIzODE4%2FNjQ5LTE2NTgzMTg0%2FMjEtNDQxOC5qcGVn.jpeg&f=1&nofb=1&ipt=2bbb679ed7e294b13c1400dc4df096614b912c1931d83cf19394454cb9288768&ipo=images",
			rym: "https://rateyourmusic.com/release/album/viagra-boys/cave-world/",
			artist: "Viagra Boys",
			album: "Cave World",
		},
	],
	"2025-02-16": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FtpmA76SLeC_YkXt9_qeFERf3bKo%3D%2Ffit-in%2F600x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-910254-1318246359.jpeg.jpg&f=1&nofb=1&ipt=1738c0ae0e5d35fe6dcd7cbf268ba00ccdbb9676a4efa935d3a9657cfe7b5885&ipo=images",
			rym: "https://rateyourmusic.com/release/ep/disembodied/if-god-only-knew-the-rest-were-dead/",
			artist: "Disembodied",
			album: "If God Only Knew the Rest Were Dead",
		},
	],
	"2025-02-17": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.copertinedvd.org%2Fcopertine-cd-file%2FJ%2Fjoni_mitchell_-_ladies_of_the_canyon_-_front.jpg&f=1&nofb=1&ipt=faf5ad79c191ecc36222d072db38ca2d58fb7e9c41c3f72430c5420c8caadd95&ipo=images",
			rym: "https://rateyourmusic.com/release/album/joni-mitchell/ladies-of-the-canyon/",
			artist: "Joni Mitchell",
			album: "Ladies of the Canyon",
		},
	],
	"2025-02-18": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff4.bcbits.com%2Fimg%2F0038405733_16.jpg&f=1&nofb=1&ipt=b9c4ac3f1405d37821d9f2e7998b55e24fc6c1cab098dafdf000eeb55f2ab5c6&ipo=images",
			rym: "https://rateyourmusic.com/release/album/dax-riggs/7-songs-for-spiders/",
			artist: "Dax Riggs",
			album: "7 Songs for Spiders",
		},
	],
	"2025-02-19": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft2.genius.com%2Funsafe%2F600x600%2Fhttps%3A%2F%2Fimages.genius.com%2F3f084a873b5e47d315d44c70d23f8139.1000x1000x1.jpg&f=1&nofb=1&ipt=eb31deeb913967a1e46a380a5a241fe4eeec38a322d0dc2d4b1e49cc16e91592&ipo=images",
			rym: "https://rateyourmusic.com/release/album/isaac-hayes/_to-be-continued/",
			artist: "Isaac Hayes",
			album: "...To Be Continued",
		},
	],
	"2025-02-20": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.discogs.com%2Fs6r26SscsSRTRIllaQdwAnVsS5cQHwaphzrKsWZtJoA%2Frs%3Afit%2Fg%3Asm%2Fq%3A90%2Fh%3A592%2Fw%3A600%2FczM6Ly9kaXNjb2dz%2FLWRhdGFiYXNlLWlt%2FYWdlcy9SLTUxMjIz%2FLTExNzgyODQxNzcu%2FanBlZw.jpeg&f=1&nofb=1&ipt=780634336f248559b219c7e09202bf0da9741ddd33b1970bb73804ff4f0ec106&ipo=images",
			rym: "https://rateyourmusic.com/release/album/current-93/thunder-perfect-mind/",
			artist: "Current 93",
			album: "Thunder Perfect Mind",
		},
	],
	"2025-02-21": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdisqueriakyd.cl%2Fwp-content%2Fuploads%2F2020%2F08%2Fcurrent-93-sleep-as-his-house.jpg&f=1&nofb=1&ipt=47c523b53432552d7b3688ab396b3bb6df860e97d7e094c50446843b3a1d859d&ipo=images",
			rym: "https://rateyourmusic.com/release/album/current-ninety-three/sleep-has-his-house/",
			artist: "Current 93",
			album: "Sleep Has His House",
		},
	],
	"2025-02-22": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.genius.com%2Fbf6e9f03de694402ed9364112a6b3fca.603x600x1.jpg&f=1&nofb=1&ipt=2f3a243e588969a56a72886abff6d516f098bb7171457132592c9720c97949aa&ipo=images",
			rym: "https://rateyourmusic.com/release/album/current-93/all-the-pretty-little-horses/",
			artist: "Current 93",
			album: "All the Pretty Little Horses",
		},
	],
	"2025-02-23": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fanart.tv%2Ffanart%2Fgorilla-biscuits-6230f1142b225.jpg&f=1&nofb=1&ipt=5dd3e1c47ddeb7357b076ce84ab82aafdd327d867f97f365a6269b29d0874c81&ipo=images",
			rym: "https://rateyourmusic.com/release/ep/gorilla-biscuits/gorilla-biscuits/",
			artist: "Gorilla Biscuits",
			album: "Gorilla Biscuits",
		},
	],
	"2025-02-24": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.progarchives.com%2Fprogressive_rock_discography_covers%2F7041%2Fcover_401663112018_r.jpg&f=1&nofb=1&ipt=23eda280018922bea719e7db9923b48a9b7b3673db69c1c7d0315195dd825dea&ipo=images",
			rym: "https://rateyourmusic.com/release/album/currentninetythree/soft-black-stars/",
			artist: "Current 93",
			album: "Soft Black Stars",
		},
	],
	"2025-02-25": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.discogs.com%2F1O_Pot3nQYKs7x8ABLbLCqMuik8T9wJozjW_OHuxEic%2Frs%3Afit%2Fg%3Asm%2Fq%3A90%2Fh%3A600%2Fw%3A600%2FczM6Ly9kaXNjb2dz%2FLWRhdGFiYXNlLWlt%2FYWdlcy9SLTExMDg2%2FNzgtMTQ1NTc2MzA5%2FMi0yODA2LmpwZWc.jpeg&f=1&nofb=1&ipt=a25b875e00b6e4ae294457323d451ce3e0eb535969155334d530292b58101372&ipo=images",
			rym: "https://rateyourmusic.com/release/album/converge/petitioning-the-empty-sky/",
			artist: "Converge",
			album: "Petitioning the Empty Sky",
		},
	],
	"2025-02-26": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sputnikmusic.com%2Fimages%2Falbums%2F3801.jpg&f=1&nofb=1&ipt=2e2dbdb7009e9bb6e40cab1e8d7fcfd8f81f364ed9fac9f0ddb2d7a37e260020&ipo=images",
			rym: "https://rateyourmusic.com/release/album/converge/when-forever-comes-crashing-3/",
			artist: "Converge",
			album: "When Forever Comes Crashing ",
		},
	],
	"2025-02-27": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Filovealcopop.co.uk%2Fcdn%2Fshop%2Ffiles%2FMiddleSpoonRGB3000_1800x1800.jpg%3Fv%3D1736850389&f=1&nofb=1&ipt=549ec1541fc6ef0a635f368d9b1d3b8126ed5ac4b49c1dfd48a2cea6e8ca6c95&ipo=images",
			rym: "https://rateyourmusic.com/release/album/cheekface/middle-spoon/",
			artist: "Cheekface",
			album: "Middle Spoon",
		},
	],
	"2025-02-28": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff4.bcbits.com%2Fimg%2Fa0168267452_10.jpg&f=1&nofb=1&ipt=bd27b02e04096d0e5c68033905266f1642810c64203ee753279483027b86679f&ipo=images",
			rym: "https://rateyourmusic.com/release/album/sadness/i-want-to-be-there/",
			artist: "Sadness",
			album: "I Want to be There",
		},
	],
	"2025-03-01": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.jpc.de%2Fimage%2Fw600%2Ffront%2F0%2F0602537288526.jpg&f=1&nofb=1&ipt=e8be9f5b95f96787f3227621d8f08c69041d6fa8b88947dd8041fc60b0e7d033&ipo=images",
			rym: "https://rateyourmusic.com/release/album/scott-engel/scott-4/",
			artist: "Scott Walker",
			album: "Scott 4",
		},
	],
	"2025-03-02": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2Ft1T0pPkiUiYJoV46WsNwsdunSac%3D%2Ffit-in%2F600x596%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-81247-1494450801-5353.jpeg.jpg&f=1&nofb=1&ipt=fc248f2bb85267be075dcc239f62bb149c4f1e646db049d8207c0bbaec11c526&ipo=images",
			rym: "https://rateyourmusic.com/release/ep/godflesh/godflesh/",
			artist: "Godflesh",
			album: "Godflesh",
		},
	],
	"2025-03-03": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.emp.co.uk%2Fdw%2Fimage%2Fv2%2FBBQV_PRD%2Fon%2Fdemandware.static%2F-%2FSites-master-emp%2Fdefault%2Fdwccd79087%2Fimages%2F3%2F9%2F4%2F8%2F394823a.jpg%3Fsw%3D1000%26sh%3D800%26sm%3Dfit%26sfrm%3Dpng&f=1&nofb=1&ipt=b4055b0ffe5733e33cd0b0a9148e870a6ce78692d4293709a667b9e6faa9c4f5&ipo=images",
			rym: "https://rateyourmusic.com/release/album/godflesh/streetcleaner/",
			artist: "Godflesh",
			album: "Streetcleaner",
		},
	],
	"2025-03-04": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff4.bcbits.com%2Fimg%2Fa0403833169_10.jpg&f=1&nofb=1&ipt=5aeee220368e5d8bdfe367d6266aacdfa4dfbb65a246927306ea18a7cba24007&ipo=images",
			rym: "https://rateyourmusic.com/release/album/incantation/diabolical-conquest/",
			artist: "Incantation",
			album: "Diabolical Conquest",
		},
	],
	"2025-03-05": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmetalitalia.com%2Fwp-content%2Fuploads%2F2016%2F07%2Fneurosis-FIRES-WITHIN-FIRES-album-2016.jpg&f=1&nofb=1&ipt=1ac200c80f3587d17b2128b582a4ff9a8e67dc5aeb5a658984fa8cd0c38a9c81&ipo=images",
			rym: "https://rateyourmusic.com/release/album/neurosis/fires-within-fires/",
			artist: "Neurosis",
			album: "Fires Within Fires",
		},
	],
	"2025-03-06": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.B34_AZcrQxyLbA34X1hkWwHaHa%26pid%3DApi&f=1&ipt=63088c90f3ed1f9cebb918928801153e15eab2da2a7c6b10774b0b63dc51d239&ipo=images",
			rym: "https://rateyourmusic.com/release/album/armand-hammer/we-buy-diabetic-test-strips/",
			artist: "Armand Hammer",
			album: "We Buy Diabetic Test Strips ",
		},
	],
	"2025-03-07": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.genius.com%2F5de9704b9bd8773ddbcb1de962f62386.1000x1000x1.jpg&f=1&nofb=1&ipt=35e9a7ff7a7dc281068846c53ef71bdfee4fbae1f4d5a0c6070ddd694806645d&ipo=images",
			rym: "https://rateyourmusic.com/release/album/bob-dylan/highway-61-revisited/",
			artist: "Bob Dylan",
			album: "Highway 61 Revisited ",
		},
	],
	"2025-03-08": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-fCpS6aAnWwk%2FUATX6NweRRI%2FAAAAAAAAD-o%2FJjUvDqZr1gU%2Fs1600%2FEntombed-Clandestine.jpg&f=1&nofb=1&ipt=b17635c45d179d251dd0216a190ab5e34c3b67ab3955596dddb1410b3a2f4346&ipo=images",
			rym: "https://rateyourmusic.com/release/album/entombed/clandestine/",
			artist: "Entombed",
			album: "Clandestine",
		},
	],
	"2025-03-09": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.metalkingdom.net%2Falbum-cover-artwork%2F2018%2F07%2F4%2F124948-Hopesfall-No-Wings-to-Speak-Of.jpg&f=1&nofb=1&ipt=e76b8fce9309ba6028429dc8aa1d27ea84117a69405cc30966005c678dcbb7b3&ipo=images",
			rym: "https://rateyourmusic.com/release/ep/hopesfall/no-wings-to-speak-of/",
			artist: "Hopesfall",
			album: "No Wings to Speak Of ",
		},
	],
	"2025-03-10": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.scienceofnoise.net%2Fwp-content%2Fuploads%2F2018%2F09%2Fentombed-wolverine-blues-cd-nuevo-cerrado-D_NQ_NP_997117-MLA26953462673_032018-F.jpg&f=1&nofb=1&ipt=5306785da8e27e5c58917975d868c8c7862a79d6f7ded16b9e5eaaba21f7b2b8&ipo=images",
			rym: "https://rateyourmusic.com/release/album/entombed/wolverine-blues/",
			artist: "Entombed",
			album: "Wolverine Blues ",
		},
	],
	"2025-03-11": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff4.bcbits.com%2Fimg%2Fa2377691659_10.jpg&f=1&nofb=1&ipt=1430febb91f68161d29f4ba09cf2ce6c385ec3e8ea805d62a42c329ccf88256d&ipo=images",
			rym: "https://rateyourmusic.com/release/album/missouri-executive-order-44/salt-sermon/",
			artist: "Missouri Executive Order 44",
			album: "Salt Sermon",
		},
	],
	"2025-03-12": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frevistaladosis.com%2Fwp-content%2Fuploads%2F2023%2F10%2FPescado-Rabioso-Artaud.jpg&f=1&nofb=1&ipt=645b652143ed6d38a7912254b0395dae586beb181f49a557c89b1f98b6f21ebb&ipo=images",
			rym: "https://rateyourmusic.com/release/album/pescado-rabioso/artaud/",
			artist: "Pescado Rabioso",
			album: "Artaud",
		},
	],
	"2025-03-13": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic116%2Fv4%2F52%2Ffa%2Fc1%2F52fac1b7-a34d-2691-f4b0-a906952d82f2%2Fartwork.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=fbebf20ef81aeeebd8f94de30b0f61e582e1368f11615f5713b40449c98240db&ipo=images",
			rym: "https://rateyourmusic.com/release/ep/missouri-executive-order-44/seventeen-dead-in-caldwell-county/",
			artist: "Missouri Executive Order 44",
			album: "Seventeen Dead in Caldwell County",
		},
	],
	"2025-03-14": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FQuG4rYNPJ_cahc1WoQ1g5NR8nYk%3D%2Ffit-in%2F600x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-10463173-1497951744-9946.jpeg.jpg&f=1&nofb=1&ipt=5721cf1fbc74eac7c45510cd2f93dc5dd8cb9ce4a59ff09dce0584e0009bc555&ipo=images",
			rym: "https://rateyourmusic.com/release/album/crowbar/broken-glass/",
			artist: "Crowbar",
			album: "Broken Glass",
		},
	],
	"2025-03-15": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff4.bcbits.com%2Fimg%2F0014400394_10.jpg&f=1&nofb=1&ipt=944284e5a058afc3e11c8707b560a46208dba23493b773d0b903b1c906b0c076&ipo=images",
			rym: "https://rateyourmusic.com/release/comp/urfaust/ritual-music-for-the-true-clochard/",
			artist: "Urfaust",
			album: "Ritual Music for the True Clochard",
		},
	],
	"2025-03-16": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb2%2F04%2F82%2Fb2048287591b4b39b075fa6f1841def1.jpg&f=1&nofb=1&ipt=276cef8272117241a1a1167c0549a12ddf43ff1e7de777d791b61f360099e41a&ipo=images",
			rym: "https://rateyourmusic.com/release/album/beck/odelay/",
			artist: "Beck",
			album: "Odelay",
		},
	],
	"2025-03-17": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoverartarchive.org%2Frelease%2F1e181619-38d2-48b8-bfcd-eb1963ebc649%2F27307567888-500.jpg&f=1&nofb=1&ipt=541da9c6dbf263d5d2d1bd6a0430524ceb7c93dcbd9da3ddfdbedaf3a3298c7f&ipo=images",
			rym: "https://rateyourmusic.com/release/album/sigur-ros/agaetis-byrjun/",
			artist: "Sigur Rós",
			album: "Ágætis byrjun",
		},
	],
	"2025-03-18": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.pacn.ws%2F1%2Fp%2F11m%2Fwindswept-adan-677245.1.jpg%3Fv%3Dqtft88&f=1&nofb=1&ipt=187024a674a6b3b0e072d2f50a3a408c8de9162597bc9e4cdbbe2408395c7af2&ipo=images",
			rym: "https://rateyourmusic.com/release/album/%E9%9D%92%E8%91%89%E5%B8%82%E5%AD%90/%E3%82%A2%E3%83%80%E3%83%B3%E3%81%AE%E9%A2%A8/",
			artist: "青葉市子 (Ichiko Aoba)",
			album: "アダンの風 (Windswept Adan)",
		},
	],
	"2025-03-19": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.apmcdn.org%2F50d01c6b074ea0f386aa59fb79a2c28ed8f2842b%2Funcropped%2F88c963-20130903-replacements-let-it-be-album-cover.jpg&f=1&nofb=1&ipt=6992170a8cb487eb5d9851d7c57a958c581de02c88fc96c6bae6dd74455a7b17&ipo=images",
			rym: "https://rateyourmusic.com/release/album/the-replacements/let-it-be/",
			artist: "The Replacements",
			album: "Let it Be",
		},
	],
	"2025-03-20": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fartrockstore.com%2Fcdn%2Fshop%2Fproducts%2Fartrockstore-nine-inch-nails-still-album_grande.jpg%3Fv%3D1683171190&f=1&nofb=1&ipt=75406764fa786dd5c9de4c5051d3803d59b40fee8886d2cb814a4b4a209b1425&ipo=images",
			rym: "https://rateyourmusic.com/release/album/nine-inch-nails/still/",
			artist: "Nine Inch Nails",
			album: "Still",
		},
	],
	"2025-03-21": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff4.bcbits.com%2Fimg%2Fa3047147313_10.jpg&f=1&nofb=1&ipt=336a831c44f7f53c180e99542eff617ee90cd6d8124e0003c94ee98520ea8166&ipo=images",
			rym: "https://rateyourmusic.com/release/comp/dawn-of-orion/a-celestial-ballad/",
			artist: "Dawn of Orion",
			album: "A Celestial Ballad",
		},
	],
	"2025-03-22": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2F65wQ0-LofLJtlwMNG-LmC2kJDq4%3D%2Ffit-in%2F450x444%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-698869-1228403559.jpeg.jpg&f=1&nofb=1&ipt=8fbee0d7ac726089fc38730d43b4263cc398cd8f359fb5455e1b115dc6214ebf&ipo=images",
			rym: "https://rateyourmusic.com/release/album/eightball-and-mjg/on-top-of-the-world/",
			artist: "8Ball & MJG",
			album: "On Top of the World",
		},
	],
	"2025-03-23": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsunmetalshop.com%2Fwp-content%2Fuploads%2F2021%2F03%2FBathory_Hammerheart-1024x1021.jpg&f=1&nofb=1&ipt=802b14045624f94883c4f7847fb9acb4d5bfa4e1ddb07366fa6d3f21c1a11bbb&ipo=images",
			rym: "https://rateyourmusic.com/release/album/bathory/hammerheart/",
			artist: "Bathory",
			album: "Hammerheart",
		},
	],
	"2025-03-24": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.metal-archives.com%2Fimages%2F4%2F1%2F6%2F4%2F416475.jpg%3F5243&f=1&nofb=1&ipt=05c3fb9b11dfd4dc1590c19194124146449db1950e07cac181efe255f0693e69&ipo=images",
			rym: "https://rateyourmusic.com/release/album/demolition-hammer/tortured-existence/",
			artist: "Demolition Hammer",
			album: "Tortured Existence",
		},
	],
	"2025-03-25": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblackwaterpdx.com%2Fstore%2Fwp-content%2Fuploads%2Fsites%2F2%2F2018%2F09%2FBathory-Self-Titled.jpg&f=1&nofb=1&ipt=9cd4a82fb5a019aad91f50dd899d8eb435dec392d0a3a549c312a7b0b2d2df76&ipo=images",
			rym: "https://rateyourmusic.com/release/album/bathory/bathory/",
			artist: "Bathory",
			album: "Bathory",
		},
	],
	"2025-03-26": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.discogs.com%2FZPLuFCBAnDZVanpceZoMvh_QXhzmsQa9FMXrXlRQjkg%2Frs%3Afit%2Fg%3Asm%2Fq%3A90%2Fh%3A600%2Fw%3A600%2FczM6Ly9kaXNjb2dz%2FLWRhdGFiYXNlLWlt%2FYWdlcy9SLTIxMjE4%2FMDYtMTI2NTIyNzA2%2FNS5qcGVn.jpeg&f=1&nofb=1&ipt=f63a9cd1244114c27582d9fb2010ad84f3c2d519ae85f42ac98289ad471e1b5b&ipo=images",
			rym: "https://rateyourmusic.com/release/album/die-kreuzen/die-kreuzen-3/",
			artist: "Die Kreuzen",
			album: "Die Kreuzen",
		},
	],
	"2025-03-27": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2F744525ad5e38fe941832dde9dd9f6e41.640x640x1.jpg&f=1&nofb=1&ipt=331524cabc71b864300b3273d4d09c69cc78c17580b2bc3bd377e7ebbd32e49d&ipo=images",
			rym: "https://rateyourmusic.com/release/album/lil-ugly-mane/three-sided-tape-volume-one/",
			artist: "Lil Ugly Mane",
			album: "Three Sided Tape Volume One",
		},
	],
	"2025-03-28": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.normanrecords.com%2Fartwork%2Flarge%2F11%2F207511-deafheaven-lonely-people-with-power.jpg&f=1&nofb=1&ipt=4d1e6027e331f0f68628472faf38acb2fae041faeda608810e530c562aba23f9&ipo=images",
			rym: "https://rateyourmusic.com/release/album/deafheaven/lonely-people-with-power/",
			artist: "Deafheaven",
			album: "Lonely People With Power",
		},
	],
	"2025-03-29": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdyingscene.com%2Fwp-content%2Fuploads%2F2023%2F11%2Funnamed-9-scaled.jpg&f=1&nofb=1&ipt=500d5fbff1e195de84095afafbece4a5ac6976d973ac683c36fac2702bbeff90&ipo=images",
			rym: "https://rateyourmusic.com/release/album/the-chisel/what-a-fucking-nightmare/",
			artist: "The Chisel",
			album: "What a Fucking Nightmare",
		},
	],
	"2025-03-30": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamepedia.cursecdn.com%2Fminecraft_gamepedia%2F2%2F2c%2FMinecraft_-_Volume_Beta_cover.jpg&f=1&nofb=1&ipt=5cf31597ad1da5d91fbadc5e8494c93dc87c6383568930ae9b3578372bfedc71",
			rym: "https://rateyourmusic.com/release/album/c418/minecraft-volume-beta/",
			artist: "C418",
			album: "Minecraft: Volume Beta",
		},
	],
	"2025-03-31": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F_YyqkHBkk1-0%2FS_AcW7_2j2I%2FAAAAAAAAAGQ%2FCCeVCoci1rk%2Fw1200-h630-p-k-no-nu%2F00-eightball_and_mjg-comin_out_hard.jpg&f=1&nofb=1&ipt=32be556c631803e30021d17c8fa21a40c5bc8f52924c09cdee45986698fc6649",
			rym: "https://rateyourmusic.com/release/album/eightball-and-mjg/comin-out-hard/",
			artist: "8Ball & MJG",
			album: "Comin' Out Hard",
		},
	],
	"2025-04-01": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdistortedsoundmag.com%2Fwp-content%2Fuploads%2F2020%2F10%2F10-Years-Gone-Deafheaven.jpg&f=1&nofb=1&ipt=6b055f632f7626f429d0cc4f7751fe020a289fdb6ba98284e06ccc5e9522cb44&ipo=images",
			rym: "https://rateyourmusic.com/release/additional/deafheaven/10-years-gone/",
			artist: "Deafheaven",
			album: "10 Years Gone",
		},
	],
	"2025-04-02": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoverartarchive.org%2Frelease%2Fb9a2011a-0644-43bb-8273-fba94b42df0f%2F30446924629-500.jpg&f=1&nofb=1&ipt=fb78a54d2888708680fd64127319e83710bef7ed921818cd0b6f9130ab0cc96b&ipo=images",
			rym: "https://rateyourmusic.com/release/mixtape/lil-ugly-mane/playaz-circle-1/",
			artist: "Lil Ugly Mane",
			album: "Playaz Circle",
		},
	],
	"2025-04-03": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-3cvNw62YVHY%2FWtArtL5uViI%2FAAAAAAAAO9g%2FURZYU4HOCRs-f2FecrVVq_1FpmskWqacQCLcBGAs%2Fs1600%2FTwilight%252Bof%252BThe%252BGods.jpg&f=1&nofb=1&ipt=a1f012af0df2afbfa6fd5ef613a8c8fb4c3c70b9876806a5f4859b895fd46e1d&ipo=images",
			rym: "https://rateyourmusic.com/release/album/bathory/twilight-of-the-gods/",
			artist: "Bathory",
			album: "Twilight of the Gods",
		},
	],
	"2025-04-04": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F6a%2Fe3%2Fb8%2F6ae3b89f6727411d200555e5b2df8f92--pavement-vinyl-lp.jpg&f=1&nofb=1&ipt=8c2850c66bcb4a38fa249526e4bcb073c4d6663ac7c8fccd0850d6540179bcdd&ipo=images",
			rym: "https://rateyourmusic.com/release/album/pavement/crooked-rain-crooked-rain-11/",
			artist: "Pavement",
			album: "Crooked Rain, Crooked Rain",
		},
	],
	"2025-04-05": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.hmv.com%2Fr%2Fw-1280%2Fhmv%2Ffiles%2F73%2F73e4e5d5-ddb0-4c03-8104-13f17a551f3f.jpg&f=1&nofb=1&ipt=1d096f6d4806717d90e813be7f8d1db03a5b8f8bc03b3bd4ce9f48ce7fcf975e&ipo=images",
			rym: "https://rateyourmusic.com/release/album/pavement/wowee-zowee/",
			artist: "Pavement",
			album: "Wowee Zowee",
		},
	],
	"2025-04-06": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0002%2F7053%2F2620%2Fproducts%2FPavement-WATERY-DOMESTIC_Y3VmP_500x500.jpg%3Fv%3D1684978888&f=1&nofb=1&ipt=06c8c9de8a3cbf2b76a514ca059f95b2768ead8d503a275ce63b3f8757e2c09d&ipo=images",
			rym: "https://rateyourmusic.com/release/ep/pavement/watery-domestic/",
			artist: "Pavement",
			album: "Watery, Domestic",
		},
	],
	"2025-04-07": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fyourlastrites.com%2Fwp-content%2Fuploads%2F2017%2F07%2FLeviathan-Massive-Conspiracy-Against-Life.jpg%3Ffit%3D1080%252C1080%26ssl%3D1&f=1&nofb=1&ipt=1e8ff710e6001516a25b68998bb410763c179df4c92f7db99a6d16fd9dbbf224&ipo=images",
			rym: "https://rateyourmusic.com/release/album/leviathan/massive-conspiracy-against-all-life/",
			artist: "Leviathan",
			album: "Massive Conspiracy Against All Life",
		},
	],
	"2025-04-08": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FBXHy6gwpEIg3HgWHae2A5wY6b3o%3D%2Ffit-in%2F600x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-4260887-1360009977-3114.jpeg.jpg&f=1&nofb=1&ipt=35d3f9adddebcd6eb0e523a8c3e47d8790db1e5283c1283e54dc9d0664730b0f",
			rym: "https://rateyourmusic.com/release/album/sacramentum/far-away-from-the-sun-8/",
			artist: "Sacramentum",
			album: "Far Away From the Sun",
		},
	],
	"2025-04-09": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff4.bcbits.com%2Fimg%2Fa2881869020_10.jpg&f=1&nofb=1&ipt=b73f2cfb7aba7180c96e75f2e772ed4240bafdd6b7c1226417e6b6ece224f5d3",
			rym: "https://rateyourmusic.com/release/album/panopticon/autumn-eternal/",
			artist: "Panopticon",
			album: "Autumn Eternal",
		},
	],
	"2025-04-10": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.metal-archives.com%2Fimages%2F3%2F4%2F3%2F5%2F343550.jpg%3F3731&f=1&nofb=1&ipt=a78a3b0573ec7dcfb1c892bf9a12818a55d3f32ee2bc2d2772e85dd607b99066",
			rym: "https://rateyourmusic.com/release/album/panopticon/kentucky/",
			artist: "Panopticon",
			album: "Kentucky",
		},
	],
	"2025-04-11": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51TjXWGpQML._SX300_SY300_QL70_ML2_.jpg&f=1&nofb=1&ipt=631f4805bc3e9a4d42f1b7196150782259bb8e8cae8b56f7013c1d58c2875811",
			rym: "https://rateyourmusic.com/release/album/gris/a-lame-enflammee-lame-constellee/",
			artist: "Gris",
			album: "À l'âme enflammée, l'âme constellée...",
		},
	],
	"2025-04-12": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.floodmagazine.com%2Fwp-content%2Fuploads%2F2021%2F04%2FKero-Kero-Bonito-Civilization-II.jpg&f=1&nofb=1&ipt=25343ff5e634c7df6b44d88b6bbeaa24a0240eefafe60c2754f10b7b13b2a4e9",
			rym: "https://rateyourmusic.com/release/ep/kero-kero-bonito/civilisation-ii/",
			artist: "Kero Kero Bonito",
			album: "Civilisation II",
		},
	],
	"2025-04-13": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.brooklynvegan.com%2Ffiles%2F2018%2F10%2Ftimenplacecover.jpg&f=1&nofb=1&ipt=24f083201d375785957b132677f59c8d4828e49c623a04ad2ac9a00e29ac7594",
			rym: "https://rateyourmusic.com/release/album/kero-kero-bonito/time-n-place/",
			artist: "Kero Kero Bonito",
			album: "Time 'n' Place",
		},
	],
	"2025-04-14": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2Fzva0IaArbMx-oeNB58gEJKP7cIw%3D%2Ffit-in%2F597x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-1885000-1425753863-6871.jpeg.jpg&f=1&nofb=1&ipt=48807377642d08a74645239c652ef30588ca274ebe0ca215c52c816d5c63afb4",
			rym: "https://rateyourmusic.com/release/ep/enslaved/hordanes-land/",
			artist: "Enslaved",
			album: "Hordanes Land",
		},
	],
	"2025-04-15": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.stereogum.com%2Fuploads%2F2016%2F10%2Fbonitogenerationartwork-1476414447-640x640.jpg&f=1&nofb=1&ipt=5ecf45b368eece944c38ecf7918f38702804b8a3afb84f129a234d9c63a35e52odal",
			rym: "https://rateyourmusic.com/release/album/kero-kero-bonito/bonito-generation/",
			artist: "Kero Kero Bonito",
			album: "Bonito Generation",
		},
	],
	"2025-04-16": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff4.bcbits.com%2Fimg%2Fa4283829553_9.jpg&f=1&nofb=1&ipt=152c7932ca341a9198449dd01cbd23fb948eedf2327414614d6e3101f8f9cc28",
			rym: "https://rateyourmusic.com/release/ep/serpent-column/endless-detainment/",
			artist: "Serpent Column",
			album: "Endless Detainment",
		},
	],
	"2025-04-17": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FXUPGDdaSHvAPRRRL_vPcOprKKgI%3D%2Ffit-in%2F500x500%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-5439544-1393392986-1042.jpeg.jpg&f=1&nofb=1&ipt=fef52f203ca14c8eb4a8d8ff2db2ccf450dbdcecc5c8dd4e0b392fb5668cda2e",
			rym: "https://rateyourmusic.com/release/album/soul-scream/the-deep/",
			artist: "Soul Scream",
			album: "The \"Deep\"",
		},
	],
	"2025-04-18": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis1-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic211%2Fv4%2F15%2Fed%2F41%2F15ed41fe-0909-94e7-634e-e2e5f12e26e5%2F196872645101.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=7d588dc5d72a69533933ea434f833a6d90352b0edc77c5453287e98a7322f1bb",
			rym: "https://rateyourmusic.com/release/ep/maruja/tir-na-nog/",
			artist: "Maruja",
			album: "Tír na nÓg ",
		},
	],
	"2025-04-19": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2F0c661320ce2df1933b32273e279e8eaa.640x640x1.jpg&f=1&nofb=1&ipt=d8542eb2e14d7922181b0a21775f9ec310bea7cda6889e2fa95a1fa24f3c3d99",
			rym: "https://rateyourmusic.com/release/ep/kero-kero-bonito/civilisation-i/",
			artist: "Kero Kero Bonito",
			album: "Civilisation I",
		},
	],
	"2025-04-20": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2Fs6P93lX9ypp-oN0ZM4ROFDyU23w%3D%2Ffit-in%2F600x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-12938604-1544930142-6976.jpeg.jpg&f=1&nofb=1&ipt=e674ca60bf0b60a3d9e2267a50e64ce78e03851896e2f92332f3f31f501b648f",
			rym: "https://rateyourmusic.com/release/ep/kero-kero-bonito/totep/",
			artist: "Kero Kero Bonito",
			album: "TOTEP",
		},
	],
	"2025-04-21": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fprodimage.images-bn.com%2Fpimages%2F0196006818425_p0_v1_s1200x630.jpg&f=1&nofb=1&ipt=659b734058ec16ab98ff1ac2aa9ef34c409b312e30470d577204a9e99ad75487",
			rym: "https://rateyourmusic.com/release/album/magdalena-bay/mercurial-world/",
			artist: "Magdalena Bay",
			album: "Mercurial World",
		},
	],
	"2025-04-22": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fakamai.sscdn.co%2Fuploadfile%2Fletras%2Falbuns%2F2%2Fd%2F2%2F5%2F570281490621604.jpg&f=1&nofb=1&ipt=5c25568ca6057e518a4ee4288a072244753fc16fd31653f7f7dea3a1bc2f046a",
			rym: "https://rateyourmusic.com/release/album/death-angel/the-ultra-violence/",
			artist: "Death Angel",
			album: "The Ultra-Violence",
		},
	],
	"2025-04-23": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.strobelight-shop.com%2Fout%2Fpictures%2Fmaster%2Fproduct%2F1%2Fgang_of_four-entertainment.jpg&f=1&nofb=1&ipt=669a677072ec210eb59971c1dab326de48bb186c0730d5da94a45999a9958a56",
			rym: "https://rateyourmusic.com/release/album/gang-of-four/entertainment/",
			artist: "Gang of Four",
			album: "Entertainment!",
		},
	],
	"2025-04-24": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff4.bcbits.com%2Fimg%2Fa2195043558_10.jpg&f=1&nofb=1&ipt=41f297b02f0b031d9d797e8f448764d2d985f5733b6e2b59bf031fd053c646af",
			rym: "https://rateyourmusic.com/release/ep/mgla/presence/",
			artist: "Mgła",
			album: "Presence",
		},
	],
	"2025-04-25": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.aftermath-music.com%2Fcdn%2Fshop%2Fproducts%2Fvedbuensende_thosewhocaressLP_1200x1200.jpg%3Fv%3D1668014461&f=1&nofb=1&ipt=81d8368d53de9951fc99c5c7da076024eed3db2beb0ebfca589022ab538572d3",
			rym: "https://rateyourmusic.com/release/ep/ved-buens-ende/those-who-caress-the-pale/",
			artist: "Ved Buens Ende.....",
			album: "Those Who Caress the Pale",
		},
	],
	"2025-04-26": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.music-bazaar.com%2Falbum-images%2Fvol2%2F125%2F125274%2F692987-big%2FSAP-cover.jpg&f=1&nofb=1&ipt=35300a74af888692972c42b8eddcfba8e2e9599590b4b87ace976a2dc21055a4",
			rym: "https://rateyourmusic.com/release/ep/alice-in-chains/sap/",
			artist: "Alice in Chains",
			album: "Sap",
		},
	],
	"2025-04-27": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2Fd8802ea3ec54e6bc89abf20b10f354ad.1000x1000x1.jpg&f=1&nofb=1&ipt=50ca224fb39ac895f6cb0ea03467353e1ad430b0ae378b564477c490164b461b",
			rym: "https://rateyourmusic.com/release/album/pavement/brighten-the-corners/",
			artist: "Pavement",
			album: "Brighten the Corners",
		},
	],
	"2025-04-28": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffthmb.tqn.com%2FQV0KgJ-m3KelYFQYbQOjhnHLyuU%3D%2F768x0%2Ffilters%3Ano_upscale()%2Fenslaved-vikingligr-58b97f8c3df78c353cde2e65.jpg&f=1&nofb=1&ipt=58ffa6503559ebc0e275c55d7fc39173aa94a1f6a873a096f3e40007efbc7806",
			rym: "https://rateyourmusic.com/release/album/enslaved/vikingligr-veldi/",
			artist: "Enslaved",
			album: "Vikingligr Veldi",
		},
	],
	"2025-04-29": [
		{
			image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.angrymetalguy.com%2Fwp-content%2Fuploads%2F2010%2F09%2FEnslaved-Axioma-Ethica-Odini-Cover.jpg&f=1&nofb=1&ipt=7a3fea200c0f6f6120735b166de85bd0064ffc5bc2d0d7202ad77f88bd3f1fdc",
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
