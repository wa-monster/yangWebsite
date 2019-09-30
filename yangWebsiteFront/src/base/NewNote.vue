<template>
	<el-form ref="noteForm" class="note-form" label-width="60px" :model="formInfo" :rules="rule">
		<el-form-item prop="noteImg" label="标题图">
			<el-upload
				class="avatar-uploader"
				:action="baseUrl"
				:show-file-list="false"
				:on-success="titleImgSuccess"
				:before-upload="beforeTitleImg"
			>
				<img v-if="imageUrl" :src="imageUrl" class="avatar">
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
		</el-form-item>
		<el-form-item prop="title" label="标题">
			<el-input type="text" v-model="formInfo.title"></el-input>
		</el-form-item>
		<el-form-item prop="brief" label="简述">
			<el-input type="text" v-model="formInfo.brief"></el-input>
		</el-form-item>
		<el-form-item label="内容">
			<Editor id="tinymce" v-model="tinymceHtml" :init="editorInit"></Editor>
		</el-form-item>
		<el-form-item class="note-form-btn">
			<el-button type="primary" @click="toSubmitSave">保存</el-button>
			<el-button type="primary" @click="toSubmitPublis">发布</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import tinymce from 'tinymce/tinymce'
	import 'tinymce/themes/silver/theme'
	import Editor from '@tinymce/tinymce-vue'
	import 'tinymce/plugins/image'
	import 'tinymce/plugins/link'
	// import 'tinymce-imageupload'
	import baseUrl from '@/api/base'

	export default {
		name: "NewNote",
		components:{
			Editor
		},
		data() {
			return {
				editorInit: {
					language_url: '/static/tinymce/zh_CN.js',
					language: 'zh_CN',
					skin_url: '/static/tinymce/skins/ui/oxide',
					height: 550,
					plugins:'image link',
					toolbar:'image link',
					images_upload_handler:(blobInfo, success, failure)=>{
						this.imagesUpload(blobInfo, success, failure)
					}
				},
				baseUrl:baseUrl.develop + '/upload',
				imageUrl:'',
				tinymceHtml:"测试",
				rule:{
					title:[
						{required:true,message:'请输入标题',trigger:'blur'},
						{max:10,message:'长度在10个字符以下',trigger:'blur'},
					],
					brief:[{required:true,message:'请输入简介',trigger:'blur'},]
				},
				formInfo:{
					title:'',
					brief:'',
					imgURL:'',
				}
			}
		},
		created() {
			this.$api.findSaveNote().then(res=>{
				console.log(res);
				if(!res.success){
					this.customAlert(res.msg)
				}
				let {title, brief, content} = res.data;
				this.formInfo = {
					title,
					brief
				}
				this.tinymceHtml = content
			})
		},
		mounted() {
			tinymce.init({})

		},
		methods: {
			titleImgSuccess:function (res, file, fileList) {
				let formInfo = this.formInfo;
				formInfo.imgURL = res.data.src;
				this.formInfo = formInfo;
				this.imageUrl = res.data.src;
			},
			beforeTitleImg:function (file) {
				console.log(file)
				const isJPG = file.type === 'image/jpeg';
				const isPNG = file.type === 'image/png';
				const is3mb = file.size/1024/1024 <3
				if(!is3mb){
					this.customAlert('传3MB以下的图片')
					return false
				}
				if(!isPNG && !isJPG){
					this.customAlert('图片必须是jpg或者png格式')
					return false
				}
			},
			customAlert(str){
				this.$alert(str,'系统提示')
			},
			toSubmitPublis(){
				this.checkForm(() => {
					let ajaxInfo = {...this.formInfo,content:this.tinymceHtml};
					this.$api.publishNote(ajaxInfo).then(res=>{
						if(!res.success){
							this.customAlert(res.msg);
							return
						}
						console.log(res)
						this.$message.success('发布成功')
					})
				})
			},
			toSubmitSave(){
				this.checkForm(() => {
					let ajaxInfo = {...this.formInfo,content:this.tinymceHtml};
					this.$api.saveNote(ajaxInfo).then(res=>{
						if(!res.success){
							this.customAlert(res.msg);
							return
						}
						this.$message.success('保存成功')
					})
				})
			},
			checkForm(cb){
				this.$refs.noteForm.validate(value => {
					if(value){
						cb()
					}else{
						this.$alert('验证失败,请检查是否有必选项未填写','系统提示');
						return false
					}
				});
			},
			imagesUpload:function (blobInfo, success, failure) {
				let formdata = new FormData();
				formdata.set('file', blobInfo.blob());
				this.$api.doUploadImage(formdata).then(res => {
					console.log(res)
					success(res.data.src)
				}).catch(res => {
					failure('error')
				})
			},

		}
	}
</script>

<style scoped>
	.note-form{
	}
	.note-form-btn{
		float: right;
	}

</style>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		background-color: white;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>