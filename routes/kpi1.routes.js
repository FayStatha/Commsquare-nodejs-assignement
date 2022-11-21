const express = require('express');
const router = express.Router({mergeParams: true});
const KPI1Conntroller = require('../controllers/kpi1.controller');

router.get('', KPI1Conntroller.get_kpi1);

module.exports = router;