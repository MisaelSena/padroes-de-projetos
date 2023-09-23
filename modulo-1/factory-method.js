// Interface comum para produtos (Computadores)
class Computer {
  constructor(ram, hdd, cpu, type) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.type = type;
  }

  toString() {
    return `Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
  }
}

// Fábrica abstrata para criar computadores
class ComputerFactory {
  createComputer() {
    throw new Error("O método createComputer deve ser implementado pelas subclasses.");
  }
}

// Subclasse da fábrica para criar PCs
class PCFactory extends ComputerFactory {
  createComputer() {
    return new Computer(8, 256, 3.0, "PC");
  }
}

// Subclasse da fábrica para criar Servidores
class ServerFactory extends ComputerFactory {
  createComputer() {
    return new Computer(32, 1000, 4.0, "Server");
  }
}

// Cliente
function main() {
  const pcFactory = new PCFactory();
  const serverFactory = new ServerFactory();

  const myPC = pcFactory.createComputer();
  const myServer = serverFactory.createComputer();

  console.log(myPC.toString());
  console.log(myServer.toString());
}

main();
