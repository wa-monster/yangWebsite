const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
});

//新技术单独走一条线
router.get('/New/:id', async (ctx, next)=>{

})
//接口api
router.use('/api',require('./api').routes());





module.exports = router;
