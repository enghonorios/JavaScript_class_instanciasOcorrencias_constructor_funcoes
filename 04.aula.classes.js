Classes Instanciadas

1 - Classe é definição

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

2 - Instancia é ocorrencia

const debora = new Pessoa();
debora.nome = 'Debora E Teodoro';
debora.idade = 27;

const daniel = new Pessoa();
daniel.nome = 'Daniel H Júnior';
daniel.idade = 29;

debora.descrever();
daniel.descrever();

3 - Criando Instancia com constructor

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos, nascido no ano de ${this.anoDeNascimento}.`);
    }
}

const debora = new Pessoa('Debora', 28);
const daniel = new Pessoa('Daniel', 30);

debora.descrever();
daniel.descrever();

4 - Funções recebendo objetos

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos, nascido no ano de ${this.anoDeNascimento}.`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const debora = new Pessoa('Debora', 28);
const daniel = new Pessoa('Daniel', 30);

compararPessoas(debora, daniel);