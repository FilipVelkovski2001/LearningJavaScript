// Manipulating Complex Objects

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "formats": [
            "CD",
            "Blu-Ray",
            "Digital"
        ],
        "gold": true
    },

    {
        "artist": "Beuau Carnes",
        "title": "Cereal Man",
        "formats": [
            "CD",
            "Youtube video",
            "Spotify"
        ],
        "gold": false         
    }
];

// Accesing Nested Object Properties

var myStorage = {
    "car":{
        "inside":{
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

// Nested Arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]        
        
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];

console.log(secondTree);