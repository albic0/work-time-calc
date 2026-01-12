function calculate() {
  const wage = Number(document.getElementById("wage").value);
  const cost = Number(document.getElementById("cost").value);

  if (wage <= 0 || cost <= 0) {
    document.getElementById("result").innerText =
      "Enter real numbers, not dreams.";
    return;
  }

  const hours = cost / wage;
  const days = hours / 8;

  document.getElementById("result").innerText =
    `That item costs ${hours.toFixed(2)} hours of work
     (~${days.toFixed(2)} work days).`;
}
