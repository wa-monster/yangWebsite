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
	getHomeNotes:function (params) {
		return axios.get(baseUrl.develop+ '/gethomenotes',{
			params:params
		})
	},
	testMongoose:function (params) {
		return axios.get(baseUrl.develop + '/testmongoose',{
			params,
		})
	}
}

export default api