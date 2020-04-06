document.title = "Создание вложенных обьектов через конструктор";
let human = new Object();
human.firstName = "Alex";
human.lastName = "Jazun";
human.age = 27;

human.occupation = new Object();
human.occupation.company = "Microsoft";
human.occupation.position = "Web Developer";

document.write("<p>First Name: " + human.firstName);
document.write("<p>Last Name: " + human.lastName);
document.write("<p>Age: " + human.age + " years old.");

document.write("<p>Company: " + human.occupation.company);
document.write("<p>Position: " + human.occupation.position);