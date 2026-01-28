// Function that clears all fields
function reset() {
  document.getElementById("fahr").value = "";
  document.getElementById("cels").value = "";
  document.getElementById("kel").value = "";
}

// Function to convert temperatures
function convert(degrees) {
  const fahr = document.getElementById("fahr");
  const cels = document.getElementById("cels");
  const kel  = document.getElementById("kel");

  let x, y;

  // Fahrenheit input
  if (degrees === "fahrenheit") {
    if (fahr.value === "") {
      cels.value = "";
      kel.value = "";
      return;
    }

    x = (fahr.value - 32) * 5 / 9;
    cels.value = x.toFixed(2);

    y = (parseFloat(fahr.value) + 459.67) * 5 / 9;
    kel.value = y.toFixed(2);
  }

  // Celsius input
  else if (degrees === "celsius") {
    if (cels.value === "") {
      fahr.value = "";
      kel.value = "";
      return;
    }

    x = cels.value * 9 / 5 + 32;
    fahr.value = x.toFixed(2);

    y = parseFloat(cels.value) + 273.15;
    kel.value = y.toFixed(2);
  }

  // Kelvin input
  else if (degrees === "kelvin") {
    if (kel.value === "") {
      fahr.value = "";
      cels.value = "";
      return;
    }

    x = (kel.value - 273.15) * 9 / 5 + 32;
    fahr.value = x.toFixed(2);

    y = kel.value - 273.15;
    cels.value = y.toFixed(2);
  }
}
