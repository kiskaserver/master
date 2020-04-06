document.title = "Оператор delete в массивах";
let array = new Array(0, 1, 2, 3, 4, 5, 6, 7);
document.write("<p>Массив до удаления: " + array.join(", "));
let index = prompt("Выберите индекс элемента для удаления: " + array.join(", "));
delete array[index];
document.write("<p>Массив после удаления: " + array.join(", "));

