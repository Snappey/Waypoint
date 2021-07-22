
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
        tags: ["Raids", "Guild"],
        urls: { "Website": "https://snowcrows.com", "Discord": "https://discord.com/invite/qTs63YH" }
    },
    {
        title: "[dT] Discretize",
        subtitle: "High End Fractal Guild",
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
        tags: ["Raids", "Fractals", "PvP", "WvW", "Guild"],
        urls: { "Website": "https://hardstuck.gg", "Discord": "https://discord.com/invite/hardstuck" }
    },
    {
        title: "Overflow Trading Company",
        subtitle: "Trading Discord",
        description: "Player to Player trading and general discussion about the trading post / economy",
        tags: ["Guild", "Tools"],
        urls: { "Discord": "https://discord.com/invite/8JwnGj7PAE" }
    },
    {
        title: "The Crossroads Inn",
        subtitle: "Raid Training EU",
        description: "Raid training guild for EU Players",
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
        tags: ["Raids"],
        urls: { "Website": "https://gw2raidleague.com/", "Discord": "https://discord.gg/YkxCMWV" }
    },
    {
        title: "Arc DPS",
        subtitle: "DPS Meter",
        description: "DPS Meter with support for saving logs of raids, fractals and strikes.",
        tags: ["Tools"],
        urls: { "Website": "https://www.deltaconnected.com/arcdps/" }
    },
    {
        title: "DPS Reports",
        subtitle: "Log Hosting",
        description: "Allows recorded logs from Arc DPS to be shared with others, upload your logs and share the link",
        tags: ["Tools"],
        urls: { "Website": "https://dps.report/", "Discord": "https://discord.gg/fyEynB2" }
    },
    {
        title: "Gw2 Scratch",
        subtitle: "General Tools",
        description: "Collection of tools related to raiding and analysing logs",
        tags: ["Tools"],
        urls: { "Website": "https://gw2scratch.com/", "Discord": "https://discord.gg/rNXRS6ZkYe" }
    },
    {
        title: "TaCo",
        subtitle: "Tactical Overlay",
        description: "Overlays a window on your screen displaying markers and guides ingame",
        tags: ["Tools"],
        urls: { "Website": "http://www.gw2taco.com/" }
    },
    {
        title: "Gw2 Wingman",
        subtitle: "Log Analysis",
        description: "Analysis logs recorded by Arc DPS and gives statistics on average profession performance, kill times etc.",
        tags: ["Tools"],
        urls: { "Website": "https://gw2wingman.nevermindcreations.de/" }
    }
]