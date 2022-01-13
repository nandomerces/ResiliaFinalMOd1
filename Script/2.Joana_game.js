function levelUmJoana(){
    while (pergunta != 1 || pergunta != 2) {
        var pergunta = prompt(
            `1. Se esconde no banheiro dos empregados da mansão\n\n 2.Se esconde no duto do ar condicionado\n`);

    if (pergunta == 1) {
    /*Errou. Tela Gameover*/
        window.location.href ="./2.1Joana_final.html";
        break;
    /*Resposta certa. encaminha para a próxima fase*/
    } else if (pergunta == 2) {
        window.location.href = "./2.1Joana.html"; 
        break;
        /*Caso não coloque nenhum dos número. Obrigo ele a preencher*/
    } else {
        alert("Por favor, escolha uma opção. 01 ou 02.")
    }
}
}

function levelDoisJoana(){
    while (pergunta != 1 || pergunta != 2) {
        var pergunta = prompt(
            `1. Vou ficar esperando aqui no duto de ventilação da mansão e quando anoitecer, saio escondida como algum funcionário da mansão\n\n 2.=Vou andar pelos dutos, até encontrar uma sala liberada.\n`);

    if (pergunta == 1) {
         /*Errou. Tela Game Over*/
        window.location.href ="./2.2Joana_final.html";
        break;
         /*Se acertou, encaminha para a próxima fase*/
    } else if (pergunta == 2) {
        window.location.href = "./2.2Joana.html";
        break;
    } else {
        alert("Por favor, escolha uma opção. 01 ou 02.")
    }
}
}

function levelTresJoana(){
    while (pergunta != 1 || pergunta != 2) {
        var pergunta = prompt(
            `1. Viro para a direita."\n\n 2.Viro para a esquerda.\n`);

    if (pergunta == 1) {
        /*Errou. Tela Game Over*/
        window.location.href ="./2.3Joana_final.html";
        break;
    } else if (pergunta == 2) {
        /*Acertou. Tela Game Over Resolução do Caso*/
        window.location.href = "./2.3Joana_final2.html";
        break;
    } else {
        alert("Por favor, escolha uma opção. 01 ou 02.")
    }
}
}