<template>
	<div>
		<Editor id="tinymce" v-model="tinymceHtml" :init="editorInit"></Editor>
	</div>
</template>

<script>
	import tinymce from 'tinymce/tinymce'
	import 'tinymce/themes/modern/theme'
	import Editor from '@tinymce/tinymce-vue'
	import 'tinymce/plugins/image'
	import 'tinymce/plugins/link'

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
					skin_url: '/static/tinymce/skins/lightgray',
					height: 300,
					plugins:'image link',
				},
				tinymceHtml:"测试",
			}
		},
		mounted() {
			tinymce.init({})
		},
		methods: {
		}
	}
</script>

<style scoped>

</style>