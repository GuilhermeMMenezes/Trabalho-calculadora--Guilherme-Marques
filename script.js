const resultado = document.getElementById(`result`)

function clicar(char){
    if(resultado.innerText == `0` && char != `.`){
        resultado.innerText = char
    }else {
        if(!(char == `.` && resultado.innerText[resultado.innerText.length - 1] == `.`)){
            resultado.innerText += char
        }
    }
}
function limpar(){
    resultado.innerHTML = `0`
}
function resultadoFinal (){
    // resultado.innerHTML = `Hello World!`
    resultado.innerHTML = eval(resultado.innerText)
}