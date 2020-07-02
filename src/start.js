/**
 * Build-In Package
 */
const http = require('http');
/**
 * Self-Dev Package
 */
const App = require('./app');
const CONFIG = require('./local-config.json');

const start = async () => {
  let context = { };
  context.config = CONFIG;
  const app = App(context);
  let httpServer = http.createServer(app.callback()).listen(8081);
};

start()
  .then(() => {
    console.log('start success!');
  })
  .catch((err) => {
    console.log(`start failed (message: ${err.message})`)
  });