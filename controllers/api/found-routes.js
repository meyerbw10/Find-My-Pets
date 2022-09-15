const router = require('express').Router();
const { Found } = require('../../models')

router.get('/', (req, res) => {
    Found.findAll()
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });  
});

router.post('/', async (req, res) => {
    try {
        const foundPet = await Found.create({
            id: req.body.id,
            name: req.body.name,
            weight: req.body.weight,
            breed: req.body.breed,
            sex: req.body.sex,
            fixed: req.body.fixed,
            color: req.body.color,
            city: req.body.city,
            dateLost: req.body.dateLost,
        })
        res.status(200).json(foundPet);

        } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
  });
module.exports = router;