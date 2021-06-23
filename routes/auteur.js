const express = require('express')
const router = express.Router()
const AuteurController = require('../controllers/auteur.controllers')

router.get("/", AuteurController.getAllAuteur)
router.post("/", AuteurController.createAuteur)

module.exports = router