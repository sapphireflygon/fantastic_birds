// dummy data to reference (same as seeds.js in server)

import duck_card from "./InfoImages/duck_card.jpg"
import robin_card from "./InfoImages/robin_card.jpg"
import owl_card from "./InfoImages/owl_card.jpg"
import peacock_card from "./InfoImages/peacock_card.jpg"
import pelican_card from "./InfoImages/pelican_card.jpg"
// import penguin_card from "./InfoImages/penguin_carg.jpg"

const data = [
    {
        id: 1,
        name: "Robin",
        realimg: "https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/bird-species-illustrations/robin_adult_1200x675.jpg?preset=largelandscape_mobile",
        cartoonimg: robin_card,
        cartoonimgfeet: "magnified feet lol",
        activity: "day",
        food: "seeds, insects",
        fly: true,
        feettype: "perch",
        beaklength: "short",
        beakwidth: "small",
        feetinfo: "Short claws for perching on branches"
    },
    {
        id: 2,
        name: "Owl",
        realimg: "https://petapixel.com/assets/uploads/2021/10/babybarnowl.jpg",
        cartoonimg: owl_card,
        cartoonimgfeet: "magnified feet lol",
        activity: "night",
        food: "mice, insects",
        fly: true,
        feettype: "grasping",
        beaklength: "short",
        beakwidth: "medium",
        feetinfo: "Sharp claws for hunting mice"
    },
    {
        id: 3,
        name: "Peacock",
        realimg: "irl pic",
        cartoonimg: peacock_card,
        cartoonimgfeet: "magnified feet lol",
        activity: "day",
        food: "whatever they eat",
        fly: true,
        feettype: "???",
        beaklength: "???",
        beakwidth: "???",
        feetinfo: "???"
    },
    {
        id: 4,
        name: "Pelican",
        realimg: "irl pic",
        cartoonimg: pelican_card,
        cartoonimgfeet: "magnified feet lol",
        activity: "day",
        food: "whatever they eat",
        fly: true,
        feettype: "???",
        beaklength: "???",
        beakwidth: "???",
        feetinfo: "???"
    },
    {
        id: 5,
        name: "Duck",
        realimg: "irl pic",
        cartoonimg: duck_card,
        cartoonimgfeet: "magnified feet lol",
        activity: "day",
        food: "whatever they eat",
        fly: true,
        feettype: "???",
        beaklength: "???",
        beakwidth: "???",
        feetinfo: "???"
    },
    {
        id: 6,
        name: "Penguin",
        realimg: "irl pic",
        cartoonimg: "",
        cartoonimgfeet: "magnified feet lol",
        activity: "day",
        food: "whatever they eat",
        fly: false,
        feettype: "???",
        beaklength: "???",
        beakwidth: "???",
        feetinfo: "???"
    }
]

export default data;