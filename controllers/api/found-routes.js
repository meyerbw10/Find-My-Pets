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

        var isFixed;
        if(req.body.fixed == "yes") {
          isFixed = true;
        } else {
          isFixed = false;
        }

        const foundPet = await Found.create({
            name: req.body.name,
            weight: req.body.weight,
            breed: req.body.breed,
            sex: req.body.sex,
            fixed: isFixed,
            color: req.body.color,
            city: req.body.city,
            dateLost: req.body.dateLost,
        })
        res.status(200).json(foundPet);
        console.log('it worked!')

        } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
  });
module.exports = router;