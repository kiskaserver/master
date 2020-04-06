document.title = "Конструкция for in";
let house = {
	roof: "<img src='../Images_LR7/Roof.gif'/><br/>",
	secondFloor: "<img src='../Images_LR7/SecondFloor.gif'/><br/>",
	firstFloor: "<img src='../Images_LR7/FirstFloor.gif'/><br/>",
	basement: "<img src='../Images_LR7/Basement.gif'/><br/>",
	address: "<p style='color:green'>UK. London. Muswell Hill. N10<hr/>"
};

// Перебор значений свойств в обьекте - house
for (let element in house) 
{
	document.write(house[element]);
}

let arr = [];
let _ind = 0;
arr[0] = true;
arr[4] = 1;
arr[122] = "people";
for (_ind in arr) 
{
	arr[3] = false; 
	console.log(_ind);
}
console.log(arr);
