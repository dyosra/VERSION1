const LivreService = require('../services/livre.service')

const getAllLivre = async (req, res) => {
    try {
        const result = await LivreService.getAllLivre()
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

const createLivre = async (req, res) => {
    try {
        const result = await LivreService.createLivre(req.body.livre)
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}

module.exports.getAllLivre = getAllLivre;
module.exports.createLivre = createLivre;