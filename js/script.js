var salario = document.getElementById("salario").value

document.getElementById("formDespesas").addEventListener("submit", function(event){
    alert("teste")
    event.preventDefault()

    var data = document.getElementById("data").value.format('DD/MM/YYYY')
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
        li.textContent = 'Data:' + historicoDespesas[i].data + ' Nome:' + historicoDespesas[i].nome + ' Valor:' + historicoDespesas[i].valor
        output.appendChild(li)
    }
}

function atualizarSaldo(){
    var pSalario = document.getElementById("pSalario")
    var pDespesas = document.getElementById("pDespesas")
    var pSaldo = document.getElementById("pSaldo")
}