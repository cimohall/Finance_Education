// Lumpsum Calculator Function
function calculateLumpsum() {
  const lumpsumAmount = parseFloat(document.getElementById("lumpsumAmount").value);
  const returnRate = parseFloat(document.getElementById("returnRate").value) / 100;
  const years = parseInt(document.getElementById("yearsLumpsum").value);
  const inflationRate = parseFloat(document.getElementById("inflationRateLumpsum").value) / 100;

  if ([lumpsumAmount, returnRate, years, inflationRate].some(isNaN) || lumpsumAmount <= 0 || years <= 0) {
      document.getElementById("lumpsumFutureValue").textContent = "Please enter valid positive values.";
      document.getElementById("lumpsumAdjustedValue").textContent = "";
      return;
  }

  const futureValue = lumpsumAmount * Math.pow(1 + returnRate, years);
  const adjustedValue = futureValue / Math.pow(1 + inflationRate, years);

  document.getElementById("lumpsumFutureValue").textContent = `Future Value: ₹${futureValue.toFixed(2)}`;
  document.getElementById("lumpsumAdjustedValue").textContent = `Adjusted Value: ₹${adjustedValue.toFixed(2)}`;
}

// SIP Calculator Function
function calculateSIP() {
  const sipAmount = parseFloat(document.getElementById("sipAmount").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
  const years = parseInt(document.getElementById("years").value);
  const inflationRate = parseFloat(document.getElementById("inflationRate").value) / 100;

  if ([sipAmount, interestRate, years, inflationRate].some(isNaN) || sipAmount <= 0 || years <= 0) {
      document.getElementById("sipFutureValue").textContent = "Please enter valid positive values.";
      document.getElementById("sipAdjustedValue").textContent = "";
      return;
  }

  const monthlyRate = interestRate / 12;
  const months = years * 12;
  const futureValue = sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const adjustedValue = futureValue / Math.pow(1 + inflationRate, years);

  document.getElementById("sipFutureValue").textContent = `Future Value: ₹${futureValue.toFixed(2)}`;
  document.getElementById("sipAdjustedValue").textContent = `Adjusted Value: ₹${adjustedValue.toFixed(2)}`;
}
