var salario = document.getElementById("salario").value
salario = parseFloat(salario).toFixed(2)

document.getElementById("formDespesas").addEventListener("submit", function(event){
    event.preventDefault()

    var data = document.getElementById("data").value.split('-').reverse().join('/')
    var nome = document.getElementById("nome").value
    var valor = document.getElementById("valor").value

    var despesa = {data:data, nome:nome, valor:valor}

    var historicoDespesas = JSON.parse(localStorage.getItem('listagem')) || []
    historicoDespesas.push(despesa)

    localStorage.setItem('listagem', JSON.stringify(historicoDespesas))

    document.getElementById("formDespesas").reset()
    exibir_despesas()
})

function exibir_despesas(){
    var historicoDespesas = JSON.parse(localStorage.getItem('listagem')) || []
    var output = document.getElementById("output")
    output.innerHTML = ""
    for(let i=0; i<historicoDespesas.length; i++){
        let li = document.createElement('li')
        historicoDespesas[i].valor = parseFloat(historicoDespesas[i].valor).toFixed(2)
        li.textContent = 'Data: ' + historicoDespesas[i].data + '  Nome: ' + historicoDespesas[i].nome + '  Valor: R$' + historicoDespesas[i].valor
        output.appendChild(li)
    }
}