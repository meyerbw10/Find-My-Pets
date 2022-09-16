const User = require('./User');
const Found = require('./Found')
const Lost = require('./Lost')
/*
Lost.belongsTo(User, {
    foreignKey: 'id',
});

Found.belongsTo(User, {
    foreignKey: 'id',
});*/

module.exports = { User, Found, Lost};
