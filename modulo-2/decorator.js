// Classe base para o sanduíche
class Sanduiche {
    cost() {
      return 0; // Custo base do sanduíche
    }
  
    getDescription() {
      return "Sanduíche";
    }
  }
  
  // Classe concreta para o sanduíche de frango assado
  class FrangoAssado extends Sanduiche {
    cost() {
      return 4.5; // Custo do sanduíche de frango assado
    }
  
    getDescription() {
      return "Sanduíche de Frango Assado";
    }
  }
  
  // Decorador para adicionar pepperoni ao sanduíche
  class Pepperoni extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    cost() {
      return this.sanduiche.cost() + 0.99; // Custo do pepperoni
    }
  
    getDescription() {
      return this.sanduiche.getDescription() + ", Pepperoni";
    }
  }
  
  // Decorador para adicionar queijo mussarela ralado ao sanduíche
  class QueijoMussarelaRalado extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    cost() {
      return this.sanduiche.cost() + 2.0; // Custo do queijo mussarela ralado
    }
  
    getDescription() {
      return this.sanduiche.getDescription() + ", Queijo Mussarela Ralado";
    }
  }
  
  // Criando o sanduíche decorado
  const sanduiche = new FrangoAssado(); // Sanduíche de frango assado base
  const sanduicheDecorado = new QueijoMussarelaRalado(new Pepperoni(sanduiche));
  
  // Imprimindo a descrição e o custo do sanduíche decorado
  console.log(`${sanduicheDecorado.getDescription()} custa $${sanduicheDecorado.cost().toFixed(2)}`);
  