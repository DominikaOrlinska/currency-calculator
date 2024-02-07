let formElement = document.querySelector(".js-form");

let amountElement = document.querySelector(".js-amount");

let currencyElement = document.querySelector(".js-currency");

let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;
  let result = resultElement.value;

  let USD = 3.97;
  let EURO = 4.35;

  switch (currency) {
    case "USD":
      result = amount / USD;
      break;
    case "EURO":
      result = amount / EURO;
      break;
  }

  resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
});