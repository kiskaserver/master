document.title = "Оператор delete";
let house = {
	roof: "<img src='../Images_LR7/Roof.gif'/><br/>",
	secondFloor: "<img src='../Images_LR7/SecondFloor.gif'/><br/>",
	firstFloor: "<img src='../Images_LR7/FirstFloor.gif'/><br/>",
	basement: "<img src='../Images_LR7/Basement.gif'/><br/>",
	address: "<p style='color:green'>UK. London. Muswell Hill. N10<hr/>"
};

if ("secondFloor" in house)
{
	delete house.secondFloor;
}

if ("roof" in house)
{
	delete house.roof;
}

for (element in house) 
{
	document.write(house[element]);
}
