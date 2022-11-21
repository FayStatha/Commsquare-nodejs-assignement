module.exports = (sequelize, Sequelize) => {
    const KPI2 = sequelize.define("kpi2", {
        cell_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: true
        },
        number_of_unique_users:{
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

    return KPI2;
};
