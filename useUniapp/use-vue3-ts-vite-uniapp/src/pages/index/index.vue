<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
	<scroll-view scroll-y="true">
	    <uni-card :title="item.title" v-for="item in list.list" :key="item.id"
		@click="goDetail(item)">
	     <view  class="list-item">
			<view class="item-logo">
				 <image class="my-logo" src="/static/logo.png" />
			</view>
			<view class="item-desc">
				<text>{{ item.title }}</text>
				<view>{{ item.address }}</view>
			</view> 
			 
		 </view>
		</uni-card> 
	</scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref,reactive ,onMounted} from 'vue'
const title = ref('Hello vue3 uni-app test')
const list = reactive({list:[]})
onMounted(()=>{
	setTimeout(()=>{
		list.list = [{
			id:1,
			address:'招商银行广东总行',
			title:'hello 招商'
		},{
			id:2,
			address:'兴业银行深圳总行',
			title:'hello 兴业'
		}]
	},1000*3)
})
const goDetail = (item)=>{
	uni.navigateTo({
		url:`/pages/detail/index?id=${item.id}`
	})
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

 
.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
.list-item{
  display: flex;
}
.item-logo{
  width:300rpx;
}
.my-logo{
	height: 200rpx;
	width: 200rpx;
}
</style>
