import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Manager from '@/components/Manager'
import My from '@/base/My'
import NewNote from '@/base/NewNote'
import AddUser from '@/base/AddUser'


/**
 * 对vue-router3.0以上版本点击当前相同网址做错误处理
 * */

const originPush = Router.prototype.push;
Router.prototype.push2 = originPush;
Router.prototype.push =  function (location) {
	return Router.prototype.push2.call(this, location).catch(err=>err)
};


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Home'
    },
		{
			path: '/Home',
			name: 'Main',
			component: Main
		},
		{
			path: '/Login',
			name: 'Login',
			component: Login
		},
		{
			path: '/Register',
			name: 'Register',
			component: Register
		},
		{
			path: '/Manager',
			component: Manager,
			children:[
				{
					path:'my',
					name: 'my',
					component:My,
				},
				{
					path:'new-note',
					name: 'new-note',
					component:NewNote,
				},
				{
					path:'add-user',
					name: 'add-user',
					component:AddUser,
				},
			]
		},
  ]
})
