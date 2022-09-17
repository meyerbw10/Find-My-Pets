// router.get('/browsefound', async (req, res) => {
//     try{
//       const foundPetData = await Found.findAll()
//       // console.log(foundPetData)
//       const pets = foundPetData.map((pet) => pet.get({plain: true}))
//       console.log(pets)
//       res.render('browsefound', {pets})
//     }
//     catch (err){
//       res.status(500).json(err)
//     }
// });