<template>
    <div id="app">
	    <el-scrollbar style="height:100%;">
		    <Header></Header>
		    <router-view/>
		    <Footer></Footer>
	    </el-scrollbar>
    </div>
</template>

<script>
	import Header from '@/base/Header'
	import Footer from '@/base/Footer'
	export default {
		name: 'App',
		components: {
			Header,
			Footer
		}
	}
</script>

<style>
	html,body{
		margin: 0;
		padding: 0;
		background-color: rgb(245,245,245);
		overflow-x: hidden;
		height: 100%;
		height: 100%;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		min-width: 1000px;
		height: 100%;
	}
	#app>.el-scrollbar>.el-scrollbar__wrap{
		overflow-x: hidden;
	}
	#app>.el-scrollbar>.el-scrollbar__wrap>.el-scrollbar__view{
		height: 100%;
	}
	.center-area{
		min-height: calc(100% - 96px);
	}
</style>
