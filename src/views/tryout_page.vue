<template>
	<div class="tryout_page">
		<div class="container">
			<div class="content menu_side">
				<div class="question_picker">
					<h3>Question List</h3>
					<div class="number" id="1">1</div>
				</div>
				<div class="button_container">
					<button class="button" id="review_button">Review</button>
					<button class="button" id="finish_button">Finish</button>
				</div>
			</div>
			<div class="content main_side">
				<h2>Tes Potensi Skolastik</h2>
				<img class="img_soal" src="./../assets/question_example.jpg">
				<p>Lorem ipsum dolor sit amet-amet jabang bayi ...</p>
				<table>
					<tr>
						<td><input type="radio" value="A" name="option"><label>A. </label></td>
						<td><label>Anu</label></td>
					</tr>
					<tr>
						<td><input type="radio" value="B" name="option"><label>B. </label></td>
						<td><label>Anu</label></td>
					</tr>
					<tr>
						<td><input type="radio" value="C" name="option"><label>C. </label></td>
						<td><label>Anu</label></td>
					</tr>
					<tr>
						<td><input type="radio" value="D" name="option"><label>D. </label></td>
						<td><label>Anuu</label></td>
					</tr>
					<tr>
						<td><input type="radio" value="E" name="option"><label>E. </label></td>
						<td><label>Anu</label></td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "tryout-page",
};
</script>

<style lang="scss" scoped>
$orange: #f57200;

.tryout_page {
	background-color: #eeeeee;
	width: 100%;
}
.container {
	margin: 50px 50px 0px 50px;
	height: 85%;
}
.content {
	background-color: white;
}
.menu_side {
	float: right;
	min-width: 200px;
	width: 30%;
	height: 100%;
}
.question_picker {
	padding: 30px 50px 30px 50px;
	.number {
		width: 30px;
		height: 30px;
		border: 1.5px solid $orange;
		text-align: center;
	}
}
.button_container {
	left: 50%;
	.button {
		width: 100%;
		height: 30px;
		border: 1px solid white;
		border-radius: 10px;
		margin-bottom: 20px;
		background-color: $orange;
		color: white;
		cursor: pointer;
	}
	width: 50%;
	margin-left: 25%;
}
.main_side {
	width: 60%; 
	height: 90%;
	padding: 30px 50px 30px 50px;
	.img_soal {
		width: 100%;
	}
	label {
		line-height: 200%;
	}
	td {
		word-break: break-all;
		min-width: 50px;
	}
	overflow: auto;
}

</style>