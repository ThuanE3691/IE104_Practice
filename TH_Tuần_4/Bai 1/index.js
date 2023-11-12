let input = document.getElementsByTagName("input");
let button = document.getElementsByClassName("submit")[0];
let p = document.getElementsByClassName("results")[0];

button.addEventListener("click", () => {
	result = -parseInt(input[1].value) / parseInt(input[0].value);
	p.innerHTML = `KẾT QUẢ <br/>Nghiệm x = ${result} `;
});
