<template>
	<div class="number_question" v-bind:class="{'number_question_clicked': (id == current_number)}">
		<div class="number" id="1">{{id}}</div>
	</div>
</template>

<script>
export default {
	name: "NumberQuestion",
	props: {
		id: Number,
		current_number: Number,
	}
};
</script>

<style lang="scss" scoped>
$orange: #f57200;

.number_question {
	width: 30px;
	height: 30px;
	border: 1.5px solid $orange;
	text-align: center;
	margin: 10px;
	color: black;
	background-color: white;
}
.number_question_clicked {
	background-color: $orange;
	color: white;
}
</style>