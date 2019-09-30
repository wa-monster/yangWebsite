const router = require('koa-router')();
const mongoose = require('mongoose');
const multer = require('koa-multer');
const model= require('../../model/schema');
const util = require('../../util/util');
const { resSchema } = util;


//配置
let storage = multer.diskStorage({
	//文件保存路径
	destination: function (req, file, cb) {
		cb(null, 'public/upload')
	},
	//修改文件名称
	filename:function (req, file, cb) {
		let fileFormat = (file.originalname).split('.');
		cb(null,Date.now() + '.' + fileFormat[fileFormat.length - 1]);
	}
});
//加载配置
let upload = multer({
	storage: storage,
	limits:{
		fileSize:1024*1024*6, //限制在6mb,
		files:1, //文件数量
		fileds:10, //非文件字段的数量
	}
});

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
];

router.post('login',async (ctx, next)=>{
	let params = ctx.request.body.params;
	if(params.user === 'yang' && params.password === '123'){
		ctx.body = resSchema(101,{token:'123456789'})
	} else {
		ctx.body = resSchema(102)
	}
});
//获取文章
router.get('/gethomenotes', async (ctx, next)=>{
	console.log(ctx.request.query);
	let {pageSize, pageIndex} = ctx.request.query;
	if(!pageSize || !pageIndex){
		ctx.body = resSchema(502, '传递的参数错误');
		return
	}
	let noteList = notes.slice((pageIndex-1)*pageSize,pageIndex*pageSize);
	let total = notes.length;
	ctx.body = resSchema(501, {
		noteList,
		total,
	})
});
//测试mongodb
router.get('/testmongoose', async (ctx, next)=>{
	let doc = new model.test2({b:'casdasdasas'});
	await doc.save(function (err,doc) {
		console.log(doc)
	});
	ctx.body = {
		msg:'成功',
		data:'成功',
		success:true
	}
});
//发布文章
router.post('/addnote', async (ctx, next)=>{
	let body, data = {...ctx.request.body.params,status:1};
	await model.noteModel.update({status:2}, data,function (err,doc) {
		if(err){
			body=err;
			return
		}
		body =	resSchema(201,{msg:'发布成功'});
	});
	ctx.body = body
});
//保存文章
router.post('/savenote', async (ctx, next)=>{
	let body, data = {...ctx.request.body.params, status:2};
	await model.noteModel.findOneAndUpdate({status:2}, data,  {upsert:true}, function (err,doc) {
		if(err){
			body=err;
			return
		}
		body =	resSchema(201,{msg:'保存成功'});
	});
	ctx.body = body
});
//查询保存的文章
router.get('/findsavenote', async (ctx, next)=>{
	let body;
	await model.noteModel.findOne({status:2},"brief content createdAt title updatedAt _id __v",function (err,doc) {
		if(err){
			body=err;
			return
		}
		if(!doc){
			body =	resSchema(201,{title:'',brief:'',content:''});
		}else{
			body =	resSchema(201,doc);
		}
	});
	ctx.body = body
});
//查询发布的文章
router.get('/findpublishnote', async (ctx, next)=>{
	let body;
	await model.noteModel.find({status:1},"brief createdAt title updatedAt imgURL _id __v",function (err,doc) {
		if(err){
			body=err;
			return
		}
		if(!doc){
			body =	resSchema(201,{title:'',brief:'',content:''});
		}else{
			body =	resSchema(201,doc);
		}
	});
	body.total = body.data.length
	ctx.body = body
})
//添加文件
router.post('/upload',upload.single('file'),async (ctx, next)=>{
	// console.log(ctx.req.files);
	ctx.body = resSchema(201,{src:'http://localhost:3000/upload/'+ctx.req.file.filename,aaa:ctx.req.file})
});

router.get('/note/:id', async (ctx, next)=>{

});

module.exports = router;