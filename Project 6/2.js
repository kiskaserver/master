let vacation = {
	turkey: {
		price: 2800,
		img: "../Images_LR8/turkey.jpg",
		description:
		"Турция – государство на юго-востоке Европы и юго-западе Азии, культура которого сочетает древнегреческие, персидские, римские, византийские и османские традиции."
	},
	egypt: {
		price: 2000,
		img: "../Images_LR8/egipet.jpg",
		description:
		"Египет – страна в Северо-Восточной Африке и на Ближнем Востоке. О ее богатой истории, насчитывающей более пяти тысяч лет, напоминают археологические памятники в плодородной долине реки Нил, среди которых пирамиды Гизы, Большой сфинкс, а также Карнакский храм"
	},
	spain: {
		price: 4500,
		img: "../Images_LR8/spain.jpg",
		description:
		"Испания – европейская страна, расположенная на Пиренейском полуострове. Территория Испании разделена на 17 автономных регионов. В столице страны, Мадриде, находятся Королевский дворец и музей Прадо, где хранятся произведения европейских мастеров."
	},
	france: {
		price: 3500,
		img: "../Images_LR8/france.jpg",
		description:
		"Франция – это страна в Западной Европе, на территории которой находятся средневековые города, альпийские деревни и пляжи Средиземного моря."
	},
	somali: {
		price: 1000,
		img: "../Images_LR8/somali.jpg",
		description:
		"Республика Сомали́ — восточноафриканское государство. В результате гражданской войны и деятельности сепаратистов Сомали на долгое время фактически прекратило своё существование и распалось на множество частей."
	},
	calc: function(people, days, country)
	{
		let result = people * days * this[country].price;
		return result;
	}
};

for (element in vacation)
{
	if (vacation[element]["price"] != undefined)
	{
		document.write("<div class='card' style='width: 18rem;'><img src=" + vacation[element]["img"] + " class='card-img-top'><div class='card-body'><p class='card-text'>Цена тура: " + vacation[element]["price"] + " грн. <br><br>" + vacation[element]["description"] +"</p></div></div><br>");
	}
}

function s4et()
{
	let country = prompt(
		"Куда летите? Можем предложить следующие варианты: turkey, egypt, spain, france, somali."
	);
	let people = +prompt("Сколько человек летит?");
	let days = +prompt("На сколько дней поездка?");	
	res = vacation.calc(people, days, country);
	add = document.getElementById("out").innerHTML = "<br><div class='alert alert-success' role='alert' style='width: 18rem;'><h4 class='alert-heading'>Ура!</h4><p>Ваша поезда в " + country + " будет стоить: " + res + " грн.</p></div><br>";
	return add;
}