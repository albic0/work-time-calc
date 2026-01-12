function calculate() {
  const salary = Number(document.getElementById("salary").value);
  const cost = Number(document.getElementById("cost").value);

  if (salary <= 0 || cost <= 0) {
    document.getElementById("result").innerText =
      "Scotland rejects these numbers.";
    return;
  }

  // ---- CONSTANTS ----
  const personalAllowance = 12570;
  const annualHours = 52 * 5 * 8; // 2080

  // ---- SCOTTISH INCOME TAX ----
  let taxableIncome = Math.max(0, salary - personalAllowance);
  let incomeTax = 0;

  const bands = [
    { limit: 2306, rate: 0.19 },   // Starter
    { limit: 11685, rate: 0.20 },  // Basic
    { limit: 17101, rate: 0.21 },  // Intermediate
    { limit: 31338, rate: 0.42 },  // Higher
    { limit: Infinity, rate: 0.47 } // Top
  ];

  let remaining = taxableIncome;

  for (const band of bands) {
    if (remaining <= 0) break;
    const taxableAtThisRate = Math.min(remaining, band.limit);
    incomeTax += taxableAtThisRate * band.rate;
    remaining -= taxableAtThisRate;
  }

  // ---- NATIONAL INSURANCE ----
  let nationalInsurance = 0;

  if (salary > personalAllowance) {
    if (salary <= 50270) {
      nationalInsurance = (salary - personalAllowance) * 0.12;
    } else {
      nationalInsurance =
        (50270 - personalAllowance) * 0.12 +
        (salary - 50270) * 0.02;
    }
  }

  // ---- TAKE HOME ----
  const takeHomePay = salary - incomeTax - nationalInsurance;
  const hourlyRateAfterTax = takeHomePay / annualHours;

  // ---- WORK TIME COST ----
  const hours = cost / hourlyRateAfterTax;
  const days = hours / 8;

  document.getElementById("result").innerText =
    `After tax (Scotland):

• Take-home pay: £${takeHomePay.toFixed(0)} / year
• Hourly rate (after tax): £${hourlyRateAfterTax.toFixed(2)} / hour

That item costs:
• ${hours.toFixed(2)} hours of work
• ~${days.toFixed(2)} working days`;
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
