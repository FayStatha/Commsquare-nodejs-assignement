// Configuration for the remote database
module.exports = {
    HOST: "surus.db.elephantsql.com",
    USER: "besdmvcy",
    PASSWORD: "MpEUDft-bo_1w3GdHeZO3I35bHbc3qd1",
    DB: "besdmvcy",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
