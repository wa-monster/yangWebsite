<template>
	<el-container id="manager">
		<el-aside>1232312</el-aside>
		<el-main>
			<router-view></router-view>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: "manager"
	}
</script>

<style scoped>
	#manager{
		min-height: calc(100% - 96px);
	}
</style>