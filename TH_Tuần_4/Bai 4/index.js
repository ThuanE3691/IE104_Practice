let input = document.getElementsByTagName("input");
let select = document.getElementsByTagName("select")[0];
let button = document.getElementsByTagName("button")[0];
let resultsDisplay = document.getElementsByClassName("results")[0];

button.addEventListener("click", () => {
	let results = {
		weight: parseInt(input[0].value),
		height: parseFloat(input[1].value),
		type: select.value,
	};

	results.bmi = results.weight / (results.height * results.height);
	results.bmiRecommend = "";

	if (results.bmi <= 18.5) results.bmiType = "Dưới chuẩn";
	else if (results.bmi <= 24.9) results.bmiType = "Bình thường";
	else if (results.bmi <= 29.9) results.bmiType = "Thừa cân";
	else if (results.bmi <= 34.9) {
		results.bmiType = "béo phì độ 1";
		if (results.type === "Trung niên") results.bmiRecommend = "Khám định kỳ";
	} else if (results.bmi <= 39.9) {
		results.bmiType = "béo phì độ 2";
		if (results.type === "Trung niên, Già lớn tuổi")
			results.bmiRecommend = "Tập thể dục thường xuyên";
	} else {
		results.bmiType = "béo phì độ 3";
		if (results.type === "Già, lớn tuổi")
			results.bmiRecommend = "Hạn chế ăn mỡ động vật";
	}

	let bmiDisplay = resultsDisplay.children[1];
	let bmiType = resultsDisplay.children[3];
	let bmiRecommend = resultsDisplay.children[5];

	bmiDisplay.innerText = results.bmi;
	bmiType.innerText = results.bmiType;
	bmiRecommend.innerText = results.bmiRecommend;

	resultsDisplay.className = resultsDisplay.className.replace("hidden", "");
});
