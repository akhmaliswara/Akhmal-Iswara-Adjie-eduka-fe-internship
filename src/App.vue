<template>
	<div id="app">
		<router-view class="page" />
	</div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style>
#app {
	position: relative;
	font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100vh;
	display: flex;
}
body {
	margin: 0;
}
</style>
