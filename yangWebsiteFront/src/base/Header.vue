<template>
	<div id="header">
		<div class="menu-box">
			<div class="logo">
				汪汪汪
			</div>
			<el-menu
				:unique-opened="true"
				:router="true"
				class="menu-content"
				mode="horizontal"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b"
				@select="selectMenu"
			>
				<el-menu-item index="1">
					<i class="el-icon-s-home"></i>
					首页
				</el-menu-item>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-s-order"></i>
						文章
					</template>
					<el-menu-item index="2-1">html和css</el-menu-item>
					<el-menu-item index="2-2">JavaScript</el-menu-item>
					<el-menu-item index="2-3">react</el-menu-item>
					<el-menu-item index="2-4">vue</el-menu-item>
					<el-menu-item index="2-5">不知道的分类</el-menu-item>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						<i class="el-icon-s-flag"></i>
						新技术
					</template>
					<el-menu-item index="3-1">WebGl</el-menu-item>
					<el-menu-item index="3-2">echartjs</el-menu-item>
					<el-menu-item index="3-3">d3.js</el-menu-item>
				</el-submenu>
				<el-menu-item index="4">
					<i class="el-icon-s-opportunity"></i>
					Maybe
				</el-menu-item>
			</el-menu>
		</div>
		<el-dropdown v-if="isLogin" class="avatar" @command="avatarMenuClick">
			<el-avatar :size="56" alt="头像" fit="fill" :src="avatar" @error="avatarErrorHandler">
				<img :src="errorAvatar">
			</el-avatar>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item icon="el-icon-user" command="yourself">个人</el-dropdown-item>
				<el-dropdown-item icon="el-icon-notebook-1" command="essay">文章</el-dropdown-item>
				<el-dropdown-item icon="el-icon-circle-plus-outline" command="add-user">新增用户</el-dropdown-item>
				<el-dropdown-item icon="el-icon-back" command="exit">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<div v-else class="login-register-btn">
			<el-button type="danger" icon="el-icon-finished" size="medium">登陆</el-button>
			<el-button type="success" icon="el-icon-help" size="medium">注册</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data(){
			return {
				msg:'',
				errorAvatar:'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',
				avatar:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
				isLogin:false,
			}
		},
		created(){
			let token = localStorage.getItem('yangToken');
			if(token){
				this.isLogin = true;
			}
		},
		methods:{
			selectMenu(){
				console.log('ddd')
			},
			avatarErrorHandler() {
				return true
			},
			avatarMenuClick(command){
				console.log('打印点击的对应的路由：' + command)
			},
		}
	}
</script>

<style scoped>
	#header{
		background-color:#545c64;
		height: 60px;
		position: relative;
		border-bottom: solid 1px #e6e6e6;
	}
	.menu-box{
		width: 1000px;
		margin: 0 auto;
		display: flex;

	}
	.login-register-btn{
		position: absolute;
		top: 12px;
		right: 50px;
	}
	.avatar{
		position: absolute;
		top: 2px;
		right: 50px;
	}
	.logo{
		width: 90px;
		height: 52px;
		margin: 4px;
		background-color: white;
		text-align: center;
		line-height: 52px;
	}
</style>
