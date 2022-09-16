const User = require('./User');
const Found = require('./Found')
const Lost = require('./Lost')

Lost.belongsTo(User, {
    foreignKey: 'username',
});

Found.belongsTo(User, {
    foreignKey: 'username',
});

module.exports = { User, Found, Lost};
