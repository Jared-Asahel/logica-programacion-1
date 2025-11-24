let numA = Number(prompt("Ingresa el primer número"));
let numB = Number(prompt("Ingresa el segundo número"));
let numC = Number(prompt("Ingresa el tercer número"));

let salida = document.getElementById("salida");

if (numA == numB && numB == numC) {
  salida.innerHTML = `Todos los números son iguales: ${num1}, ${num2}, ${num3}`;
} else {
  let numeros = [numA, numB, numC];

  let mayorMenor = [...numeros].sort((a, b) => b - a);
  let menorMayor = [...numeros].sort((a, b) => a - b);

  salida.innerHTML = `
    <p><strong>De mayor a menor:</strong> ${mayorMenor.join(", ")}</p>
    <p><strong>De menor a mayor:</strong> ${menorMayor.join(", ")}</p>
  `;
}
