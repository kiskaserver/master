document.title = "Заполните анкету";
function Complete()
{
	let Elem = "Фамилия: " + document.Sel1.Family.value +
		"\nИмя: " + document.Sel1.Name.value +
		"\nВозраст: " + document.Sel1.Age.value +
		"\nТелефон: " + document.Sel1.Phone.value;
	alert(Elem);
}

function CheckAge(age)
{
	if (age < 18)
	{
		return "18";
	} else { 
		return age;
	}
}
