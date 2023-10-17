// Interface Strategy
interface Strategy {
    execute(a: number, b: number): number;
  }
  
  // Classes concretas que implementam a Strategy
  class Soma implements Strategy {
    execute(a: number, b: number): number {
      return a + b;
    }
  }
  
  class Subtracao implements Strategy {
    execute(a: number, b: number): number {
      return a - b;
    }
  }
  
  class Multiplicacao implements Strategy {
    execute(a: number, b: number): number {
      return a * b;
    }
  }
  
  // Função para realizar a operação com base na estratégia selecionada
  function calcular(strategy: Strategy, a: number, b: number): number {
    return strategy.execute(a, b);
  }
  
  // Função para receber input do usuário e executar a operação correspondente
  function calcularOperacao() {
    const a = parseInt(prompt("Digite o primeiro número:"));
    const b = parseInt(prompt("Digite o segundo número:"));
    const operacao = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação):");
  
    let strategy: Strategy;
  
    switch (operacao) {
      case '+':
        strategy = new Soma();
        break;
      case '-':
        strategy = new Subtracao();
        break;
      case '*':
        strategy = new Multiplicacao();
        break;
      default:
        console.error("Operação inválida");
        return;
    }
  
    const resultado = calcular(strategy, a, b);
    console.log(`Resultado da operação: ${resultado}`);
  }
  
  // Executar a função para receber input do usuário e realizar a operação
  calcularOperacao();
  