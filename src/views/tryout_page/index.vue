<template>
	<div class="tryout_page">
		<div class="container">
			<div class="content menu_side">
				<div class="question_picker">
					<h3>Question List</h3>
					<div class="question_list"> 
						<NumberQuestion v-for="n in jumlah_soal" v-bind:key="n" :id="n" :current_number="current_number" v-on:onClickNumber="onClickNumber"></NumberQuestion> 
					</div>
				</div>
				<div class="button_container">
					<button class="button" id="review_button">Review</button>
					<button class="button" id="finish_button">Finish</button>
				</div>
			</div>
			<div class="content main_side">
				<h2>Tes Potensi Skolastik</h2>
				<img class="img_soal" src="./../../assets/question_example.jpg">
				<p>{{soal[current_number][0]}}</p>
				<table>
					<tr>
						<td><input type="radio" value="A" name="option"><label>A. </label></td>
						<td><label id="A">{{soal[current_number][1]}}</label></td>
					</tr>
					<tr>
						<td><input type="radio" value="B" name="option"><label>B. </label></td>
						<td><label id="B">{{soal[current_number][2]}}</label></td>
					</tr>
					<tr>
						<td><input type="radio" value="C" name="option"><label>C. </label></td>
						<td><label id="C">{{soal[current_number][3]}}</label></td>
					</tr>
					<tr>
						<td><input type="radio" value="D" name="option"><label>D. </label></td>
						<td><label id="D">{{soal[current_number][4]}}</label></td>
					</tr>
					<tr>
						<td><input type="radio" value="E" name="option"><label>E. </label></td>
						<td><label id="E">{{soal[current_number][5]}}</label></td>
					</tr>
				</table>
			</div>
		</div>
		<div id="modal_box">
			<div id="modal_content">
				<span class="close">&times;</span>
				<br/>
				<h3>Review</h3>
				<p>Currently under development</p>
				<button id="back">Kembali</button>
			</div>
		</div>
	</div>
</template>

<script>
import NumberQuestion from './components/number_question.vue'
import axios from 'axios';

export default {
	name: "tryout-page",
	components: {
		NumberQuestion,
	},
	data() {
		return {
			current_number: 3,
			soal: {},
			jumlah_soal: 0,
			display: 'none',
		}
	},
	methods: {
		onClickNumber(event) {
			this.current_number = event;
			console.log(event);
		},
		onReviewClicked() {

		},
		onFinishClicked() {

		}
	},
	created() {
		axios({ method: "GET", "url": "http://localhost:3000/soal?tryout_id=1", "headers": { "content-type": "application/json" } }).then(result => {
			this.soal = result.data[0].soal;
			this.jumlah_soal = Object.keys(this.soal).length;
		}, error => {
			console.error(error);
		});
	}
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
	min-width: 300px;
	width: 30%;
	height: 100%;
}
.question_picker {
	padding: 30px 50px 30px 50px;
	.question_list {
		display: flex;
		flex-wrap: wrap;
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
#modal_box {
  display: none; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
}

#modal_content {
	background-color: #fefefe;
	margin: 10% 30%;
	padding: 30px;
	border: 1px solid #888;
	width: 400px;
	height: 300px;
	box-sizing: border-box;
	border-radius: 10px;
	text-align: center;
	h2, p {
		line-height: 1.5em;
	}
}

#back {
	background-color: $orange;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}
</style>