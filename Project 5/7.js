document.title = "Строитель";
let builder = new Object();
builder.createRoof = function () {
	document.write("<img src='../Images_LR7/Roof.gif'/><br/>");
};
builder.createSecondFloor = function () {
	document.write("<img src='../Images_LR7/FirstFloor.gif'/><br/>");
};
builder.createFirstFloor = function () {
	document.write("<img src='../Images_LR7/SecondFloor.gif'/><br/>");
};
builder.createBasement = function () {
	document.write("<img src='../Images_LR7/Basement.gif'/><br/>");
};
// Строительство дома.
builder.createRoof();
builder.createFirstFloor();
builder.createSecondFloor();
builder.createBasement();
document.write("<br/>");
builder.createFirstFloor();
builder.createSecondFloor();