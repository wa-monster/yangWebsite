<template>
	<div class="center-area">
		<el-row :span="24">
			<div v-for="(item,index) in dataList" :key="index">
				<a :href="item.targeturl" target="_blank">{{item.name}}</a>
			</div>

		</el-row>
	</div>

</template>

<script>
	export default {
		name: "NewTeach",
		data(){
			return{
				dataList:[1,2,3,4,5,6,7,8,9],
				cdataaaa:[11,21,31,41,51,61,71,81,91]
			}
		},
		created(){
			this.$api.getNewTEach().then(res=>{
				console.log(res)
				if(!res.success){
					this.$alert(res.msg,'系统提示')
					return
				}
				this.dataList = res.data
				console.log(this.dataList)
			})
		}
	}
</script>

<style scoped>
	.ac{
		background-color: #e5e5e5;
		height:20px;
	}
</style>