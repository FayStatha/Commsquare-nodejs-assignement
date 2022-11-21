const express = require('express');
const KPI1Routes = require('./kpi1.routes');
const KPI2Routes = require('./kpi2.routes');
const router = express.Router();

router.use('/kpi1', KPI1Routes);
router.use('/kpi2', KPI2Routes);

module.exports = router;
