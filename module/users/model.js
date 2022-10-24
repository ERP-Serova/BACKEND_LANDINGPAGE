const { DataTypes } = require('sequelize');
const { sq } = require('../../config/connection');

const users = sq.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    company_name: {
        type: DataTypes.STRING
    },
    job_title: {
        type: DataTypes.STRING
    },
    phone_number: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
},
    {
        paranoid: true,
        freezeTableName: true
    });

module.exports = users