let button = document.getElementsByTagName("button")[0];
let input = document.getElementsByTagName("input")[1];

button.addEventListener("click", () => {
	if (confirm("Bạn muốn hiện mật khẩu")) {
		input.type = "text";
	} else {
		input.type = "password";
	}
});
