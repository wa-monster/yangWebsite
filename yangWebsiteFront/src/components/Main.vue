<template>
	<div id="main" v-loading.fullscreen.lock="loading">
		<div class="new-info">
			
		</div>
		<el-row v-for="(item, index) in dataList" :key="index" class="eassy-list">
			<el-card class="box-card">
				<el-col :span="8" class="item-img">
					<el-image :src="item.imgUrl" fit="cover"></el-image>
				</el-col>
				<el-col :span="16" class="item-description">
					<div class="item-title">
						{{item.title}}
					</div>
					<div class="item-brief">
						{{item.brief}}
					</div>
				</el-col>
			</el-card>
		</el-row>
		<el-pagination
			background
			:hide-on-single-page="true"
			layout="total, prev, pager, next"
			:total="1000">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		name: "Main",
		data(){
			return {
				dataList:[
					{
						imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
						title:"测试一次",
						brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
					},
					{
						imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
						title:"测试二次",
						brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
					},
					{
						imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
						title:"测试三次",
						brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
					},
					{
						imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
						title:"测试三次",
						brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
					},
					{
						imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
						title:"测试三次",
						brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
					},
					{
						imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
						title:"测试三次",
						brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
					},
					{
						imgUrl:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
						title:"测试三次",
						brief:"测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次测试一次"
					},
				],
				loading: false
			}
		}
	}
</script>

<style scoped>
	#main{
		width: 1000px;
		margin: 0 auto 40px;
	}
	.item-description{
		padding:15px;
	}
	.item-title{
		text-align: left;
		font-size: 20px;
		font-weight: 800;
		margin-bottom: 10px;
	}
	.item-brief{
		text-align: left;
		text-indent: 1em;
	}
</style>

<style>
	#main .eassy-list{
		margin:20px 0;
		cursor: pointer;
	}
	#main .el-card__body{
		padding: 0;
	}
	#main .item-img{
		height: 200px;
	}
	#main .el-image{
		width: 100%;
		height: 200px;
	}
</style>