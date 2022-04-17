let button = document.getElementById("button")
let select = document.getElementById("select-moedas")


async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high



    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dólar Americano") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-us', { style: 'currency', currency: 'USD' })
    }

    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString('de-de', { style: 'currency', currency: 'EUR' })
    }


    textoReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}


// Essa funcao e responsavel por trocar a bandeira e o nome das moedas
function trocaDeMoeda() {

    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")


    if (select.value === "US$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./img/eua.png"
    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/euro.png"
    }

    converterMoedas()
}

button.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)
