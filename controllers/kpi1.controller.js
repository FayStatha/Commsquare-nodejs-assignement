const db = require("../models");
const {kpi1} = db;
const {Op} = require("sequelize");


exports.get_kpi1 = (req, res, next) => {
    let query = [];

    if (req.query.service_id) {
        query.push({
            service_id: req.query.service_id
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


    if (req.query.total_bytes) {
        query.push({
            total_bytes: req.query.total_bytes
        })
    }

    kpi1.findAll(
        {where: query}
    )
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving answers."
            });
        });
}
