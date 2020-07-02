const Router = require('koa-router');
const router = new Router();

router
  .get('/check', async (ctx) => {
    ctx.model = { message: 'ok'};
  });

module.exports = router;