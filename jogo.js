function papel(){
    alert("Sua escolha foi papel")
    computer(0)
}

function tesoura(){
    alert("Sua escolha foi tesoura")
    computer(1)
}

function pedra(){
    alert("Sua escolha foi pedra")
    computer(2)
}
function computer(minha_escolha){
    var numero = Math.floor(Math.random() * 3)
    //alert("numero aleatorio: " + numero)
    if (numero == 0){
        alert("O computador escolheu: Papel")
    }
    if (numero == 1){
        alert("O computador escolheu: Tesoura")
    }
    if (numero == 2){
        alert("O computador escolheu: Pedra")
    }

    if (numero == 0 && minha_escolha == 0){
        alert("Empate!")
    }
    if (numero == 1 && minha_escolha == 1){
        alert("Empate!")
    }
    if (numero == 2 && minha_escolha == 2){
        alert("Empate!")
    }
    if (numero == 0 && minha_escolha == 1){
        alert("Parabéns!")
    }
    if (numero == 0 && minha_escolha == 2){
        alert("Você perdeu :'(")
    }
    if (numero == 1 && minha_escolha == 0){
        alert("Você perdeu :'(")
    }
    if (numero == 1 && minha_escolha == 2){
        alert("Parabéns!")
    }
    if (numero == 2 && minha_escolha == 0){
        alert("Parabéns!")
    }
    if (numero == 2 && minha_escolha == 1){
        alert("Você perdeu :'(")
    }
}
