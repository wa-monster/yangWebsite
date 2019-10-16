const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')

require('./model/db')
const index = require('./routes/index')
const users = require('./routes/users')


app.use(cors())
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
//动态设置，不同路由走不同文件
// app.use('/New/:id',require('koa-static')(__dirname + '/public/:id'))
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// //动态设置静态路径
// app.use(async (ctx, next) => {
// 	if(ctx.url.indexOf('New/') !== -1){
//
// 	}
// 	await next();
// 	ctx.response.body = 'Hello, koa2!';
// });


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
