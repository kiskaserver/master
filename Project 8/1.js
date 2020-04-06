document.title = "Регистрация";
function Complete()
{
	if (document.Sel3.Pwd.value == document.Sel3.Pwd1.value)
	{
		alert("Вас зарегистрировали\nID = "
			+ document.Sel3.Id.value + "\nPassword = "
			+ document.Sel3.Pwd.value
		);
	} else {
		alert("Ошибка при вводе пароля\nПопробуйте еще раз!");
	}
}