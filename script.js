function calculate() {
  const salary = Number(document.getElementById("salary").value);
  const cost = Number(document.getElementById("cost").value);

  if (salary <= 0 || cost <= 0) {
    document.getElementById("result").innerText =
      "Those numbers don’t exist in this universe.";
    return;
  }

  const annualHours = 52 * 5 * 8; // 2080 hours
  const hourlyRate = salary / annualHours;

  const hours = cost / hourlyRate;
  const days = hours / 8;

  document.getElementById("result").innerText =
    `That item costs ${hours.toFixed(2)} hours of work
     (~${days.toFixed(2)} working days).`;
}
