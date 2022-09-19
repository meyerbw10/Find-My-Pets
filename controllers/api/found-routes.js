const router = require('express').Router();
const { Found } = require('../../models')
const withAuth = require('../../utils/auth');

router.get('/browsefound', async (req, res) => {
    try{
      const foundPetData = await Found.findAll()
      // console.log(foundPetData)
      const pets = foundPetData.map((pet) => pet.get({plain: true}))
      console.log(pets)
      res.render('browsefound', {pets})
    }
    catch (err){
      res.status(500).json(err)
    }
});

router.get('/', (req, res) => {
  Found.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });  
});

router.post('/', withAuth, async (req, res) => {
    try {

        var isFixed = (req.body.fixed == "Yes");

      
        const foundPet = await Found.create({
            name: req.body.name,
            weight: req.body.weight,
            breed: req.body.breed,
            sex: req.body.sex,
            fixed: isFixed,
            color: req.body.color,
            city: req.body.city,
            dateLost: req.body.dateLost,
            contact: req.body.email,
        })
        res.status(200).json(foundPet);
        } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
  });
  
module.exports = router;