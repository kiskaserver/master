function arrs()
{
	let arr = [
		{
			"id": 1,
			"name": "Leanne Graham",
			"username": "Bret",
			"email": "Sincere@april.biz",
			"address": {
				"street": "Kulas Light",
				"suite": "Apt. 556",
				"city": "Gwenborough",
				"zipcode": "92998-3874",
				"geo": {
					"lat": "-37.3159",
					"lng": "81.1496"
				}
			},
			"phone": "1-770-736-8031 x56442",
			"website": "hildegard.org",
			"company": {
				"name": "Romaguera-Crona",
				"catchPhrase": "Multi-layered client-server neural-net",
				"bs": "harness real-time e-markets"
			}
		},
		{
			"id": 2,
			"name": "Ervin Howell",
			"username": "Antonette",
			"email": "Shanna@melissa.tv",
			"address": {
				"street": "Victor Plains",
				"suite": "Suite 879",
				"city": "Wisokyburgh",
				"zipcode": "90566-7771",
				"geo": {
					"lat": "-43.9509",
					"lng": "-34.4618"
				}
			},
			"phone": "010-692-6593 x09125",
			"website": "anastasia.net",
			"company": {
				"name": "Deckow-Crist",
				"catchPhrase": "Proactive didactic contingency",
				"bs": "synergize scalable supply-chains"
			}
		},
		{
			"id": 3,
			"name": "Clementine Bauch",
			"username": "Samantha",
			"email": "Nathan@yesenia.net",
			"address": {
				"street": "Douglas Extension",
				"suite": "Suite 847",
				"city": "McKenziehaven",
				"zipcode": "59590-4157",
				"geo": {
					"lat": "-68.6102",
					"lng": "-47.0653"
				}
			},
			"phone": "1-463-123-4447",
			"website": "ramiro.info",
			"company": {
				"name": "Romaguera-Jacobson",
				"catchPhrase": "Face to face bifurcated interface",
				"bs": "e-enable strategic applications"
			}
		},
		{
			"id": 4,
			"name": "Patricia Lebsack",
			"username": "Karianne",
			"email": "Julianne.OConner@kory.org",
			"address": {
				"street": "Hoeger Mall",
				"suite": "Apt. 692",
				"city": "South Elvis",
				"zipcode": "53919-4257",
				"geo": {
					"lat": "29.4572",
					"lng": "-164.2990"
				}
			},
			"phone": "493-170-9623 x156",
			"website": "kale.biz",
			"company": {
				"name": "Robel-Corkery",
				"catchPhrase": "Multi-tiered zero tolerance productivity",
				"bs": "transition cutting-edge web services"
			}
		},
		{
			"id": 5,
			"name": "Chelsey Dietrich",
			"username": "Kamren",
			"email": "Lucio_Hettinger@annie.ca",
			"address": {
				"street": "Skiles Walks",
				"suite": "Suite 351",
				"city": "Roscoeview",
				"zipcode": "33263",
				"geo": {
					"lat": "-31.8129",
					"lng": "62.5342"
				}
			},
			"phone": "(254)954-1289",
			"website": "demarco.info",
			"company": {
				"name": "Keebler LLC",
				"catchPhrase": "User-centric fault-tolerant solution",
				"bs": "revolutionize end-to-end systems"
			}
		}
	]
	result = arr.filter(elem => elem.address.city == "McKenziehaven");
	result.forEach(element => {
		document.getElementById('sack').innerHTML += "<TR><TD><B>ID</B></TD><TD>" + element.id + "</TD></TR>";
		document.getElementById('sack').innerHTML += "<TR><TD><B>Name</B></TD><TD>" + element.name + "</TD></TR>";
		document.getElementById('sack').innerHTML += "<TR><TD><B>Email</B></TD><TD>" + element.email + "</TD></TR>";
		document.getElementById('sack').innerHTML += "<TR><TD><B>Address</B></TD><TD>" + element.address.street + "</TD>" +
		"<TD>" + element.address.suite + "</TD>" +
		"<TD>" + element.address.city + "</TD>" +	
		"<TD>" + element.address.zipcode + "</TD>" + 
		"<TD>" + element.address.geo.lat + "</TD>" +
		"<TD>" + element.address.geo.lng + "</TD>" +
		"</TR>";
		document.getElementById('sack').innerHTML += "<TR><TD><B>Phone</B></TD><TD>" + element.phone + "</TD></TR>";
		document.getElementById('sack').innerHTML += "<TR><TD><B>Website</B></TD><TD>" + element.website + "</TD></TR>";
		document.getElementById('sack').innerHTML += "<TR><TD><B>Company</B></TD><TD>" + element.company.name + "</TD>" +
		"<TD>" + element.company.catchPhrase + "</TD>" +
		"<TD>" + element.company.bs + "</TD>" +
		"</TR>";
	});
}

//arrs();

function mass()
{
	let sample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let mapped = sample.map(elem => elem * 10);
	return mapped;
}

//document.getElementById('sack').innerHTML = mass();

function ucFirst() 
{
	let str = prompt("Введите бла: ", 0);
	if (!str)
	{
		return str;
	}

	return str[0].toUpperCase() + str.slice(1);
}

//alert(ucFirst());

function sumInput() 
{
	let s4isla = [];
	while (true) 
	{
		let value = prompt("Введите число: ", 0);
		if (value === "" || value === null || !isFinite(value))
		{
			break;
		}
		s4isla.push(+value);
	}

	let sum = 0;
	for (let elem of s4isla)
	{
		sum += elem;
	}
	return sum;
}

//alert(sumInput());