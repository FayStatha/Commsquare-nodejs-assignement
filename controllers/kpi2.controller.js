const db = require("../models");
const {Op} = require("sequelize");
const {kpi2} = db;

exports.get_kpi2 = (req, res, next) => {
    let query = [];

    if (req.query.cell_id) {
        query.push({
            cell_id: req.query.cell_id
        })
    }

    if (req.query.interval) {
        query.push({
            interval: req.query.interval
        })
    }

    if (req.query.interval_start_timestamp_ge) {
        query.push({
            interval_start_timestamp: {
                [Op.gte]: req.query.interval_start_timestamp_ge
            }
        })
    }

    if (req.query.interval_start_timestamp_le) {
        query.push({
            interval_start_timestamp: {
                [Op.lte]: req.query.interval_start_timestamp_le
            }
        })
    }


    if (req.query.interval_end_timestamp_ge) {
        query.push({
            interval_end_timestamp: {
                [Op.gte]: req.query.interval_end_timestamp_ge
            }
        })
    }

    if (req.query.interval_end_timestamp_le) {
        query.push({
            interval_end_timestamp: {
                [Op.lte]: req.query.interval_end_timestamp_le
            }
        })
    }


    if (req.query.number_of_unique_users) {
        query.push({
            number_of_unique_users: req.query.number_of_unique_users
        })
    }

    kpi2.findAll(
        {where: query}
    )
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Something went wrong. Try again later!"
            });
        });
}
