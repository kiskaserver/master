document.title = "Вложенные обьекты";
let human = {
	firstName: "Alex",
	secondName: "Jazun",
	age: 27,
	occupation: {
		company: "ZIEIT",
		position: "Teacher",
		education: {
			status: "Higher",
			location: "University"
		}		
	}
};
document.write("<p>First name: " + human.firstName);
document.write("<p>Second name: " + human.secondName);
document.write("<p>Age: " + human.age + " years old");
document.write("<p>Company: " + human.occupation.company);
document.write("<p>Position: " + human.occupation.position);
document.write("<p>Education: " + human.occupation.education.status);