document.title = "Масссивы в JavaScript";
let person = {
	firstName: "Jim",
	lastName: "Rainbow",
	age: 30,
	occupation: "Web Developer",
	skill: "JavaScript"
};
document.write("<p>" + person.firstName + " " + person.lastName);
document.write("<p>Язык: " + person.skill);

person.age = 25;
document.write("<p>Возраст: " + person.age + " лет.");
