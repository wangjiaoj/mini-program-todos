<template>
	<view>
	 dddd
	 
	 		<uni-card title="基本信息" sub-title="基础信息确认" >
	 			<text class="uni-subtitle">公司名称：{{name}}</text> 
	 		</uni-card> 
	 			
	 		<uni-card title="更多详情" sub-title="信息确认和补充" >
	 			<uni-forms ref="valiForm" :rules="rules" :modelValue="formData">
	 				<uni-forms-item  label="成立日期时间"  name="datetimesingle">
	 					<uni-datetime-picker type="datetime" return-type="timestamp" v-model="formData.datetimesingle"/>
	 				</uni-forms-item> 
	 				<uni-forms-item required label="公司人数" name="employnum">
	 					<uni-easyinput type="text" v-model="formData.employnum" placeholder="请输入" />
	 				</uni-forms-item>
	 				<uni-forms-item   label="公司类型" name="type">
	 					<uni-data-checkbox  v-model="formData.type" :localdata="companyType"/>
	 				</uni-forms-item>
	 			</uni-forms>
	 			<button type="primary" @click="submit()">提交</button>
	 		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'兴业银行',
				companyType:[{
					text: '上市公司',
					value: 0
				}, {
					text: '独角兽公司',
					value: 1
				}, {
					text: '其他',
					value: 2
				}],
				// 校验表单数据
				 formData :{
					type: '',
					employnum: '',
					datetimesingle: 1627529992399
				}	,
				//  校验规则
				rules:{
					num: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}, {
							format: 'number',
							errorMessage: '年龄只能输入数字'
						}]
					}
				},
			}
		},
		methods: {
			  submit:function()  {
				  console.log(this.$refs.valiForm)
				console.log(this.$refs.valiForm.validate)
				this.$refs.valiForm.validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`
					})
				}).catch(err => {
					console.log('err', err);
				})
			}
		}
	}
</script>

<style>

</style>
