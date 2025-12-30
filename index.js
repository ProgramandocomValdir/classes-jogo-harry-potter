// Criei a classe Heroi
// Usei essa classe como um molde para representar heróis e vilões do jogo
class Heroi {

  // No construtor eu defino as propriedades básicas de cada personagem
  // O "this" faz referência ao personagem que está sendo criado
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Criei o método atacar para simular o ataque de cada personagem
  atacar() {
    let ataque;

    // Aqui eu defini o ataque de acordo com o nome do personagem
    // Usei uma estrutura de decisão para manter a lógica simples e clara
    if (this.nome === "Lord Voldemort") {
      ataque = "Avada Kedavra (maldição da morte)";
    } else if (this.nome === "Harry Potter") {
      ataque = "Expelliarmus";
    } else if (this.nome === "Hermione Granger") {
      ataque = "Feitiços de proteção";
    } else if (this.nome === "Ron Weasley") {
      ataque = "Feitiços de apoio";
    } else if (this.nome === "Bellatrix Lestrange") {
      ataque = "Crucio (maldição da tortura)";
    } else {
      ataque = "um ataque desconhecido";
    }

    // Aqui eu uso um operador ternário para definir o artigo correto (O ou A)
    // Se o tipo for "Bruxa", uso "A", senão uso "O"
    const artigo = this.tipo === "Bruxa" ? "A" : "O";

    // Por fim, exibo a mensagem final no console conforme a lógica do jogo
    console.log(`${artigo} ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// ===============================
// Aqui eu criei os heróis usando a classe Heroi
// ===============================
const harry = new Heroi("Harry Potter", 17, "Bruxo");
const hermione = new Heroi("Hermione Granger", 17, "Bruxa");
const ron = new Heroi("Ron Weasley", 17, "Bruxo");

// ===============================
// Aqui eu criei os vilões usando a mesma classe
// ===============================
const voldemort = new Heroi("Lord Voldemort", 71, "Bruxo");
const bellatrix = new Heroi("Bellatrix Lestrange", 47, "Bruxa");

// ===============================
// Nesta parte eu executo as ações para simular a batalha
// ===============================
voldemort.atacar();
harry.atacar();

bellatrix.atacar();
hermione.atacar();

ron.atacar();

// Essas mensagens finais representam o desfecho da batalha,
// inspiradas na luta final dos filmes
console.log("Harry Potter sobreviveu devido à proteção do sacrifício da sua mãe");
console.log("A Varinha das Varinhas rejeitou Voldemort");
console.log("O feitiço ricocheteou e Lord Voldemort foi derrotado");
