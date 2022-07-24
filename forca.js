class Forca {
  letrasChutadas = new Array(); 
  vidas = 6; 
  palavraSecreta = ("abacaxi");   
  estado = "aguardando chute";
  ganhou = false;

  guess(letra) {
    if(letra.length > 1 || this.letrasChutadas.includes(letra)){
      return '';
    }

    this.letrasChutadas.push(letra);
    while (this.palavraControle.includes(letra)) {
      this.palavraSecreta.splice(this.palavraControle.indexOf(letra), 1, letra);
    }

    this.alteraEstado();
  }

  alteraEstado() {
    if (this.vidas <= 0) {
      this.estado = "perdeu";
    }
    if ( this.palavraSecreta.toString()) {
      this.estado = "ganhou";
    }
  }

  buscarEstado() {
    return this.estado;
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, 
      vidas: this.vidas, 
      palavra: this.palavra, 
    };
  }
}

module.exports = Forca;
