<template>
<div>
	<h4>You are second page.</h4>
	<router-link to="/apps/user/user-list">User</router-link>
</div>
	
</template>
<script>
import axios from "@/axios";
export default {
	data(){
		return {
			users:[]
		}
	},
	methods:{
		linkTo() {
			this.$router.push('/app/users/user-list')
		}
	},
	async created() {
		const users = await axios.get('/api/users')
		console.log (users)
	}
}
</script>