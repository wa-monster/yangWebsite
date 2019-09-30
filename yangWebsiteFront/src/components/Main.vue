<template>
	<div id="main" v-loading.fullscreen.lock="loading">
		<el-row :gutter="20">
			<el-col :span="18">
				<div class="new-info">
					<h3>最新的小婊贝儿们</h3>
				</div>
				<el-row v-for="(item, index) in dataList" :key="item._id" class="eassy-list">
					<el-card class="eassy-card" @click.native="goToNote(item._id)">
						<el-col :span="8" class="item-img">
							<el-image :src="item.imgURL" fit="cover"></el-image>
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
					:total="total"
					:current-page="pageIndex"
					:page-size="pageSize"
					@current-change="changePageIndex"
				>
				</el-pagination>
			</el-col>
			<el-col :span="6">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>排名</span>
					</div>
					<ul class="rank">
						<li>1.测试</li>
						<li>2.测试</li>
						<li>3.测试</li>
						<li>4.测试</li>
						<li>5.测试</li>
						<li>6.测试</li>
					</ul>
				</el-card>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	import {mapMutations, mapState} from 'vuex'

	export default {
		name: "Main",
		data(){
			return {
				dataList:[],
				loading: false,
				total:1,
				pageIndex:1,
				pageSize:5
			}
		},
		created(){
			let {pageSize, pageIndex} = this
			this.doGetNote({pageSize,pageIndex})
			// this.$api.testMongoose().then(res=>{
			// 	console.log(res)
			// })
		},
		computed:{
			...mapState(['a','b','c'])
		},
		mounted(){
			this.cc(1000)
			console.log(this.a)
			console.log(this.b)
			console.log(this.c)
		},
		methods:{
			...mapMutations({
				aa:'A',
				bb:'B',
				cc:'C'
			}),
			doGetNote(params){
				// findpublishnote
				this.$api.findPublishNote().then(res=>{
					if(!res.success){
						this.$alert(res.msg,"系统提示");
						return;
					}
					this.total = res.data.total;
					this.dataList = res.data;
				})
			},
			changePageIndex(pageIndex){
				let pageSize = this.pageSize;
				this.doGetNote({pageSize,pageIndex})
			},
			goToNote(xid){
				console.log(xid)
				this.$router.push({path:'/note',query:{id:xid}})
			}
		}
	}
</script>

<style scoped>
	#main{
		width: 1200px;
		margin: 0 auto 0px;
		min-height: calc(100% - 96px);
	}
	.new-info{
		width: 100%;
		height: 40px;
		background-color: white;
		margin-top: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		line-height: 40px;
	}
	.new-info h3{
		font-size: 20px;
		text-align: left;
		margin-left: 40px;
		position: relative;
	}
	.new-info h3:before{
		content: '';
		position: absolute;
		top: 10px;
		left: -20px;
		display: block;
		width: 10px;
		height: 20px;
		background-color: #00B7FF;
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
	.box-card{
		margin-top:20px ;
	}
	.rank{
		padding: 20px;
	}
	.rank li{
		margin: 10px 0;
		cursor: pointer;
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