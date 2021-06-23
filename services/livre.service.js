const Livre=require('../models/Livre')
async function getAllLivre() {
    try {
        const result = await Livre.find({});
        return result;
    } catch (error) {
        throw Error("Error while getting all livre");
    }
}

async function createLivre(livre) {
    try {
        const result = await Livre.create(livre);
        return result;
    } catch (error) {
        throw Error("Error while creating new livre");
    }
}

module.exports.getAllLivre = getAllLivre;
module.exports.createLivre = createLivre;
