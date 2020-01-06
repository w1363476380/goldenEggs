<template>
  <div id="app">
    <router-view :sellers='sellers'></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return{
  		sellers:'',
  	}
  },
  created(){
	this.$http.get('../static/frends.json').then(response => {
//		console.log(response.data.frends)
	})
  },

}
</script>

<style>
	body{
		background-size: cover;
	}
	html{
		overflow: auto;
	}
</style>
