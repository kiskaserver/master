document.title = "Динамическое заполнение списка";
for (i = 0; i < document.links.length; i++) {
	document.Sel.ListOfLinks.options[i] = new Option(
		document.links[i],
		i,
		false,
		false
	);
}
document.Sel.ListOfLinks.selectedIndex = 0;
