const router = require('koa-router')();
const mongoose = require('mongoose')
const test2= require('../model/schema')


let notes = [
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试一次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试二次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
	{
		imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
		title:"测试三次",
		brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
	},
]


router.get('/gethomenotes', async (ctx, next)=>{
	console.log(ctx.request.query);
	let {pageSize, pageIndex} = ctx.request.query;
	if(!pageSize || !pageIndex){
		ctx.body={
			data:null,
			success:false,
			msg:'传递的参数错误',
		}
		return
	}
	let data = notes.slice((pageIndex-1)*pageSize,pageIndex*pageSize)
	ctx.body = {
		data:data,
		success:true,
		msg:null,
		total:notes.length,
	}
});

router.get('/testmongoose', async (ctx, next)=>{
	let doc = new test2({b:'casdasdasas'})
	await doc.save(function (err,doc) {
		console.log(doc)
	})
	ctx.body = {
		msg:'成功',
		data:'成功',
		success:true
	}
})

module.exports = router