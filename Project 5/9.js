document.title = "Проверка существования свойства thirdFloor";
let house = {
	roof: "<img src='../Images_LR7/Roof.gif'/><br/>",
	secondFloor: "<img src='../Images_LR7/SecondFloor.gif'/><br/>",
	firstFloor: "<img src='../Images_LR7/FirstFloor.gif'/><br/>",
	basement: "<img src='../Images_LR7/Basement.gif'/><br/>",
	address: "<p style='color:green'>UK. London. Muswell Hill. N10<hr/>"
};

if ("thirdFloor" in house)
{
	document.write(house["thirdFloor"]);
} else {
	document.write(house["secondFloor"]);
}

for (let element in house) 
{
	document.write(house[element]);
}