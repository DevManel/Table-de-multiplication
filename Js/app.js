const number = parseInt(prompt("Entrez un nombre"));
for(let i = 0; i <= 10; i++){
    document.write("<tr>");
    document.write("<td> <strong>" + (i * number) + "</strong></td>");
    document.write("</tr>");
}