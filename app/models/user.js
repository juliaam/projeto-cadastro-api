import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db.js';

class User extends Model {}
User.init({
  // Model attributes are defined here
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_person: {
    allowNull: false,
    references: { model: 'person', key: 'id_person' },
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  created_at: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updated_at: {
    type: DataTypes.DATE
  }
}, {
  // Other model options go here
  freezeTableName: true,
  sequelize: sequelize,
  modelName: 'user', // We need to choose the model name
  timestamps: false,
  defaultScope: {
    attributes: { exclude: ['password'] },
  }
});

export default User;
