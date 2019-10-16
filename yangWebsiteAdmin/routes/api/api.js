const router = require('koa-router')();
const mongoose = require('mongoose');
const multer = require('koa-multer');
const fs = require('fs');//解压文件
const unzip = require('unzip');//解压文件
const model= require('../../model/schema');
const util = require('../../util/util');
const { resSchema } = util;
const base = require('../../config/site')

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

//配置
let filestorage = multer.diskStorage({
	//文件保存路径
	destination: function (req, file, cb) {
		cb(null, 'public/teach')
	},
	//修改文件名称
	filename:function (req, file, cb) {
		let fileFormat = (file.originalname).split('.');
		cb(null,'nt' + Date.now() + '.' + fileFormat[fileFormat.length - 1]);
	}
});
//加载配置
let fileupload = multer({
	storage: filestorage,
	limits:{
		fileSize:1024*1024*20, //限制在20mb,
		files:1, //文件数量
		fileds:10, //非文件字段的数量
	}
});


//登陆
router.post('/login',async (ctx, next)=>{
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
	let body = null;
	await model.noteModel.findOne({
		status:2
	},
	"brief  createdAt title updatedAt _id __v imgURL content noteType",
	function (err,doc) {
		if(err){
			body=err;
			return
		}
		if(!doc){
			body =	resSchema(503,{title:'',brief:'',content:''});
		}else{
			body =	resSchema(501,doc);
		}
	});
	ctx.body = body
});
//查询发布的文章
router.get('/findpublishnote', async (ctx, next)=>{
	let body;
	await model.noteModel.find({
			status:1
	},
	"brief createdAt title updatedAt _id __v imgURL noteType",
	function (err,doc) {
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
	body.total = body.data.length;
	ctx.body = body
});
//添加文件
router.post('/upload',upload.single('file'),async (ctx, next)=>{
	// console.log(ctx.req.file);
	ctx.body = resSchema(201,{src:'http://localhost:3000/upload/'+ctx.req.file.filename,aaa:ctx.req.file})
});

router.get('/note', async (ctx, next)=>{
	let body=null,_id=ctx.query._id;
	console.log(_id)
	await model.noteModel.findById(
		_id,
		"createdAt title updatedAt _id __v  content noteType",
		(err,doc)=>{
		if(err){
			body=err;
			return
		}
		if(doc.length !== 0){
			body = resSchema(501,doc)
		}else{
			body = resSchema(503,doc)
		}

	})
	ctx.body=body
});

router.post('/addnewteach', fileupload.single('file'), async (ctx, next)=>{
	let body = null,
		filename = ctx.req.file.filename,
		originalname = ctx.req.file.originalname,
		data = {...ctx.req.body,targeturl:base.url + '/New/' + filename.split('.')[0] + '/index'};
		console.log(data)
	let teach = new model.teachModel(data);
	console.log(ctx.req.file)
	try {
		const result = await teach.save(()=>{

		});

		fs.stat('public/teach/' + filename, (err, stat)=>{
			if(stat && stat.isFile()){
				fs.createReadStream('public/teach/' + filename).pipe(unzip.Extract({ path: 'public/New' }));
				fs.rename('public/New/' +  originalname.split('.')[0] ,'public/New/' +  filename.split('.')[0] ,(err)=>{
					if(err){
						console.log('第一个重命名错误',err)
						return
					}
					fs.mkdir('views/teach/' +  filename.split('.')[0], (err)=>{
						if(err){
							console.log('第二个创建目录错误',err)
							return
						}
						fs.rename('public/New/' +  filename.split('.')[0] + '/index.html','views/teach/' +  filename.split('.')[0] + '/index.ejs',(err)=>{
							if(err){
								console.log("第三个剪切错误", err)
							}
							console.log('全部成功')
						})
					});
				})
			}else{
				console.log('没有路径')
			}
		})
		ctx.body = resSchema(201)

	}catch (err) {
		ctx.body = resSchema(202,err)
	}
});
router.get('/newall',  async (ctx,next)=>{
	let body = null;

	await model.teachModel.find({},{},{},(err,doc)=>{
		if(err){
			body = resSchema(502);
			return
		}
		if(doc.length === 0){
			body = resSchema(503,doc);
			return
		}
		body = resSchema(501,doc)
	})
	ctx.body = body;
});

module.exports = router;