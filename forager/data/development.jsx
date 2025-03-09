// data/development.js
const filterData = [
    {
        title: "Tags",
        pills: [
            { name: "Favorites", active: false },
            { name: "Recents", active: false }
        ]
    },
    {
        title: "Regions",
        pills: [
            { name: "Texas", active: false },
            { name: "North America", active: false },
            { name: "South America", active: false },
            { name: "Asia", active: false },
            { name: "Europe", active: false },
            { name: "Africa", active: false }
        ]
    },
    {
        title: "Category",
        pills: [
            { name: "Poisonous", active: false },
            { name: "Medicinal", active: false },
            { name: "Mythical", active: false },
            { name: "Good for Broths", active: false }
        ]
    }
];


const mushroomData = [
    {
        image: "/icons/mushroom_1.png",
        title: "Death Cap",
        description: "One of the most poisonous mushrooms in the world.",
        toxic: true,
        scientificName: "Amanita phalloides",
        filters: {
            tags: ["Poisonous", "Deadly"],
            regions: ["Europe", "North America"],
            category: "Poisonous",
            favorites: false,
            recent: false
        },
        details: {
            capShape: { name: "Cap Shape", description: "Convex" },
            capColor: { name: "Cap Color", description: "Greenish" },
            capTexture: { name: "Cap Texture", description: "Smooth" },
            gillTypes: { name: "Gill Types", description: "Free" },
            gillColors: { name: "Gill Colors", description: "White" },
            stemShape: { name: "Stem Shape", description: "Cylindrical" },
            stemColor: { name: "Stem Color", description: "White" },
            stemRing: { name: "Stem Ring", description: "Present" },
            habitat: { name: "Habitat", description: "Solitary" }
        }
    },
    {
        image: "/icons/mushroom_2.png",
        title: "Shiitake",
        description: "A popular edible mushroom native to East Asia.",
        toxic: false,
        scientificName: "Lentinula edodes",
        filters: {
            tags: ["Edible", "Medicinal"],
            regions: ["Asia"],
            category: "Medicinal",
            favorites: false,
            recent: false
        },
        details: {
            capShape: { name: "Cap Shape", description: "Convex" },
            capColor: { name: "Cap Color", description: "Brown" },
            capTexture: { name: "Cap Texture", description: "Scaly" },
            gillTypes: { name: "Gill Types", description: "Attached" },
            gillColors: { name: "Gill Colors", description: "White" },
            stemShape: { name: "Stem Shape", description: "Cylindrical" },
            stemColor: { name: "Stem Color", description: "White" },
            stemRing: { name: "Stem Ring", description: "Absent" },
            habitat: { name: "Habitat", description: "Clustered" }
        }
    },
    {
        image: "/icons/mushroom_3.png",
        title: "Chanterelle",
        description: "A highly prized edible mushroom.",
        toxic: false,
        scientificName: "Cantharellus cibarius",
        filters: {
            tags: ["Edible", "Gourmet"],
            regions: ["North America", "Europe"],
            category: "Good for Broths",
            favorites: false,
            recent: false
        },
        details: {
            capShape: { name: "Cap Shape", description: "Convex" },
            capColor: { name: "Cap Color", description: "Yellow" },
            capTexture: { name: "Cap Texture", description: "Smooth" },
            gillTypes: { name: "Gill Types", description: "Decurrent" },
            gillColors: { name: "Gill Colors", description: "Yellow" },
            stemShape: { name: "Stem Shape", description: "Tapered" },
            stemColor: { name: "Stem Color", description: "Yellow" },
            stemRing: { name: "Stem Ring", description: "Absent" },
            habitat: { name: "Habitat", description: "Clustered" }
        }
    },
    {
        image: "/icons/mushroom_4.png",
        title: "Fly Agaric",
        description: "A toxic mushroom known for its distinctive red cap with white spots.",
        toxic: true,
        scientificName: "Amanita muscaria",
        filters: {
            tags: ["Poisonous", "Mythical"],
            regions: ["Europe", "Asia"],
            category: "Mythical",
            favorites: false,
            recent: false
        },
        details: {
            capShape: { name: "Cap Shape", description: "Convex" },
            capColor: { name: "Cap Color", description: "Red" },
            capTexture: { name: "Cap Texture", description: "Smooth" },
            gillTypes: { name: "Gill Types", description: "Free" },
            gillColors: { name: "Gill Colors", description: "White" },
            stemShape: { name: "Stem Shape", description: "Cylindrical" },
            stemColor: { name: "Stem Color", description: "White" },
            stemRing: { name: "Stem Ring", description: "Present" },
            habitat: { name: "Habitat", description: "Solitary" }
        }
    },
    {
        image: "/icons/mushroom_5.png",
        title: "Morel",
        description: "A highly sought-after edible mushroom.",
        toxic: false,
        scientificName: "Morchella esculenta",
        filters: {
            tags: ["Edible", "Gourmet"],
            regions: ["North America", "Europe"],
            category: "Good for Broths",
            favorites: false,
            recent: false
        },
        details: {
            capShape: { name: "Cap Shape", description: "Conical" },
            capColor: { name: "Cap Color", description: "Brown" },
            capTexture: { name: "Cap Texture", description: "Pitted" },
            gillTypes: { name: "Gill Types", description: "Absent" },
            gillColors: { name: "Gill Colors", description: "N/A" },
            stemShape: { name: "Stem Shape", description: "Cylindrical" },
            stemColor: { name: "Stem Color", description: "White" },
            stemRing: { name: "Stem Ring", description: "Absent" },
            habitat: { name: "Habitat", description: "Solitary" }
        }
    },
];

export {warningMessage, dummyData, mushroomData, filterData}; // Requires import {warningMessage, dummyData} from './data/development.js';
