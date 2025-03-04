// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

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
        image: "https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg",
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
        }
    },
    {
        image: "https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg",
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
        }
    },
    {
        image: "https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg",
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
        }
    },
    {
        image: "https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg",
        title: "Fly Agaric",
        description: "A toxic mushroom known for its distinctive red cap with white spots.",
        toxic: true,
        scienceName: "Amanita muscaria",
        filters: {
            tags: ["Poisonous", "Mythical"],
            regions: ["Europe", "Asia"],
            category: "Mythical",
            favorites: false,
            recent: false
        }
    },
    {
        image: "https://www.woodlandtrust.org.uk/media/48295/deathcap-fungi-amanita-phalloides-alamy-brgxfp-naturepix.jpg",
        title: "Morel",
        description: "A highly sought-after edible mushroom.",
        toxic: false,
        scienceName: "Morchella esculenta",
        filters: {
            tags: ["Edible", "Gourmet"],
            regions: ["North America", "Europe"],
            category: "Good for Broths",
            favorites: false,
            recent: false
        }
    },
];
// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData, mushroomData, filterData}; // Requires import {warningMessage, dummyData} from './data/development.js';
