document.title = "Нажатие кнопки";
function btnClick()
{
	let Txt1 = "";
	let Txt2 = "";
	Txt1 = document.Test.bt.value;
	Txt2 = document.Test.bt.name;
	document.getElementById('ex1').innerHTML="<HR>" +
		"Вы нажали кнопку: " + Txt1.bold() +
		" с именем: "  + Txt2.bold() + "<HR>";
}

function chClick()
{
	let Txt1 = "";
	Txt1 = document.Test.ch.name;
	console.log(document.Test.ch.checked);
	if (document.Test.ch.checked == true)
	{
		document.getElementById('ex1').innerHTML="<HR>"+
		"Вы нажали флажок: " +
		" с именем: "  + Txt1.bold() + "<HR>";
	} else {
		document.getElementById('ex1').innerHTML="";		
	}
}

function btn2Click()
{
	if(document.Test.Sex[0].checked)
	{
		document.Test.Sex[1].click();
	} else {
		document.Test.Sex[0].click();
	}
}

function btn3Click()
{
	let sI = document.Test.Item.selectedIndex;
	let Txt = "";
	Txt = "Предложено " + document.Test.Item.length + " напитков" +
		"\nВыбран " + document.Test.Item.options[sI].text +
		" (value= " + document.Test.Item.options[sI].value +
		", index= " + document.Test.Item.options[sI].index + ")";
	if (document.Test.Item.options[sI].defaultSelected)
	{
		Txt += "\nЭтот напиток выбирается по умолчанию";
	}
	alert(Txt);
}


