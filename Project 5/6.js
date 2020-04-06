document.title = "Методы";
let human = new Object();
human.firstName = "Alex";
human.lastName = "Jazun";
human.age = 27;
human.occupation = "<img src='../Images_LR7/Microsoft.jpg' width='152' height='38' />";
console.log(human);
human.show = function()
{
	document.write("<p>First Name: " + this.firstName);
	document.write("<p>Last Name: " + this.lastName);
	document.write("<p>Age: " + this.age + " years old.<br>");
	document.write(this.occupation + "<hr/>");
}

human.changeWork = function (new_occupation) {
	this.occupation = new_occupation;
}

human.show();
human.changeWork("<img src='../Images_LR7/CyberBionic Systematics.jpg'/>");
human.show();