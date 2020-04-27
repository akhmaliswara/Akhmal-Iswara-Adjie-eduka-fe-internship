<template>
	<div class="tryout_menu">
		<div class="upper_side">
			<h1 class="upper_text">Ayo Mulai Tryout!</h1>
			<h2 class="upper_text orange_text">Klik tryout yang kamu inginkan!</h2>
		</div>
		<div class="lower_side">
			<div class="tryout_card">
				<router-link :to="{name: 'tryout-page'}">
					<div class="tryout_description">
						<p><b id="mapel">Tes Pengetahuan Skolastik</b></p>
						<p>Jumlah soal : 40</p>
					</div>
					<img src="./../assets/logo.png" alt="Shelter Photos" />
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "tryout-menu",
};
</script>

<style lang="scss" scoped>
.tryout_menu {
	background-color: #cccccc;
	width: 100%;
}
.upper_side {
	h2.orange_text {
		color: #f57200;
	}
	background-color: white;
	padding: 30px 0 30px 30px;	
}
.lower_side {
	padding: 20px 50px 20px 50px;
}

.tryout_card {
	text-decoration: none;
	background-color: #fffecc;
	color: black;
	border-radius: 10px;
	margin: 20px;
	padding: 20px;
	height: 200px;
	min-width: 200px;
	max-width: 40%;
	&:hover {
		box-shadow: 0 0 25px rgba(0, 0, 0, 0.27);
		color: white;
		background-color: #3973ac;
		transform: scale(1.02);
		cursor: pointer;
	}
	img {
		height: 200px;
	}
	.tryout_description {
		float: right;
		font-size: 24px;
	}
}
</style>