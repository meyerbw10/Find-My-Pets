const router = require('express').Router();
const { Lost } = require('../../models')


router.get('/browselost', async (req, res) => {
  try{
    const lostPetData = await Found.findAll()
    // console.log(foundPetData)
    const losts = lostPetData.map((lost) => lost.get({plain: true}))
    console.log(losts)
    res.render('browselost', {losts})
  }
  catch (err){
    res.status(500).json(err)
  }
});

router.get('/', (req, res) => {
    Lost.findAll()
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });  
});

router.post('/', async (req, res) => {
    try {

        var isFixed = (req.body.fixed == "Yes");

        const lostPet = await Lost.create({
            name: req.body.name,
            weight: req.body.weight,
            breed: req.body.breed,
            sex: req.body.sex,
            fixed: isFixed,
            color: req.body.color,
            city: req.body.city,
            dateLost: req.body.dateLost,
        })
        res.status(200).json(lostPet);
        } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
  });
module.exports = router;