const express = require('express');
const router = express.Router({mergeParams: true});
const KPI2Conntroller = require('../controllers/kpi2.controller');
const {kpi2QueryParamsSchema} = require("../validators/kpi2.validator");

router.get('', (req, res) => {
    const {value, error} = kpi2QueryParamsSchema.validateAsync(req.query, {abortEarly: false}).
        then(value => {
            req.query = value;
            KPI2Conntroller.get_kpi2(req, res, next);
    })
        .catch(error => {
            res.status(400);
            res.send('Invalid query params, error: ' + error.details.map(function (x) {
                return x.message
            }));
        });
});

module.exports = router;
