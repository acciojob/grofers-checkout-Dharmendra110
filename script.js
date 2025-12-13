const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  let prices = document.querySelectorAll(".price");
  let total = 0;
 prices.forEach((p)=> {
    total += parseInt(p.innerText);
  });
	const totalRow= document.createElement("tr");
	const totalName = document.createElement("td");
	const totalPrice = document.createElement("td");

	totalName.textContent = "total Price";
	totalPrice.textContent = `${total}`
	totalRow.append(totalName,totalPrice)
	totalRow.id ="ans"
	document.querySelector("table").appendChild(totalRow);

};

getSumBtn.addEventListener("click", getSum);
