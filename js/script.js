{
  const calculateResult = (amount, currency) => {
    const USD = 3.97;
    const EURO = 4.35;
    switch (currency) {
      case "USD":
        return amount / USD;
      case "EURO":
        return amount / EURO;
    }
  }

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency)

    updateResultText(amount, result, currency);

  }

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  }

  init();
}
