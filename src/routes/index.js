const Router = require('koa-router');
const router = new Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes.routes());

module.exports = router;