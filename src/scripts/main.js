// Прелоудер
const loginPage = document.querySelector(".login-page");
if (loginPage) {
	window.onload = function () {
		setTimeout(() => {
			loginPage.classList.add("active");
		}, 300);
	};
}

// Маска для номера телефона
// https://imask.js.org
document.querySelectorAll("input[type='tel']").forEach((item) => {
	let telMask = IMask(item, {
		mask: "+{7}(000)000-00-00",
	});
	/*Добавление и удаление класса при снятии фокуса с data-type="tel"*/
	telMask.on("accept", function () {
		item.setCustomValidity("Укажите полностью номер телефона.");
		item.classList.add("error");
	});
	telMask.on("complete", function () {
		item.setCustomValidity("");
		item.classList.remove("error");
	});
});
