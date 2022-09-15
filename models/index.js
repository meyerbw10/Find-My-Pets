const User = require('./User');
const Found = require('./Found')
const Lost = require('./Lost')


// Gallery.hasMany(Painting, {
//   foreignKey: 'animal_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'animal_id',
// });

module.exports = { User, Found, Lost};
