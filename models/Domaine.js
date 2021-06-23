const mongoose = require('mongoose')

const domaineSchema = new mongoose.Schema({
  idd: {
    type: String,
    required: [true, 'id  du domaine est obligatoire'],
    minlength: 1,
  },
  libelle: {
    type: String,
    required: [true, 'libelle du domaine  est obligatoire'],
  },
})

const Domaine = mongoose.model('Domaine', domaineSchema)

module.exports = Domaine
