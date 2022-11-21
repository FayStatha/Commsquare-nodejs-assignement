const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
    logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

kpi1 =  require("./kpi1.model")(sequelize, Sequelize);
kpi2 = require("./kpi2.model.js")(sequelize, Sequelize);

db.kpi1 = kpi1;
db.kpi2 = kpi2;

kpi1.sync();
kpi2.sync();

module.exports = db;