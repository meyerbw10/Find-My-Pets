const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Found extends Model {}

// Found is a child model of the Animal model and defines animals that have been found.
// Identifying characteristics:
//  * Id (Number)
//  * Name (String)
//  * Weight (Number)
//  * Breed (String)
//  * Sex (Boolean)
//  * Spayed/fixed (Boolean)
//  * Color (Up to three colors)
//  * Comments (String)
//  * Approximate date lost (Date)
//  * Approximate time found (Date)

Found.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER,
      },
      breed: {
        type: DataTypes.STRING,
      },
      sex: {
        type: DataTypes.STRING,
      },
      fixed: {
        type: DataTypes.BOOLEAN,
      },
      color: {
        type: DataTypes.JSON,
      },
      dateFound: {
        type: DataTypes.DATEONLY,
      },
      animal_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'found',
  }
);

module.exports = Found;