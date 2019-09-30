const router = require('koa-router')();



//新技术单独走一条线
router.get('/New/:id', async (ctx, next)=>{
	await ctx.render(`${ctx.params.id}/index`)
})

router.get('/', async (ctx, next) => {
	await ctx.render('index', {
		title: 'Hello Koa 2!'
	})
});

//接口api
router.use('/api',require('./api/api').routes());





module.exports = router;
