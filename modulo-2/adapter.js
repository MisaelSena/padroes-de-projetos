// Classe Pato
class Pato {
    quack() {
      console.log("Pato faz quack!");
    }
    voa() {
      console.log("Pato voa!");
    }
  }
  
  // Classe Galinha
  class Galinha {
    cacareja() {
      console.log("Galinha faz cacarejo!");
    }
    voa() {
      console.log("Galinha não voa.");
    }
  }
  
  // Adaptador para transformar Pato em Galinha
  class AdaptadorPato {
    constructor(pato) {
      this.pato = pato;
    }
  
    cacareja() {
      this.pato.quack();
    }
    voa() {
      this.pato.voa();
    }
  }
  
  // Demonstração do uso do AdaptadorPato
  function AdaptadorPatoDemo() {
    const pato = new Pato();
    const adaptadorPato = new AdaptadorPato(pato);
  
    console.log("Pato adaptado como Galinha:");
    adaptadorPato.cacareja(); // Usando o método quack do pato
    adaptadorPato.voa(); // Usando o método voa do pato
  
    const galinha = new Galinha();
    console.log("\nGalinha normal:");
    galinha.cacareja();
    galinha.voa();
  }
  
  // Executa a demonstração
  AdaptadorPatoDemo();
  