<template>
	<el-container id="manager" class="center-area">
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
				<el-menu-item index="add-teach">
					<i class="el-icon-circle-plus-outline"></i>
					<span>新增技术</span>
				</el-menu-item>
			</el-menu>
		</el-aside>
		<el-main>
			<el-scrollbar style="height:100%;">
				<router-view></router-view>
			</el-scrollbar>
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
	#manager .el-container{
		height: 100%;
	}
	#manager .el-aside{
		overflow-y: auto;
	}
	#manager .el-aside .el-menu{
		height: 100%;
		text-align: center;
	}
	#manager .el-main{
		height: 100%;
		overflow-y: auto;
		padding: 0;
	}
	.el-menu>.el-scrollbar>.el-scrollbar__wrap{
		overflow-x: hidden;
	}
</style>