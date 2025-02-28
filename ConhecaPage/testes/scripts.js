document.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Definir os pontos de início e fim da animação como percentuais da altura total da página
    var startScroll = maxScroll * 0.50; // 20% do scroll total
    var endScroll = maxScroll * 0.60; // 30% do scroll total

    if (scrollPosition > startScroll && scrollPosition < endScroll) {
        // Calcula a posição do texto entre 0px e 100% da largura da janela (ou mais, se necessário)
        var textPosition = ((scrollPosition - startScroll) / (endScroll - startScroll)) * window.innerWidth;
        document.getElementById('animated-text').style.left = textPosition + 'px';
    } else if (scrollPosition <= startScroll) {
        // Mantém o texto à esquerda antes de 20% de rolagem
        document.getElementById('animated-text').style.left = '0px';
    } else {
        // Mantém o texto à direita depois de 30% de rolagem
        document.getElementById('animated-text').style.left = window.innerWidth + 'px';
    }
});


