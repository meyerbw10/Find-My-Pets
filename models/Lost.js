const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lost extends Model {}

// Lost defines lost pets
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

Lost.init(
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
      dateLost: {
        type: DataTypes.DATEONLY,
      },
      city: {
        type: DataTypes.STRING,
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
    modelName: 'lost',
  }
);

module.exports = Lost;