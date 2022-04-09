<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
	<scroll-view scroll-y="true">
		<view class="list-item" v-for="item in list.list" :key="item.id">
			<view class="item-logo">
				 <image class="my-logo" src="/static/logo.png" />
			</view>
			<view class="item-desc">
				<text class="">{{ item.title }}</text>
			</view>
		</view>
	</scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref,reactive ,onMounted} from 'vue'
const title = ref('Hello miniPro test')
const list = reactive({list:[]})
onMounted(()=>{
	setTimeout(()=>{
		list.list = [{
			id:1,
			title:'hello taro'
		},{
			id:2,
			title:'hello uniapp'
		}]
	},1000*5)
})

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
