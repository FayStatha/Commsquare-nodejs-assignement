const db = require("../models");
const {kpi1} = db;

exports.get_kpi1 = (req, res, next) => {
    // req.query
    kpi1.findAll()
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
