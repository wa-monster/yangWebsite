const mongoose = require('mongoose')

/**
 * 测试
 * */
//设置集合内的文档属性类型
let schema = new mongoose.Schema({a:String, b:String, c:String},{timestamps:true});
//把设置好的文档属性类型挂载到mongoose的的Model对象上
let test2 = mongoose.model('test', schema);
// //实例化mongoose文档并输入数据
// let doc1 = new test2({a:'测试第一次使用mongoose'})
// //mongoose创建的文档实例保存到数据库中
// doc1.save(function (err,doc) {
// 	console.log(doc)
// })
/**
 * 文章
 * */
let schema2 = new mongoose.Schema({
		title:String,
		brief:String,
		content:String,
		status:Number,
		imgURL:String,
		noteType:String,
		},{
			timestamps:true
		});
	let noteModel = mongoose.model('notes',schema2);

/**
 *
 * */
let schema3 = new mongoose.Schema({
		name:String,
	  targeturl:String,
	},{
		timestamps:true,
	});
	let teachModel = mongoose.model('teachs',schema3);




module.exports = {
	test2,
	noteModel,
	teachModel
}