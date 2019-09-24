<template>
	<div id="footer" :style="this.$route.name === 'Login'||this.$route.name === 'Register'  ? st1 : st2">
		<div class="some-info">
			测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
		</div>
		<div class="web-info">
			<p>aaaaaaaaaaaaaa</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Footer",
		data(){
			return{
				st1:{'position':'fixed','bottom':'0'},
				st2:{'position':'static'}
			}
		},
	}
</script>

<style scoped>
	#footer{
		background-color: #000;
		color: #ddd;
		width: 100%;
	}
</style>