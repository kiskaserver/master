function Sum(a, b)
{
	alert('Hello!'); // return прерывает выполнение кода
	return a + b;
}

function Step(a, b)
{
	alert('Shit!'); // return прерывает выполнение кода
	return Math.pow(a, b); 
}

let res = Sum(2, 3) + "," + Step(2, 4);

document.write(res);
