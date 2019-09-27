import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://nczcoidb:DyatXKC88UiqO5mp21qW0qZ4fMRGz3vV@tuffi.db.elephantsql.com:5432/nczcoidb')

const models = {
    Pedido: sequelize.import('./pedido')
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models











/*const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const pedidoSchema = sequelize.define('Pedido', {
      cor: DataTypes.INT,
      email: DataTypes.STRING,
    });
  
    return pedidoSchema;
  }*/