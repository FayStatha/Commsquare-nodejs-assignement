module.exports = (sequelize, Sequelize) => {
    const KPI1 = sequelize.define("kpi1", {
        service_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        total_bytes:{
            type: Sequelize.INTEGER,
            allowNull: true
        },
        interval_start_timestamp:{
            type: Sequelize.FLOAT,
            allowNull: true
        },
        interval_end_timestamp:{
            type: Sequelize.FLOAT,
            allowNull: true
        },
        interval:{
            type: Sequelize.ENUM("1-hour", "5-minutes"),
            allowNull: true
        }
    }, {
        timestamps: false
    });

    return KPI1;
};
