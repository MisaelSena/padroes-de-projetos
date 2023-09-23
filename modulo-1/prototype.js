// Classe abstrata Veículo
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    // Método clone abstrato
    clone() {
      throw new Error("Método clone deve ser implementado pelas subclasses.");
    }
  
    // Método represent abstrato
    represent() {
      throw new Error("Método represent deve ser implementado pelas subclasses.");
    }
  }
  
  // Subclasse Carro que herda de Veiculo
  class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
    }
  
    // Implementação do método clone
    clone() {
      return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }
  
    // Implementação do método represent
    represent() {
      return `Carro - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}, Número de Portas: ${this.numeroPortas}`;
    }
  }
  
  // Subclasse Moto que herda de Veiculo
  class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, cilindradas) {
      super(modelo, marca, cor, numeroRodas);
      this.cilindradas = cilindradas;
    }
  
    // Implementação do método clone
    clone() {
      return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
    }
  
    // Implementação do método represent
    represent() {
      return `Moto - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}, Cilindradas: ${this.cilindradas}`;
    }
  }
  
  // Classe Aplicação
  class Aplicacao {
    criarVeiculos() {
      const veiculos = [];
  
      // Criando três carros e três motos usando o método clone
      const carro1 = new Carro("Sedan", "Toyota", "Azul", 4, 4);
      const carro2 = carro1.clone();
      const carro3 = carro1.clone();
  
      const moto1 = new Moto("Esportiva", "Honda", "Vermelha", 2, 1000);
      const moto2 = moto1.clone();
      const moto3 = moto1.clone();
  
      veiculos.push(carro1, carro2, carro3, moto1, moto2, moto3);
  
      return veiculos;
    }
  
    clonarVeiculos(veiculos) {
      // Clonando o array de veículos usando o método clone
      const clones = veiculos.map((veiculo) => veiculo.clone());
      return clones;
    }
  
    imprimirRepresentacao(veiculos) {
      // Imprimindo a representação de cada veículo clonado
      veiculos.forEach((veiculo) => {
        console.log(veiculo.represent());
      });
    }
  }
  
  // Executando a aplicação
  const app = new Aplicacao();
  const veiculos = app.criarVeiculos();
  const clones = app.clonarVeiculos(veiculos);
  app.imprimirRepresentacao(clones);