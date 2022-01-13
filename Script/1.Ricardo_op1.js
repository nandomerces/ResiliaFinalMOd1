function levelUmRicardo(){
    while (pergunta != 1 || pergunta != 2) {
        var pergunta = prompt(
            `1. Liga para outro colega detetive, pois você precisa resolver o caso rápido e pegar a Sra. antes da polícia.\n\n 2.Não perde tempo e vai logo no local do roubo para buscar evidências do crime.\n`);

    if (pergunta == 1) {
        /*Resposta certa. encaminha para a próxima fase*/
        window.location.href ="./4.1Ricardo.html";
        break;
        /*Errou. Tela Gameover*/
    } else if (pergunta == 2) {
        window.location.href = "./4.1Ricardo_final.html"; 
        break;
        /*Caso não coloque nenhum dos número. Obrigo ele a preencher*/
    } else {
        alert("Por favor, escolha uma opção. 01 ou 02.")
    }
}
}

function levelDoisRicardo(){
    while (pergunta != 1 || pergunta != 2) {
        var pergunta = prompt(
            `1. "Vamos assistir as câmeras do sistema interno de segurança para tentar identificar a Sra."\n\n 2.Vamos analisar as plantas baixas da mansão para tentar identificar onde ela possa ter se escondido."\n`);

    if (pergunta == 1) {
         /*Errou. Tela Game Over*/
        window.location.href ="./4.2Ricardo_final.html";
        break;
         /*Se acertou, encaminha para a próxima fase*/
    } else if (pergunta == 2) {
        window.location.href = "./4.2Ricardo.Html";
        break;
    } else {
        alert("Por favor, escolha uma opção. 01 ou 02.")
    }
}
}

function levelTresRicardo(){
    while (pergunta != 1 || pergunta != 2) {
        var pergunta = prompt(
            `1. Pelo esgoto da mansão"\n\n 2.Pelo duto de ventilação da mansão.\n`);

    if (pergunta == 1) {
        /*Errou. Tela Game Over*/
        window.location.href ="./4.3Ricardo_final2.html";
        break;
    } else if (pergunta == 2) {
        /*Acertou. Tela Game Over Resolução do Caso*/
        window.location.href = "./4.3Ricardo_final.html";
        break;
    } else {
        alert("Por favor, escolha uma opção. 01 ou 02.")
    }
}
}