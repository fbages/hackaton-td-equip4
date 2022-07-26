const db = require("../config/config")

module.exports = {

    getAllItems,
    getItem,
    createItem,
    updateItem,
    deleteItem

}

async function getAllItems(collection) {
    let llistat = await db[collection].find({});
    return llistat;
}

async function getItem(collection, index) {
    let item = await db[collection].findOne({ productId: index });
    return item;
}

async function createItem(collection, objectItem) {
    let lastItem = await db[collection].find({}).limit(1).sort({ productId: -1 });
    let index = (lastItem.length != 0) ? lastItem[0].productId : 0;
    objectItem.productId = index + 1;
    let newItem = await db[collection].create(objectItem)
    return newItem;
}

async function updateItem(collection, index, objectItem) {
    const opts = { runValidators: true };
    let item2 = await db[collection].updateOne({ productId: index },objectItem,opts);
    return item2;
}

async function deleteItem(collection, index) {
        item = await db[collection].deleteOne({ productId: index });
    return item;
}