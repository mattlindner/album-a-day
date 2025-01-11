// {
// 	image: "",
// 	rym: "",
//  artist: "",
//  album: "",
// }

const albums = {
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
      album: "HBO (Haitian Body Odor) ",
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
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.theaureview.com%2Fwp-content%2Fuploads%2F2020%2F01%2FEC21CA14-8B49-417F-A93A-A3C0573EDAF0.jpg&f=1&nofb=1&ipt=d6bae9e1a4fc2fe3503c720ceb230f26e8d5bb3588df0be62c47c06ff52f4e6a&ipo=images",
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
};
