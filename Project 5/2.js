document.title = "Конструктор Object()";
let point = new Object();
point.x = 10;
point.y = 15;
point.f = function () {
	document.write("<p>x = " + point.x + "<p>y = " + point.y);
};
point.f();
