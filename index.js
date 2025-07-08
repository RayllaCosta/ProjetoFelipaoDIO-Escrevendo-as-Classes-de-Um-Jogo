class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;           
    this.idade = idade;         
    this.tipo = tipo.toLowerCase(); 
  }

  atacar() {
    let ataque;


    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'um ataque indefinido';
        break;
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

function main() {
  console.log("Bem-vindo ao Jogo dos Heróis!\n");

  const herois = [
    new Heroi("Merlin", 150, "Mago"),
    new Heroi("Arthas", 30, "Guerreiro"),
    new Heroi("Liu Kang", 40, "Monge"),
    new Heroi("Hanzo", 25, "Ninja"),
    new Heroi("Bob", 20, "Camponês")
  ];

  for (let heroi of herois) {
    heroi.atacar();
  }
}

main();
