document.addEventListener('scroll', function() {
    var posScroll = window.pageYOffset;
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // animated-text se move da esquerda para a direita
    var escalaVelocidade1 = 10; // Controla a velocidade do animated-text
    var posText1 = (posScroll / maxScroll) * (escalaVelocidade1 + window.innerWidth);
    // Garante que o texto não saia da tela à direita
    posText1 = Math.min(window.innerWidth - '20' - document.getElementById('animated-text').offsetWidth, posText1); 
    // Garante que o texto não saia da tela à esquerda
    posText1 = Math.max(0, posText1);
    document.getElementById('animated-text').style.left = posText1 + 'px';

    // animated-text2 se move da direita para a esquerda
    var escalaVelocidade2 = 10; // Controla a velocidade do animated-text2
    var posText2 = window.innerWidth - ((posScroll / maxScroll) * (escalaVelocidade2 + window.innerWidth));
    // Garante que o texto não saia da tela à esquerda
    posText2 = Math.max(0, posText2);
    // Garante que o texto não saia da tela à direita
    posText2 = Math.min(window.innerWidth - document.getElementById('animated-text2').offsetWidth, posText2);
    document.getElementById('animated-text2').style.left = posText2 + 'px';
});
