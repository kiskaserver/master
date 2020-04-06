document.title = "Обьекты";
let instance = { propertyA: 222, propertyB: 444 };

document.write("<p>instance.propertyA = " + instance.propertyA);
document.write("<p>instance.propertyB = " + instance.propertyB);
document.write("<hr/>");
instance.propertyA = 333; 
instance["propertyB"] = 555;  

document.write("<p>instance.propertyA = " + instance.propertyA);
document.write("<p>instance.propertyB = " + instance.propertyB);
document.write("<hr/>");
document.write("<p>instance = " + instance);
