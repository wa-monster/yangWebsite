const router = require('koa-router')();

router.get('/', async (ctx, next) => {
	console.log('走了这个·1')
	await ctx.render('index', {
		title: 'Hello Koa 12awawf3122!'
	})
});

//新技术单独走一条线
router.get('/New/:id/index', async (ctx, next)=>{
	console.log('走了这个·2')
	console.log(`teach/${ctx.params.id}/index`)
	await ctx.render(`teach/${ctx.params.id}/index`)
})





//接口api
router.use('/api',require('./api/api').routes());





module.exports = router;
