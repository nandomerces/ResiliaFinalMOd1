function levelUmHermes(){
    while (pergunta != 1 || pergunta != 2) {
        var pergunta = prompt(
            `1. "Entendido, senhores! Sou um policial bastante experiente! Vou analisar sozinho o local do roubo."\n\n 2."Entendido, senhores! Mas primeiro, vamos chamar reforço!"\n`);

    if (pergunta == 1) {
    /*Errou. Tela Gameover*/
        window.location.href ="./3.1Hermes_final.html";
        break;
    /*Resposta certa. encaminha para a próxima fase*/
    } else if (pergunta == 2) {
        window.location.href = "./3.1Hermes.html"; 
        break;
        /*Caso não coloque nenhum dos número. Obrigo ele a preencher*/
    } else {
        alert("Por favor, escolha uma opção. 01 ou 02.")
    }
}
}

function levelDoisHermes(){
    while (pergunta != 1 || pergunta != 2) {
        var pergunta = prompt(
            `1. Fechar todas as saídas da mansão, assim ela não terá como escapar!\n\n 2. Procurar pistas sobre o roubo, para saber mais informações.\n`);

    if (pergunta == 1) {
         /*Errou. Tela Game Over*/
        window.location.href ="./3.2Hermes.html";
        break;
         /*Se acertou, encaminha para a próxima fase*/
    } else if (pergunta == 2) {
        window.location.href = "./3.2Hermes_final.html";
        break;
    } else {
        alert("Por favor, escolha uma opção. 01 ou 02.")
    }
}
}

function levelTresHermes(){
    while (pergunta != 1 || pergunta != 2) {
        var pergunta = prompt(
            `1. Vamos esperar na viatura e quando ela tentar fugir: a capturamos! \n\n 2. Vamos casculhar todos os cantos dessa mansão!\n`);

    if (pergunta == 1) {
        /*Errou. Tela Game Over*/
        window.location.href ="./3.3Hermes_final2.html";
        break;
    } else if (pergunta == 2) {
        /*Acertou. Tela Game Over Resolução do Caso*/
        window.location.href = "./3.3Hermes_final.html";
        break;
    } else {
        alert("Por favor, escolha uma opção. 01 ou 02.")
    }
}
}