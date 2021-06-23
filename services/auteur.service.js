const Auteur = require('../models/Auteur')

async function getAllAuteur() {
    try {
        const result = await Auteur.find({});
        return result;
    } catch (error) {
        throw Error("Error while getting all auteur");
    }
}

async function createAuteur(Auteur) {
    try {
        const result = await Auteur.create(Auteur);
        return result;
    } catch (error) {
        throw Error("Error while creating new auteur");
    }
}

module.exports.getAllAuteur = getAllAuteur;
module.exports.createAuteur = createAuteur;
