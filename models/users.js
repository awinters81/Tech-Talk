const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// Creating the user model, When I log in, I have to make sure that my password is correct to start my session...

class users extends Model {
  password(login) {
    return bcrypt(login, this.password);
  }
}

users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
     
      }
    }

