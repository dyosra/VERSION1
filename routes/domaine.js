const express = require('express')
const Domaine = require('../models/Domaine')

const router = express.Router()

// Route to get all domaines
router.get('/', (req, res, next) => {
  let idd = req.query.name;
  let query = {};

  if (idd) {
    query = { name: { $regex: '.*' + idd + '.*' } }
  }

  Domaine.find(query)
    .then(domaine => {
      res.json(domaine)
    })
    .catch(err => next(err))
})

// Route to add a domaine
router.post('/', (req, res, next) => {
  let { idd, libelle} = req.body
  Country.create({ idd, libelle })
    .then(domaine => {
      res.json({
        success: true,
        domaine,
      })
    })
    .catch(err => next(err))
})

//route to delete a domaine
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Domaine.findByIdAndDelete(id)
    .then(deletedDomaine => {
      res.json(deletedDomaine)
    })
    .catch(error => {
      next(error)
    })
})

//route to update a domaine
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const body = req.body.data;

  Domaine.findByIdAndUpdate(id, body)
    .then(updatedDomaine => {
      res.json(updatedDomaine)
    })
    .catch(error => {
      next(error)
    })
})

module.exports = router
