<template>
	<el-container id="manager">
		<el-aside width="250px">
			<el-menu
				:router=true
			>
				<el-menu-item index="my">
					<i class="el-icon-user"></i>
					<span>个人信息</span>
				</el-menu-item>
				<el-menu-item index="new-note">
					<i class="el-icon-notebook-1"></i>
					<span>新增文章</span>
				</el-menu-item>
				<el-menu-item index="add-user">
					<i class="el-icon-circle-plus-outline"></i>
					<span>新增用户</span>
				</el-menu-item>
			</el-menu>
		</el-aside>
		<el-main>
			<router-view></router-view>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: "manager",
		data(){
			return {
				isCollapse:false,
			}
		}
	}
</script>

<style scoped>

</style>

<style>
	#manager{
		height: calc(100% - 96px);
	}
	#manager .el-container{
		height: 100%;
	}
	#manager .el-aside{
		height: 100%;
		overflow-y: auto;
	}
	#manager .el-aside .el-menu{
		height: 100%;
		text-align: center;
	}
	#manager .el-main{
		height: 100%;
		overflow-y: auto;
	}
</style>