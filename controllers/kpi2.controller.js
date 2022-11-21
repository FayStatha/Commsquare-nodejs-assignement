const db = require("../models");
const {kpi2} = db;

exports.get_kpi2 = (req, res, next) => {
    kpi2.findAll()
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
