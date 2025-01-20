const { boatInventory } = require("./fishingBoat.js")

const boatPurchases = boatInventory()

const mongerBuy = () => {
    const mongerPurchases = []
    boatPurchases.forEach(fish => {
        if (fish.amount >= 10 && fish.price <= 7.5) {
            const boughtFish = Object.assign({}, fish)
            boughtFish.amount = 10;
            mongerPurchases.push(boughtFish)
        }
    })
    return mongerPurchases
}

const mongerInventory = (chefBudget) => {
    const chefPurchases = []
    const mongerPurchases = mongerBuy()
    mongerPurchases.forEach(fish => {
        if (fish.price <= chefBudget){
            const soldFish = Object.assign({}, fish)
            soldFish.amount /= 2
            chefPurchases.push(soldFish)
        }
    })
    return chefPurchases
}


module.exports = { mongerInventory }