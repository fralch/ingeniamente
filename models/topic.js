'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Topic.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'Category' });
    }
  }
  Topic.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    summary: DataTypes.TEXT,
    content: DataTypes.TEXT,
    image_url: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};