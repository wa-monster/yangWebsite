<template>
	<el-form class="note-form" label-width="60px" :model="formInfo" :rules="rule">
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
			<el-button type="primary" @click="toSubmit">保存</el-button>
			<el-button type="primary">发布</el-button>
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
					height: 600,
					plugins:'image link',
					toolbar:'image link',
					images_upload_url: '/api/upload',
					images_upload_base_path: '/api',
					images_upload_handler:(blobInfo, success, failure)=>{
						console.log(blobInfo)
						this.imagesUpload(blobInfo, success, failure)
					}
				},
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
				}
			}
		},
		mounted() {
			tinymce.init({})
		},
		methods: {
			toSubmit(){
				let ajaxInfo = {...this.formInfo,content:this.tinymceHtml};
				this.$api.addNote(ajaxInfo).then(res=>{
					if(!res.success){
						this.$message.error(res.msg);
						return
					}
					console.log(res)
				})

			},
			imagesUpload:function (blobInfo, success, failure) {
				let formdata = new FormData();
				formdata.set('file', blobInfo.blob());
				this.$api.doUploadImage(formdata).then(res => {
					success(res.data.data.src)
				}).catch(res => {
					failure('error')
				})
			}
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