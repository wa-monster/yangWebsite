const mongoose = require('mongoose')

//设置集合内的文档属性类型
let schema = new mongoose.Schema({a:String, b:String, c:String});
//把设置好的文档属性类型挂载到mongoose的的Model对象上
let test2 = mongoose.model('test', schema)
// //实例化mongoose文档并输入数据
// let doc1 = new test2({a:'测试第一次使用mongoose'})
// //mongoose创建的文档实例保存到数据库中
// doc1.save(function (err,doc) {
// 	console.log(doc)
// })
console.log(test2)
module.exports = test2