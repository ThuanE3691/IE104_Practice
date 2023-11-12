let input = document.getElementsByTagName("input");
let select = document.getElementsByTagName("select")[0];
let textarea = document.getElementsByTagName("textarea")[0];
let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
	const name = `Họ và Tên: ${input[0].value}`;
	const id = `Mã thẻ: ${input[1].value}`;
	const phone = `Số điện thoại: ${input[2].value}`;
	const email = `Email: ${input[3].value}`;
	const typeKH = `Loại KH: ${select.value}`;
	const idHD = `Mã HĐ: ${input[4].value}`;
	const recommend = `Nội dung góp ý:\n${textarea.value}`;
	alert(`${name}\n${id}\n${phone}\n${email}\n${typeKH}\n${idHD}\n${recommend}`);
});
