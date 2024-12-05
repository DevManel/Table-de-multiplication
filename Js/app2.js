for (let i = 0; i <= 10; i++) {
    document.write("<tr>");
    document.write("<td><strong>" + i + "</strong></td>");
    for (let j = 1; j <= 10; j++) {
        document.write("<td>" + (i * j) + "</td>");
    }
    document.write("</tr>");
}
