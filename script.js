// Classe base Funcionario
class Funcionario {
  constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
  }

  seApresentar() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
  }

  trabalhar() {
      return `${this.nome} está trabalhando.`;
  }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
  constructor(nome, idade, departamento) {
      super(nome, idade, "Gerente");
      this.departamento = departamento;
  }

  gerenciar() {
      return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
  }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
  constructor(nome, idade, linguagem) {
      super(nome, idade, "Desenvolvedor");
      this.linguagem = linguagem;
  }

  programar() {
      return `${this.nome} está programando em ${this.linguagem}.`;
  }
}

// Função para exibir mensagens de erro
function exibirErro(mensagem) {
  const erroDiv = document.getElementById("erro");
  erroDiv.textContent = mensagem;
}

// Função principal para criar o funcionário com base nos dados do formulário
function criarFuncionario() {
  // Limpar mensagens de erro e resultado
  document.getElementById("resultado").innerHTML = '';
  document.getElementById("erro").textContent = '';

  try {
      // Obter valores do formulário
      const nome = document.getElementById("nome").value;
      const idade = document.getElementById("idade").value;
      const cargo = document.getElementById("cargo").value;
      const departamento = document.getElementById("departamento").value;
      const linguagem = document.getElementById("linguagem").value;

      // Verificar se todos os campos obrigatórios foram preenchidos
      if (!nome || !idade || !cargo) {
          throw new Error("Por favor, preencha todos os campos obrigatórios.");
      }

      let funcionario;

      // Criar instância do funcionário com base no cargo
      if (cargo === "Gerente") {
          if (!departamento) {
              throw new Error("Por favor, preencha o departamento para o Gerente.");
          }
          funcionario = new Gerente(nome, idade, departamento);
      } else if (cargo === "Desenvolvedor") {
          if (!linguagem) {
              throw new Error("Por favor, preencha a linguagem de programação para o Desenvolvedor.");
          }
          funcionario = new Desenvolvedor(nome, idade, linguagem);
      }

      // Exibir os resultados
      const resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML = `
          <p>${funcionario.seApresentar()}</p>
          <p>${funcionario.trabalhar()}</p>
          ${cargo === "Gerente" ? `<p>${funcionario.gerenciar()}</p>` : `<p>${funcionario.programar()}</p>`}
      `;

  } catch (error) {
      // Exibir mensagem de erro
      exibirErro(error.message);
  }
}
