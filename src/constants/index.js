import { instagram, soundcloud, twitter, youtube, tiktok, likethis, techouseset, brave } from "../assets";

export const navLinks = [
    {
        id: "home",
        icon: "uil uil-estate",
        title: "Home",
        page: false
    },
    {
        id: "about",
        icon: "uil uil-user",
        title: "About",
        page: false
    },
    {
        id: "releases",
        icon: "uil uil-rocket",
        title: "Releases",
        page: false
    },
    {
        id: "contact",
        icon: "uil uil-envelope",
        title: "Contact",
        page: false
      },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/h3lixmusic/",
    },
    {
        id: "social-media-2",
        icon: soundcloud,
        link: "https://soundcloud.com/h3lix_music",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://twitter.com/h3lixmusic",
    },
    {
        id: "social-media-4",
        icon: youtube,
        link: "https://www.youtube.com/@h3lixmusic",
    },
];

export const releases = [
    {
        id: 1,
        image: likethis,
        name: "H3LIX - Like This",
        link: "https://open.spotify.com/intl-es/track/5n6sRNSqwGMfPY8uOGTcVC?si=231227b4e0fa42d2"
    },
    {
        id: 2,
        image: techouseset,
        name: "H3LIX - Tech House Mix",
        link: "https://www.youtube.com/watch?v=qlkD_ug27o4&t=253s&ab_channel=H3LIXMUSIC"
    },
    {
        id: 3,
        image: brave,
        name: "Sikdope X Dux N Bass - Brave (H3LIX-Bootleg)",
        link: "https://www.youtube.com/watch?v=i6NY7p_SoqU&ab_channel=H3LIXMUSIC"
    },
]

export const videos = [
    {
        id: 1,
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8VQ5qZ5hVDU?si=ZdRfwfRe4r88ZYHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {
        id: 2,
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/i6NY7p_SoqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
]