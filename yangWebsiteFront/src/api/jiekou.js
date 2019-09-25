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
	//添加文章
	addNote:function (params) {
		return axios.post(baseUrl.develop + '/addnote',{
			params
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