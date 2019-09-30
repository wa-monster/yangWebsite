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
	//获取文章
	getHomeNotes:function (params) {
		return axios.get(baseUrl.develop+ '/gethomenotes',{
			params:params
		})
	},
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
	//登陆
	doLogin:function (params) {
		return axios.post(baseUrl.develop + '/login',{
			params,
		})
	},
	doUploadImage:function (params) {
		return axios.post(baseUrl.develop + '/upload', params)
	}
}

export default api