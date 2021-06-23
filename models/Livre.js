const mongoose = require('mongoose')
const livreSchema = new mongoose.Schema({
    num: {
        type: String,
        required: [true, "Le numero de livre est obligatoire!"],
    },
    titre: {
        type: String,
        required: [true, "Le titre de livre est obligatoire!"],
    },
    nb_page: {
        type: Number
    },
  
    langue: {
        type: String
    },  
})
const Livre = mongoose.model('Livre', livreSchema)
module.exports = Livre