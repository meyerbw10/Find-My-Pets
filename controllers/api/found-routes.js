const router = require('express').Router();
const { Found } = require('../../models')

router.get('/', async (req, res) => {
    const foundData = await Found.findAll().catch((err) => { 
        res.json(err);
      });
      // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
      const foundpets = foundData.map((found) => found.get({ plain: true }));
      // We render the template, 'all', passing in dishes, a new array of serialized objects.
      res.render('all', { foundpets });
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
            dateLost: req.body.dateLost,
        })
        res.status(200).json(foundPet);

        } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
  });





module.exports = router;