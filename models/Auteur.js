const mongoose = require('mongoose')

const auteurSchema = new mongoose.Schema({
  ida: {
    type: String,
    required: [true, 'id  de l auteur est obligatoire'],
    minlength: 1,
  },
  nom: {
    type: String,
    required: [true, 'nom de l auteur est obligatoire'],
  },
  prenom: {
    type: String,
    required: [true, 'prenom de l auteur est obligatoire'],
  },
})

const Auteur = mongoose.model('Auteur', auteurSchema)

module.exports = Auteur
