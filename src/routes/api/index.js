const Router = require('koa-router');
const ApiError = require('../../lib/apiError');
const router = new Router();

router.use(async (ctx, next) => {
  ctx.throwApiError = ApiError.throw;
  await next();
});

router.use(async (ctx, next) => {
  await next();
  ctx.model = ctx.model || { };
  ctx.model.code = '200';
  ctx.model.message = ctx.model.message || 'success';
  ctx.body = ctx.model;
});

router
  .use('/health', require('./health').routes());

module.exports = router;