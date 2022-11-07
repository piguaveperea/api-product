const db = require('../connetion_db')
const dTypes = require('sequelize').DataTypes
const ProductModel = db.define('producto',{
    id:{
        field: 'idProducto',
        type: dTypes.INTEGER,
        primaryKey: true
    },
    title:{
        field:'tituloProducto',
        type: dTypes.STRING
    },
    details:{
        field: 'detalleProducto',
        type: dTypes.STRING
    },
    color:{
        field: 'colorProducto',
        type: dTypes.STRING
    },
    price:{
        field: 'precioProducto',
        type: dTypes.DECIMAL
    }
},{
    tableName: 'producto',
    createdAt: false,
    updatedAt: false
})

module.exports = ProductModel