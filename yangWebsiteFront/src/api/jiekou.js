import baseUrl from './base'

let ba = {
	ccc: 'adwadawdaw'
}
let {ccc}  = ba
import axios from 'axios'

axios.interceptors.response.use(res=>{
	return res.data
})

const api = {
	//测试mongodb
	testMongoose:function (params) {
		return axios.get(baseUrl.develop + '/testmongoose',{
			params,
		})
	},
	testNew:function(){
		return axios.get('//localhost:3000/New/adf')
	},
	//查询保存的文章
	findSaveNote:function () {
		return axios.get(baseUrl.develop + '/findsavenote')
	},
	//查询发布的文章
	findPublishNote:function () {
		return axios.get(baseUrl.develop + '/findpublishnote')
	},
	//添加文章
	publishNote:function (params) {
		return axios.post(baseUrl.develop + '/addnote',{
			params,
		})
	},
	//添加文章
	saveNote:function (params) {
		return axios.post(baseUrl.develop + '/savenote',{
			params,
		})
	},
	//根据id获取文章
	getNoteContent:function(params){
		return axios.get(baseUrl.develop + '/note', {
			params
		})
	},
	//登陆
	doLogin:function (params) {
		return axios.post(baseUrl.develop + '/login',{
			params,
		})
	},
	//上传图片
	doUploadImage:function (params) {
		return axios.post(baseUrl.develop + '/upload', params)
	},
	//提交新技术
	postNewTeach:function (params) {
		return axios.post(baseUrl.develop + '/addnewteach',params)
	},
	getNewTEach:function () {
		return axios.get(baseUrl.develop + '/newall')
	}
}

export default api