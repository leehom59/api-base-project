const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Routes = require('./routes');

module.exports = (context) => {
  const app = new Koa();

  app.use(bodyParser());

  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 200;
      let data = {
        path: ctx.path,
        code: err.code || '500',
        message: err.message,
        // stack: JSON.stringify(err.stack),
        data: err.data || null
      };
      ctx.body = data;
      ctx.app.emit('error', err, ctx);
    }
  });

  app.use(Routes.routes());

  app.on('error', async (err, ctx) => {
    console.log(err.message);
  });

  return app;
};