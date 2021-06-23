const AuteurService = require('../services/auteur.service')

const getAllAuteur = async (req, res) => {
    try {
        const result = await AuteurService.getAllAuteur()
        res.json({
            totalItems: result.length,
            data: result,
            message: "success",
            page: 1,
            limit: 30
        })
    } catch (error) {
        res.send(error)
    }
}

const createAuteur = async (req, res) => {
    try {
        const result = await AuteurService.createAuteur(req.body.livre)
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}

module.exports.getAllAuteur = getAllAuteur;
module.exports.createAuteur = createAuteur;