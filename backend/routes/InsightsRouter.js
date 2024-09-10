const { viewInsights } = require('../controllers/InsightChart');

const router = require('express').Router()

router.get('/', viewInsights )

module.exports = router;