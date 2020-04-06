document.title = "Отправьте телеграмму";
let OK = "Тетя Эльза чувствует себя хорошо.\nЮстас.";
let Problem = "Тетя Эльза заболела.\nЮстас.";
function getDate()
{
	let today = new Date();
	return today.toLocaleString() + "\n";
}
function checkRadio(form, value)
{
	if (value == "Good") form.Letter.value = getDate() + OK;
	else form.Letter.value = getDate() + Problem;
}
