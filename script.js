const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");

  let total = 0;

  prices.forEach(p => {
    total += Number(p.textContent);
  });

  const table = document.querySelector("table");

  const oldRow = document.getElementById("totalRow");
  if (oldRow) oldRow.remove();

  const newRow = document.createElement("tr");
  newRow.id = "totalRow";

  const totalLabel = document.createElement("td");
  totalLabel.textContent = "Total Price";

  const totalValue = document.createElement("td");
  totalValue.textContent = total;

  newRow.appendChild(totalLabel);
  newRow.appendChild(totalValue);

  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
