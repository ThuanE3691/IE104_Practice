let input = document.getElementsByTagName("input");
let textarea = document.getElementsByTagName("textarea")[0];
let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
	const name = `Họ và Tên: ${input[0].value}`;
	const email = `Email: ${input[1].value}`;
	const title = `Mã HĐ: ${input[2].value}`;
	const content = `Nội dung góp ý:\n${textarea.value}`;
	alert(`${name}\n${email}\n${title}\n${content}`);
});
