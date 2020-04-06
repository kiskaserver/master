let a = 10;
let b = 15;
let c = 20;
let d = 21;
let x1;
let x2l
function Sum1()
{
	let result = a + b;
	document.write("<p>Sum1 result: " + result);
}
function Sum2(x1,x2)
{
	let result = x1 + x2;
	document.write("<p>Sum2 result: " + result);
}
Sum1();
Sum2();
Sum2(c,d);
