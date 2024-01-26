function mostrarMensagem() {
    document.title = "Mensagem para Amanda";
    
    // Oculta a tela inicial e exibe a mensagem principal
    setTimeout(() => {
        document.getElementById('tela-inicial').style.display = 'none';
        document.getElementById('mensagem-container').style.display = 'block';    
    }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
    // Mensagem carinhosa para Amanda
    var mensagemParaAmanda = "Amanda, meu amor, você é a luz da minha vida. Sua presença torna cada dia mais especial. Te amo muito! 💖";

    // Exibir a mensagem no parágrafo
    document.getElementById("mensagem").innerHTML = mensagemParaAmanda;
});
