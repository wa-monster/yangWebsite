<template>
	<div id="login">
		<el-form :model="loginForm" class="login-form">
			<el-form-item label="账号：">
				<el-input v-model="loginForm.user"></el-input>
			</el-form-item>
			<el-form-item label="密码：">
				<el-input v-model="loginForm.password" type="password"></el-input>
			</el-form-item>
			<el-form-item class="login-btn-box">
				<el-button type="primary" icon="el-icon-finished" @click="login">登陆</el-button>
			</el-form-item>
			<el-link type="primary" class="to-register">立即注册</el-link>
		</el-form>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default {
		name: "Login",
		data(){
			return {
				loginForm:{
					user:'',
					password:''
				},
				rules: {
					user: [
						{required:true, message:'请输入账号', trigger:"blur"},
					],
					password: [
						{required:true, message:'请输入密码', trigger:"blur"},
					]
				}
			}
		},
		methods:{
			...mapMutations({
				changeLogin:'ISLOGIN'
			}),
			login(){
				this.$api.doLogin(this.loginForm).then(res=>{
					if(!res.success){
						this.$message.error(res.msg);
						return;
					}
					localStorage.setItem('yangToken',res.data.token);
					this.changeLogin(true)
					this.$router.push('/home')
				})
			}
		}
	}
</script>



<style scoped>
	#login{
		padding: 1px;
		min-height: calc(100% - 100px);
	}
	.login-form{
		width: 500px;
		height: 340px;
		margin: 200px auto;
		padding: 50px;
		background-color: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	}
	.login-btn-box{
		margin-top: 40px;
	}
	.login-btn-box .el-button{
		width: 100%;
	}
	.to-register{
		float: right;
	}
</style>

<style>
	/*.login-btn-box .el-button{*/
		/*width: 100%;*/
	/*}*/
</style>