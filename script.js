const resultado = document.getElementById(`result`)

function clicar(char){
    if(resultado.innerText == `0` && char != `.`){ //Aqui é pra quando for apertar algum numero, o zero inicial sair, para que apareça o numero escolhido
        resultado.innerText = char
    }else {
        if(!(char == `.` && resultado.innerText[resultado.innerText.length - 1] == `.`)){ //Aqui é pra limitar a quantia de pontos
            resultado.innerText += char
        }
    }
}
function limpar(){
    resultado.innerHTML = `0`  //Aqui é pra quando apertar no botão limpar, os numeros voltem a zero (numero inicial)
}
function resultadoFinal (){
    // resultado.innerHTML = `Hello World!`
    resultado.innerHTML = eval(resultado.innerText) //Aqui é pra aparecer o resultado
}