var salario = document.getElementById("salario").value.parseFloat

document.getElementById("formDespesas").addEventListener("submit", function(event){
    var data = document.getElementById("data").value
    var nome = document.getElementById("nome").value
    var valor = document.getElementById("valor").value.parseFloat

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
}