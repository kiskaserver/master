function max(a, b, c) 
{
	console.log(arguments);
	let maxValue = Number.NEGATIVE_INFINITY;
	document.write("<p>Number.NEGATIVE_INFINITY = " + maxValue + "<hr/>");
	for (let i = 0; i < arguments.length; i++)
	(
		if (arguments[i] > maxValue) maxValue = arguments[i];
	)
	return maxValue;
}
let res = max(-33, 33, 777, -666, -22, 888);
document.write("<p>Максимальное значение одного из аргументов функции = " + res);
