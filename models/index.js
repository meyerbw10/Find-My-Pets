const User = require('./User');
const Lost = require('./Lost');
const Found = require('./Found');
const Animal = require('./Animal');

Gallery.hasMany(Painting, {
  foreignKey: 'animal_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'animal_id',
});

module.exports = { User, Found , Lost, Animal};
