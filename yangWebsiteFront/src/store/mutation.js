import * as types from './mutation-type'

export default {
	[types.A](state,payload){
		state.a = payload
	},
	[types.B](state,payload){
		state.b = payload
	},
	[types.C](state,payload){
		state.c = payload
	}
}