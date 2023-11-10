// NUEVOS MÉTODOS DEL OBJETO MATH

// Math.trunc() -> devuelve la parte entera de un número, eliminando el punto y los dígitos a su derecha
// Equivale a Math.floot() si el argumento es positivo; si el argumento no es positivo, equivale a Math.ceil()
console.log(`Math.trunc(12.3456): ${Math.trunc(12.3456)}`); // 12
console.log(`Math.floor(12.3456): ${Math.floor(12.3456)}`); // 12 -> Se comporta igual que trunc()
console.log(`Math.ceil(12.3456): ${Math.ceil(12.3456)}`); // 13
console.log(`Math.round(12.3456): ${Math.round(12.3456)}`); // 12

console.log(`Math.trunc(98.7654): ${Math.trunc(98.7654)}`); // 98
console.log(`Math.floor(98.7654): ${Math.floor(98.7654)}`); // 98 -> Se comporta igual que trunc()
console.log(`Math.ceil(98.7654): ${Math.ceil(98.7654)}`); // 99
console.log(`Math.round(98.7654): ${Math.round(98.7654)}`); // 98

console.log(`Math.trunc(-98.7654): ${Math.trunc(-98.7654)}`); // -98
console.log(`Math.floor(-98.7654): ${Math.floor(-98.7654)}`); // -99
console.log(`Math.ceil(-98.7654): ${Math.ceil(-98.7654)}`); // -98 -> Se comporta igual que trunc()
console.log(`Math.round(-98.7654): ${Math.round(-98.7654)}`); // -99

console.log(`Math.trunc(-98.1234): ${Math.trunc(-98.123)}`); // -98
console.log(`Math.floor(-98.1234): ${Math.floor(-98.123)}`); // -99
console.log(`Math.ceil(-98.1234): ${Math.ceil(-98.123)}`); // -98 -> Se comporta igual que trunc()
console.log(`Math.round(-98.1234): ${Math.round(-98.123)}`); // -98



// Math.sign() -> devuelve el signo de un número pudiendo ser:
// 1 (positivo), -1 (negativo), 0 (cero positivo) o -0 (cero negativo), NaN (valor NaN)
console.log(`Math.sign(-7): ${Math.sign(-7)}`); // -1
console.log(`Math.sign(7): ${Math.sign(7)}`); // 1
console.log(`Math.sign(0): ${Math.sign(0)}`); // 0
console.log(`Math.sign(-0): ${Math.sign(-0)}`); // -0
console.log(`Math.sign(NaN): ${Math.sign(NaN)}`); // NaN
console.log(`Math.sign("otra cosa"): ${Math.sign("otra cosa")}`); // NaN
console.log(`Math.sign("-7"): ${Math.sign("-7")}`); // -1
console.log(`Math.sign("7"): ${Math.sign("7")}`); // 1
console.log(`Math.sign("0"): ${Math.sign("0")}`); // 0
console.log(`Math.sign("-0"): ${Math.sign("-0")}`); // -0
console.log(`Math.sign("NaN"): ${Math.sign("NaN")}`); // NaN



// Math.cbrt() -> devuelve la raíz cúbica de un número pasado por parámetro
console.log(`Math.sign(64): ${Math.cbrt(64)}`); // 4
console.log(`Math.cbrt("64"): ${Math.cbrt("64")}`); // 4
console.log(`Math.cbrt(5): ${Math.cbrt(5)}`); // 1.709975946676697
