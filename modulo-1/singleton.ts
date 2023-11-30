class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senhaSuperSecreta";

    private constructor() {
        // Construtor privado para impedir a criação direta de instâncias.
    }

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    public acessarBaseSecreta(senha: string): void {
        if (senha === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta. Bem-vindo, agente!");
        } else {
            console.log("Acesso negado! Cuidado, intruso!");
        }
    }
}

// Programa principal
const sistemaSeguranca = SistemaSeguranca.getInstance();

// Agente tentando acessar a Base Secreta
sistemaSeguranca.acessarBaseSecreta("senhaIncorreta"); // Acesso negado

// Agente tentando acessar a Base Secreta com a senha correta
sistemaSeguranca.acessarBaseSecreta("senhaSuperSecreta"); // Acesso concedido