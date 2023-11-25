 class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null
    private senhaBaseSecreta: string = "senhaSecreta123"

    private constructor() {}

    public static obterInstancia(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca()
        }

        return SistemaSeguranca.instancia
    }

    public acessarBaseSecreta (senha: string): void {
        if ( senha === this.senhaBaseSecreta) {
            console.log(`Acesso concedido. Bem-vindo, agente!`)
        } else {
            console.log(`Acesso negado!`)
        }
    }

}

const sistemaSeguranca = SistemaSeguranca.obterInstancia()

sistemaSeguranca.acessarBaseSecreta("senhaIncorreta")

sistemaSeguranca.acessarBaseSecreta("senhaSecreta123")