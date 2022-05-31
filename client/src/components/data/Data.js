// dummy data to reference (same as seeds.js in server)

import duck_card from "../InfoImages/duck_card.jpg"
import robin_card from "../InfoImages/robin_card.jpg"
import owl_card from "../InfoImages/owl_card.jpg"
import peacock_card from "../InfoImages/peacock_card.jpg"
import pelican_card from "../InfoImages/pelican_card.jpg"
import penguin_card from "../InfoImages/penguin_card.jpg"

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
        realimg: "https://blog.happybeaks.co.uk/wp-content/uploads/2020/04/Peacock.png",
        cartoonimg: peacock_card,
        cartoonimgfeet: "magnified feet lol",
        activity: "day",
        food: "flower petals, ants, crickets",
        fly: true,
        feettype: "perch",
        beaklength: "short",
        beakwidth: "medium",
        feetinfo: "Sharp 'kicking thorns' for defence against predators."
    },
    {
        id: 4,
        name: "Pelican",
        realimg: "https://media.istockphoto.com/photos/pelicans-picture-id166672691?k=20&m=166672691&s=612x612&w=0&h=asjgLtYxdAxVjOxtCcdO_U9toYJvEukpfMcE09zFZBg=",
        cartoonimg: pelican_card,
        cartoonimgfeet: "magnified feet lol",
        activity: "day",
        food: "fish",
        fly: true,
        feettype: "webbed",
        beaklength: "long",
        beakwidth: "medium",
        feetinfo: "Webbed feet are great for swimming"
    },
    {
        id: 5,
        name: "Duck",
        realimg: "https://www.allaboutbirds.org/guide/assets/photo/308743051-480px.jpg",
        cartoonimg: duck_card,
        cartoonimgfeet: "magnified feet lol",
        activity: "day",
        food: "aquatic plants",
        fly: true,
        feettype: "webbed",
        beaklength: "medium",
        beakwidth: "medium",
        feetinfo: "Great for swimming and diving"
    },
    {
        id: 6,
        name: "Penguin",
        realimg: "irl pic",
        cartoonimg: penguin_card,
        cartoonimgfeet: "magnified feet lol",
        activity: "day",
        food: "krill, squid, fish",
        fly: false,
        feettype: "webbed",
        beaklength: "meidum",
        beakwidth: "medium",
        feetinfo: "Location on the body causes penguins to walk standing up."
    }
]

export default data;