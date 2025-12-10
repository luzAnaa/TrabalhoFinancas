exibir_despesas()
resumo_financeiro()
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
    resumo_financeiro()
})

function exibir_despesas(){
    var historicoDespesas = JSON.parse(localStorage.getItem('listagem')) || []
    var output = document.getElementById("output")
    output.innerHTML = ""
    for(let i=0; i<historicoDespesas.length; i++){
        let li = document.createElement('li')
        historicoDespesas[i].valor = parseFloat(historicoDespesas[i].valor).toFixed(2)
        li.textContent = 'Data: ' + historicoDespesas[i].data + ' | Nome: ' + historicoDespesas[i].nome + ' | Valor: R$' + historicoDespesas[i].valor
        output.appendChild(li)
    }
}

function resumo_financeiro(){
    var resumo = document.getElementById("resumo")
    resumo.innerHTML = ""

    var salario = parseFloat(document.getElementById("salario").value).toFixed(2)
    if(isNaN(salario)){
        salario = 0
    }
    var pSalario = document.createElement('p')
    pSalario.textContent = 'Salário: R$' + salario
    resumo.appendChild(pSalario)

    var historicoDespesas = JSON.parse(localStorage.getItem('listagem')) || []
    var totalDespesas = 0 
    for(let i=0; i<historicoDespesas.length; i++){
        totalDespesas = totalDespesas + parseFloat(historicoDespesas[i].valor)
    }
    var pDespesas = document.createElement('p')
    pDespesas.textContent = 'Total das despesas: R$' + totalDespesas.toFixed(2)
    resumo.appendChild(pDespesas)

    var saldoFinal = salario - totalDespesas
    var pTotal = document.createElement('p')
    pTotal.textContent = 'Saldo final: R$' + saldoFinal.toFixed(2)
    resumo.appendChild(pTotal)
    


}

function deletar(){
    localStorage.removeItem('listagem')
    exibir_despesas()
    resumo_financeiro()
}

function salvar(){
    var salario = parseFloat(document.getElementById("salario").value).toFixed(2) 
    if(isNaN(salario)){
        alert("Por favor, insira um valor válido para o salário.")
        return
    }
    resumo_financeiro()
}