<template>
	<el-row class="center-area">
		<div  class="note-area">
			<el-row  class="title">
				<h2>{{title}}</h2>
				<span class="time">{{update}}</span>
			</el-row>
			<el-row style="padding: 10px" v-html="content"></el-row>
		</div>
	</el-row>
</template>

<script>
	export default {
		name: "Note",
		data(){
			return {
				content:'',
				title:'',
				update:''
			}
		},
		created(){
			let _id = this.$route.query.id;
			this.$api.getNoteContent({_id}).then(res=>{
				if(!res.success){
					this.$alert(res.msg,"系统提示");
					return;
				}
				this.content=res.data.content;
				this.title = res.data.title;
				this.update = res.data.updatedAt.split('T')[0]
			})
		},
	}
</script>

<style scoped>
	.title{
		text-align: center;
		margin: 10px 0 20px 0;
	}
	.note-area{
		background-color: #fefefe;
		min-width: 1000px;
		width: 1000px;
		margin: 10px auto;
	}
	.time{
		display: block;
		margin-top: 10px;
	}
</style>