// dummy data to reference (same as seeds.js in server)

import duck_card from "../InfoImages/duck_card.jpg"
import robin_card from "../InfoImages/robin_card.jpg"
import owl_card from "../InfoImages/owl_card.jpg"
import peacock_card from "../InfoImages/peacock_card.jpg"
import pelican_card from "../InfoImages/pelican_card.jpg"
import penguin_card from "../InfoImages/penguin_card.jpg"
import robin_mag from "../InfoImages/robin-mag.png"
import robin_no_mag from "../InfoImages/robin-no-mag.png"
import duck_mag from "../InfoImages/duck-mag.png"
import duck_no_mag from "../InfoImages/duck-no-mag.png"
import owl_mag from "../InfoImages/owl-mag.png"
import owl_no_mag from "../InfoImages/owl-no-mag.png"
import pelican_no_mag from "../InfoImages/pelican-no-mag.png"
import pelican_mag from "../InfoImages/pelican-mag.png"
import peacock_mag from "../InfoImages/peacock-mag.png"
import peacock_no_mag from "../InfoImages/peacock-no-mag.png"
import penguin_no_mag from "../InfoImages/penguin-no-mag.png"
import penguin_mag from "../InfoImages/penguin-mag.png"



const data = [
    {
        id: 1,
        name: "Robin",
        realimg: robin_no_mag,
        cartoonimg: robin_card,
        cartoonimgfeet: robin_mag,
        activity: "Day",
        food: "Seeds, insects",
        fly: true,
        feettype: "Perching",
        beak: "Small, long and thin. Perfect for pulling worms from the ground.",
        feetinfo: "Sharp claws for perching on branches."
    },
    {
        id: 2,
        name: "Owl",
        realimg: owl_no_mag,
        cartoonimg: owl_card,
        cartoonimgfeet: owl_mag,
        activity: "Night",
        food: "Mice, insects",
        fly: true,
        feettype: "Grasping",
        beak: "Strong, curved and powerful. Good to bite into food.",
        feetinfo: "Sharp claws for hunting mice."
    },
    {
        id: 3,
        name: "Peacock",
        realimg: peacock_no_mag,
        cartoonimg: peacock_card,
        cartoonimgfeet: peacock_mag,
        activity: "Day",
        food: "Flower petals, snails, crickets",
        fly: true,
        feettype: "Perching",
        beak: "Short, thick, round. Perfect for pecking at ants.",
        feetinfo: "Sharp claws for scratching the ground."
    },
    {
        id: 4,
        name: "Pelican",
        realimg: pelican_no_mag,
        cartoonimg: pelican_card,
        cartoonimgfeet: pelican_mag,
        activity: "Day",
        food: "Fish",
        fly: true,
        feettype: "Webbed",
        beak: "Huge, long and expandable. Super for scooping up fish.",
        feetinfo: "Large webbed feet for swimming."
    },
    {
        id: 5,
        name: "Duck",
        realimg: duck_no_mag,
        cartoonimg: duck_card,
        cartoonimgfeet: duck_mag,
        activity: "Day",
        food: "Water plants",
        fly: true,
        feettype: "Webbed",
        beak: "Broad, flat, strong. Brilliant for nibbling grass.",
        feetinfo: "Webbed for swimming and diving."
    },
    {
        id: 6,
        name: "Penguin",
        realimg: penguin_no_mag,
        cartoonimg: penguin_card,
        cartoonimgfeet: penguin_mag,
        activity: "Day",
        food: "Fish",
        fly: false,
        feettype: "Webbed",
        beak: "Long, thin and curved. Great to grab and hold onto the fish",
        feetinfo: "Their position lets the penguin stand up."
    }
]

export default data;