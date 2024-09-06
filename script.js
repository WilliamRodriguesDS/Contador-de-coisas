function repetir() {
    let contador = prompt("Escreva qualquer coisa");
    let mensagem = '';
    //criar o estrutura de repetição for
    for (let i = 1; i <= 10; i = i + 1) {
        mensagem += "A mensagem "+ contador + " está se repetindo pela " + i + "<br>"
        let output = document.querySelector("#output");
        output.innerHTML = mensagem;
    }
}
function limpar(){
    let mensagem = '';
    let output = document.querySelector("#output");
    output.innerHTML = mensagem
}
