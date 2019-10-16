<template>
	<el-form class="add-teach" label-width="80px">
		<el-form-item label="名称">
			<el-input v-model="teach.name"></el-input>
		</el-form-item>
		<el-form-item>
			<el-upload
				ref="upload"
				class="upload-file"
				action=""
				:before-upload="beforeUpload"
				:limit="1"
				:http-request="httpUpload"
				:file-list="fileList"
				:auto-upload="false"
			>
				<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
				<div slot="tip" class="el-upload__tip">只能上传zip文件,并且只能上传一个</div>
			</el-upload>
		</el-form-item>
		<el-form-item class="btn-publish">
			<el-button type="success" @click="publishTeach">发布</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		name: "AddUser",
		data(){
			return {
				teach:{
					name:'',
				},
				fileList:[],
				file:null,
			}
		},
		created(){
			console.log(this.fileurl)
		},
		methods:{
			httpUpload:function(){
				let form = new FormData();
				form.append('file',this.file);
				form.append('name',this.teach.name);
				this.$api.postNewTeach(form).then(res=>{
					if(!res.success){
						this.$alert(res.msg,'系统提示');
						return
					}
					this.teach = {
						name:''
					};
					this.fileList = [];
					this.file = null;
					this.$message.success('增加成功');
				})
			},
			beforeUpload:function(file){
				const isZIP = file.type === 'application/zip';
				if(!isZIP){
					return false
				}
				this.file = file
			},
			publishTeach:function () {
				this.$refs.upload.submit();
			}
		}
	}
</script>

<style scoped>
	.add-teach{
		margin: 20px;
	}
	.btn-publish{
		text-align: right;
		margin-top: 30px;
	}
	.upload-file{
		width: 360px;
	}
</style>
<style>
	.upload-file .el-upload-list__item:hover{
		background-color: #fefefe;
	}
</style>