
export interface Link {
    title: string;
    subtitle: string;
    description: string;
    image?: string;
    tags: string[];
    urls: { [display: string]: string }
}

export const Links: Link[] = [
    { 
        title: "[SC] SnowCrows",
        subtitle: "High End Raid Guild",
        description: "Highly optimised raid builds, benchmarks and compositions with class guides for each boss in raids.",
        image: "https://i.imgur.com/gTyJvyu.png",
        tags: ["Raids", "Guild"],
        urls: { "Website": "https://snowcrows.com", "Discord": "https://discord.com/invite/qTs63YH" }
    },
    {
        title: "[dT] Discretize",
        subtitle: "High End Fractal Guild",
        image: "https://c10.patreonusercontent.com/3/eyJ3IjoyMDB9/patreon-media/p/campaign/1733731/19185474d1ad4a48a940ea3cc91ee148/1.png?token-time=2145916800&token-hash=26Xotcj5Or1f8KzDkSvD1HRO-1VAr4-Qlu-vjYtnMtM%3D",
        description: "Fractal meta builds, guides and composition explanations as well as other tips and tricks.",
        tags: ["Fractals", "Guild"],
        urls: { "Website": "https://discretize.eu" }
    },
    {
        title: "Gw2 Wiki",
        subtitle: "Official Wiki for Guild Wars 2",
        description: "Can find all information about the game here, can also be accessed in game through the /wiki command.",
        tags: ["Tools"],
        urls: { "Website": "https://wiki.guildwars2.com" }
    },
    {
        title: "Gw2 Efficiency",
        subtitle: "Account Tools",
        description: "Lots of tool relating to your account including stats, inventory / bank viewer, crafting guides and currency conversion rates",
        tags: ["Tools"],
        urls: { "Website": "https://gw2efficiency.com" }
    },
    {
        title: "Gw2 Timer",
        subtitle: "World Boss / Event Timer",
        description: "Gives an overview of all events / world bosses on a timer.",
        tags: ["Tools"],
        urls: { "Website": "https://gw2timer.com" }
    },
    {
        title: "MetaBattle",
        subtitle: "Builds for Everyone / Everything",
        description: "Comprehensive list of builds for every gamemode and profession",
        image: "https://cdn.discordapp.com/icons/131781062987612160/10a37611d138d87e682fbf46f683296b.webp?size=128",
        tags: ["Open-World", "Fractals", "WvW", "PvP", "Raids"],
        urls: { "Website": "https://metabattle.com"}
    },
    {
        title: "[LN] Lucky Noobs",
        subtitle: "High End Raid Guild (DE)",
        description: "Meta raid builds compositions with class guides for each boss in raids.",
        tags: ["Raids", "Guild"],
        urls: { "Website": "https://lucky-noobs.com/", "Discord": "https://discord.com/invite/cAUcKCR" }
    },
    {
        title: "Gw2 Skills",
        subtitle: "Build Editor",
        description: "Allows you to create builds for any class and calculate stats without the investment",
        tags: ["Tools"],
        urls: { "Website": "http://en.gw2skills.net/editor/" }
    },
    {
        title: "Gw2 Mists",
        subtitle: "WvW Community",
        description: "Hub for all things WvW",
        image: "https://cdn.discordapp.com/icons/573878577733435414/0c9dbe29b74c37b2cedce2c88aa9e187.webp?size=128",
        tags: ["WvW"],
        urls: { "Website": "https://gw2mists.com/" }
    },
    {
        title: "Gw2 Crafts",
        subtitle: "Crafting Guide",
        description: "Crafting guides for every discpline with a gold breakdown and shopping list",
        tags: ["Tools"],
        urls: { "Website": "https://gw2crafts.net" }
    },
    {
        title: "Guild Jen",
        subtitle: "Achivement Guides",
        description: "Guides for living story achievements and various collections",
        tags: ["Open-World"],
        urls: { "Website": "https://guildjen.com/"}
    },
    {
        title: "[fast] Farming Community",
        subtitle: "Open World Farming Guild",
        description: "Farming builds, guides and dailies. Includes tables which detail the gold made from pretty much everything you can do ingame",
        image: "https://cdn.discordapp.com/icons/587288441532710927/98e8556c137d193114ec4ed8dc16df9d.webp?size=128",
        tags: ["Open-World", "Guild"],
        urls: { "Website": "https://fast.farming-community.eu/", "Discord": "https://discord.com/invite/PTCp2tC" }
    },
    {
        title: "Peu Research Center",
        subtitle: "Open World Farming Benchmarks",
        description: "Spreadsheets and tables for open world events, guides for resource gathering and an event timer.",
        tags: ["Open-World", "Tools"],
        urls: { "Website": "https://www.peuresearchcenter.com/index.html" }
    },
    {
        title: "[Hs] Hardstuck",
        subtitle: "PvX Guild",
        description: "Events, Builds and guides for every gamemode, regularly run tournaments and community events",
        image: "https://cdn.discordapp.com/icons/372890476082364427/24eb43af0a523d9280c4bff13c634aec.webp?size=128",
        tags: ["Raids", "Fractals", "PvP", "WvW", "Guild"],
        urls: { "Website": "https://hardstuck.gg", "Discord": "https://discord.com/invite/hardstuck" }
    },
    {
        title: "Overflow Trading Company",
        subtitle: "Trading Discord",
        description: "Player to Player trading and general discussion about the trading post / economy",
        image: "https://cdn.discordapp.com/icons/580908046364966922/a_26f40a84dc225e3748bf091532fbd1c8.webp?size=128",
        tags: ["Guild", "Tools"],
        urls: { "Discord": "https://discord.com/invite/8JwnGj7PAE" }
    },
    {
        title: "The Crossroads Inn",
        subtitle: "Raid Training EU",
        description: "Raid training guild for EU Players",
        image: "https://cdn.discordapp.com/icons/226398442082140160/03fe915815e9dbb6cdd18fe577fc6dd9.webp?size=128",
        tags: ["Raids"],
        urls: { "Discord": "https://discord.com/invite/hdhDE3v" }
    },
    {
        title: "Raid Training Initative",
        subtitle: "Raid Training EU",
        description: "Raid training guild for EU Players",
        tags: ["Raids"],
        urls: { "Discord": "https://discord.com/invite/rti" }
    },
    {
        title: "Gw2 Raid Academy",
        subtitle: "Raid Training NA",
        description: "Raid training guild for NA Players",
        tags: ["Raids"],
        urls: { "Discord": "https://discord.gg/mpVnEju" }
    },
    {
        title: "Gw2 Raid League",
        subtitle: "Raid Tournament",
        description: "Guilds sign up and compete against each other for the fastest raid kills with prizes for the fastest",
        image: "https://cdn.discordapp.com/icons/612110151243137025/db5059e0923fc190266ccb7430c58baf.webp?size=128",
        tags: ["Raids"],
        urls: { "Website": "https://gw2raidleague.com/", "Discord": "https://discord.gg/YkxCMWV" }
    },
    {
        title: "Arc DPS",
        subtitle: "DPS Meter",
        description: "DPS Meter with support for saving logs of raids, fractals and strikes.",
        image: "https://cdn.discordapp.com/icons/456611641526845473/48218117a3ff35b4ebb1c96ac3fdd09f.webp?size=128",
        tags: ["Tools"],
        urls: { "Website": "https://www.deltaconnected.com/arcdps/" }
    },
    {
        title: "DPS Reports",
        subtitle: "Log Hosting",
        description: "Allows recorded logs from Arc DPS to be shared with others, upload your logs and share the link",
        image: "https://cdn.discordapp.com/icons/447688963323330561/e59eabb389ccbc5a442b279422de18e3.webp?size=128",
        tags: ["Tools"],
        urls: { "Website": "https://dps.report/", "Discord": "https://discord.gg/fyEynB2" }
    },
    {
        title: "Gw2 Scratch",
        subtitle: "General Tools",
        description: "Collection of tools related to raiding and analysing logs",
        image: "https://cdn.discordapp.com/icons/543804828808249374/4d444c229e0ab747d01ffd54320a8bbc.webp?size=128",
        tags: ["Tools"],
        urls: { "Website": "https://gw2scratch.com/", "Discord": "https://discord.gg/rNXRS6ZkYe" }
    },
    {
        title: "Taco",
        subtitle: "Tactical Overlay",
        description: "Overlays a window on your screen displaying markers and guides ingame",
        tags: ["Tools"],
        urls: { "Website": "http://www.gw2taco.com/" }
    },
    {
        title: "Gw2 Wingman",
        subtitle: "Log Analysis",
        description: "Analysis logs recorded by Arc DPS and gives statistics on average profession performance, kill times etc.",
        image: "https://cdn.discordapp.com/icons/826421836992348171/ebcddaef0da609c355d0ba3ad82e4bb8.webp?size=128",
        tags: ["Tools"],
        urls: { "Website": "https://gw2wingman.nevermindcreations.de/" }
    }
]