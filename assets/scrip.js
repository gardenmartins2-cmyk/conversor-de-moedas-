const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectTwo = document.querySelector("#currency-two")


const currency = {
    real: {
        value: 1,
        locale: "pt-BR",
        currency: "BRL"
    },

    dolar: {
        value: 5.2,
        locale: "en-US",
        currency: "USD"
    },

    euro: {
        value: 6.2,
        locale: "de-DE",
        currency: "EUR"
    },

    libras: {
        value: 7.0,
        locale: "en-GB",
        currency: "GBP"
    },

    bitcoin: {
        value: 0.000025,
        locale: "en-US",
        currency: "BTC"
    }
}


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueInReal = document.querySelector(".currency-value-in-real")
    const currencyValueConverted = document.querySelector(".currency-value")

    // ADICIONAMOS ESTAS DUAS LINHAS
    const fromCurrency = currency[currencySelectTwo.value]
    const toCurrency = currency[currencySelect.value]

    // ADICIONAMOS ESTA LINHA
    const valorInReal = inputCurrencyValue * fromCurrency.value

    // ADICIONAMOS ESTA LINHA
    const convertedValue = valorInReal / toCurrency.value


    currencyValueConverted.innerHTML = new Intl.NumberFormat(
        toCurrency.locale,
        {
            style: "currency",
            currency: toCurrency.currency
        }
    ).format(convertedValue)


    currencyValueInReal.innerHTML = new Intl.NumberFormat(
        fromCurrency.locale,
        {
            style: "currency",
            currency: fromCurrency.currency
        }
    ).format(inputCurrencyValue)
}


function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./img/dólar americano.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/euro.png"
    }

    if (currencySelect.value == "libras") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "./img/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./img/bitcoin 1.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImg.src = "./img/brasil 2.png"
    }


    convertValues()
}
function changeCurrencyTwo() {

    const currencyNameInReal = document.querySelector(".currency")
    const currencyImgInReal = document.querySelector(".currency-box img")


    if (currencySelectTwo.value == "dolar") {
        currencyNameInReal.innerHTML = "Dólar Americano"
        currencyImgInReal.src = "./img/dólar americano.png"
    }

    if (currencySelectTwo.value == "euro") {
        currencyNameInReal.innerHTML = "Euro"
        currencyImgInReal.src = "./img/euro.png"
    }

    if (currencySelectTwo.value == "libras") {
        currencyNameInReal.innerHTML = "Libra Esterlina"
        currencyImgInReal.src = "./img/libra 1.png"
    }

    if (currencySelectTwo.value == "bitcoin") {
        currencyNameInReal.innerHTML = "Bitcoin"
        currencyImgInReal.src = "./img/bitcoin 1.png"
    }

    if (currencySelectTwo.value == "real") {
        currencyNameInReal.innerHTML = "Real Brasileiro"
        currencyImgInReal.src = "./img/brasil 2.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)

currencySelectTwo.addEventListener("change", changeCurrencyTwo)