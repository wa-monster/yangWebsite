const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
});

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
});

router.use('/api',require('./api').routes())


module.exports = router;
