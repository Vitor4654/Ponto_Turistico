// Função para aumentar a fonte dos elementos com a classe "texto"
function aumentarFonte() {
    var elementosTexto = document.getElementsByClassName("geral");
    for (var i = 0; i < elementosTexto.length; i++) {
      var tamanhoFonteAtual = parseInt(window.getComputedStyle(elementosTexto[i]).fontSize);
      elementosTexto[i].style.fontSize = (tamanhoFonteAtual + 2) + "px";
    }
  }
  
  // Função para diminuir a fonte dos elementos com a classe "texto"
  function diminuirFonte() {
    var elementosTexto = document.getElementsByClassName("geral");
    for (var i = 0; i < elementosTexto.length; i++) {
      var tamanhoFonteAtual = parseInt(window.getComputedStyle(elementosTexto[i]).fontSize);
      elementosTexto[i].style.fontSize = (tamanhoFonteAtual - 2) + "px";
    }
  }
  