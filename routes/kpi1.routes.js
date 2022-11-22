const express = require('express');
const router = express.Router({mergeParams: true});
const KPI1Conntroller = require('../controllers/kpi1.controller');
const { kpi1QueryParamsSchema } = require("../validators/kpi1.validator");
const KPI2Conntroller = require("../controllers/kpi2.controller");

router.get('', (req, res, next) => {
    const {value, error} = kpi1QueryParamsSchema.validateAsync(req.query, {abortEarly: false}).then(value => {
        req.query = value;
        KPI1Conntroller.get_kpi1(req, res, next);
    })
        .catch(error => {
            res.status(400);
            res.send('Invalid query params, error: ' + error.details.map(function (x) {
                return x.message
            }));
        });
});

module.exports = router;