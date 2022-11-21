const express = require('express');
const router = express.Router({mergeParams: true});
const KPI2Conntroller = require('../controllers/kpi2.controller');

router.get('', KPI2Conntroller.get_kpi2);

module.exports = router;