function integral(f, a, b, n) {
  let delta_X = (b - a) / n;
  let sum = 0;
  for (let i = 1; i < n + 1; i++) {
    sum += f(a + (i - 1) * delta_X) * delta_X;
  }
  return sum;
}

function myFunc(x, a, b, c) {
  return a * x ** 2 + b * x + c;
}

function calculateIntegral() {
  const coefA = parseFloat(document.getElementById("coefA").value);
  const coefB = parseFloat(document.getElementById("coefB").value);
  const coefC = parseFloat(document.getElementById("coefC").value);
  const lowerLimit = parseFloat(document.getElementById("lowerLimit").value);
  const upperLimit = parseFloat(document.getElementById("upperLimit").value);
  const intervals = parseInt(document.getElementById("intervals").value);

  const result = integral(
    (x) => myFunc(x, coefA, coefB, coefC),
    lowerLimit,
    upperLimit,
    intervals
  );

  document.getElementById("result").textContent = `Result: ${result}`;
}

// Add event listener to the button
document.getElementById("calculateBtn").addEventListener("click", calculateIntegral);
