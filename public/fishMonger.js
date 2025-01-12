//const { getBoatInventory } = require("./fishingBoat.js")

import { getBoatInventory } from "./fishingBoat.js"

const boatInventory = getBoatInventory()

// Object Array version functions
// let mongerInventory = []
// let chefInventory = []

// const mongerPurchases = () => {
//     boatInventory.forEach(fish => {
//         if (fish.amount > 10 && fish.price < 7.5) {
//             fish.amount = 10
//             mongerInventory.push(fish)
//         }
//     }); 
//     return mongerInventory
// }

// export const chefPurchases = (chefPrice) => {
//     mongerInventory = mongerPurchases()
//     chefInventory = mongerInventory.filter(fish => fish.price <= chefPrice)

//     if (chefInventory.length > 0){
//         updateInventory()
//     }
//     return chefInventory
// }

// const updateInventory = () => {
//     mongerInventory.forEach(mongerFish => {
//         const matchingFish = chefInventory.find(chefFish => chefFish.species === mongerFish.species);  
//         if (matchingFish) {
//             matchingFish.amount /= 2;
//         }
//     });
// }

//Map version functions 
let mongerInventory = new Map()
let chefInventory = new Map()

const mongerPurchases = () => {
    boatInventory.forEach(fish => {
        if (fish.amount > 10 && fish.price < 7.5) {
            fish.amount = 10
            mongerInventory.set(fish.id, fish)
        }
    })
    return mongerInventory
}

export const chefPurchases = (chefPrice) => {
    mongerInventory = mongerPurchases()
    mongerInventory.forEach(fish => {
        if (fish.price <= chefPrice){
            chefInventory.set(fish.id, fish)
        }
    })
    updateInventory()
    return chefInventory
}

const updateInventory = () => {

    // Optimized solution O(n + m)
    const chefFishMap = new Map()
    chefInventory.forEach(fish => {
        chefFishMap.set(fish.species, fish)
    });

    mongerInventory.forEach(mongerFish => {
        const chefFish = chefFishMap.get(mongerFish.species)
        if (chefFish){
            chefFish.amount /= 2
        }
    })

    // // Nested loop solution (brute force) O(n * m)
    // mongerInventory.forEach(mongerFish => {
    //     chefInventory.forEach(chefFish => {
    //         if (mongerFish.species === chefFish.species){
    //             chefFish.amount /= 2
    //         }
    //     })
    // })
}

const getMongerInventory = () => mongerInventory

//module.exports = { mongerPurchases, chefPurchases, getMongerInventory }