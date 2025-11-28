function celsiusToFahrenheit(celsius) {
  // Fórmula: F = (C * 9/5) + 32
  return (celsius * 9) / 5 + 32;
}

function celsiusToKelvin(celsius) {
  // Fórmula: K = C + 273.15
  return celsius + 273.15;
}

function iniciarConversor() {
  let entrada = Number(prompt("Ingresa los grados en celsius"));

  if (entrada === null) {
    console.log("Proceso de conversión cancelado por el usuario.");
    return;
  }

  if (isNaN(entrada)) {
    console.error(`ERROR: "${entrada}" no es un número válido.`);
    return;
  }

  const fahrenheit = celsiusToFahrenheit(entrada);
  const kelvin = celsiusToKelvin(entrada);

  console.log("--- RESULTADOS DE CONVERSIÓN ---");
  console.log(`Temperatura ingresada: ${entrada} °C`);
  console.log(`Convertido a Fahrenheit: ${fahrenheit} °F`);
  console.log(`Convertido a Kelvin: ${kelvin} K`);
  console.log("---------------------------------");
}

iniciarConversor();
