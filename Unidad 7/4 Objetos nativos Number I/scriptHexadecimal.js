//Script para ver cómo se cuenta en Hexadecimal

for (let i = 0; i <= 255; i++) {
  let hexadecimal = i.toString(16).toUpperCase();
  document.write("<p>" + `Decimal: ${i}, Hexadecimal: 0x${hexadecimal}` + "</p>");
}
