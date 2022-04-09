<template>
	<view class="">
			<uni-section title="去除空格" subTitle="使用 trim 属性 ,可以控制返回内容的空格 " type="line" padding>
					<text class="uni-subtitle">输入内容：{{ '"'+value+'"' }}</text>
					<uni-easyinput class="uni-mt-5" trim="all" v-model="value" placeholder="请输入内容" @input="input"></uni-easyinput>
				</uni-section>
	</view>
</template>

<script  setup lang="ts" >
	import {ref} from 'vue';
    let value =	ref('')
	const input = (e)=> {
					console.log('输入内容：', e);
				},
</script>

<style>
</style>