for (var i = 0; i < 7; i++) {
	for (var j = 0; j < i; j++) {
		document.write("*\t");
	}
	document.write("<br>");
}
document.write("<br>");
for (var i = 0; i < 7; i++) {
	for (var j = 0; j < 7; j++) {
		document.write("*\t");
	}
	document.write("<br>");
}
document.write("<br>");
for (var i = 0; i < 7; i++) {
	for (var j = 7; j >i; j--) {
		document.write("*\t");
	}
	document.write("<br>");
}
document.write("<br>");
for (var i = 0; i < 7; i++) {
	for (var j = 0; j < 7; j++) {
		if (i==0||j==0||i==6||j==6)
		 {
			document.write("*\t");
		}
		else
		{
			document.write("&nbsp;\t");
			document.write("&nbsp;");
		}
	}
	document.write("<br>");
}