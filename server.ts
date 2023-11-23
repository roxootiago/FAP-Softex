import express from "express";
import { json } from "body-parser";
import mysql from "mysql2";

const conexao = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "hotel",
});

const app = express();

app.use(json());

app.get("/funcionario", (req, res) => {
  const consulta =
    "SELECT func.nome as 'Nome', func.cargo as 'Cargo',func.senioridade as Senioridade, concat('R$',round(func.salario,2)) as 'Salario', date_format(func.dataNascimento, '%W %d/%m/%Y') as Aniversario FROM hotel.funcionario as func";
  conexao.query(consulta, (erro, resultados) => {
    if (erro) {
      res.status(500).json({ error: erro.message });
    } else {
      res.status(200).json(resultados);
    }
  });
});

app.post("/cadastrar", (req, res) => {
  const dados = req.body;
  const sql = "INSERT INTO funcionario SET ?";
  conexao.query(sql, dados, (erro, resultado) => {
    if (erro) {
      res.status(400).json({ error: erro });
    } else {
      res.status(201).json({ resultado });
    }
  });
});

app.put("/alterar/:nome", (req, res) => {
  const nomeAntigo = req.params.nome;
  const senioridade = req.body.senioridade;
  const sql = "UPDATE funcionario SET senioridade = ? WHERE nome  = ?";
  conexao.query(sql, [senioridade, nomeAntigo], (erro, resultado) => {
    if (erro) {
      res.status(404).json({ error: erro });
    } else {
      res.status(200).json({ resultado });
    }
  });
});

/* Select chamados */
app.get("/chamados", (req, res) => {
  const consulta = "SELECT * FROM hotel.chamado";

  conexao.query(consulta, (erro, resultado) => {
    if (erro) {
      console.error(erro);
      // Não localizado
      res.status(404).json({ Erro: erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});

/* Cadastrar chamados */
app.post("/cadastrarchamados", (req, res) => {
  const dados = req.body;
  const sql = "INSERT INTO hotel.chamado SET ?";
  conexao.query(sql, dados, (erro, resultado) => {
    if (erro) {
      console.log(erro);
      res.status(400).json({ 'Erro': erro });
    } else {
      res.status(201).json(resultado);
    }
  });
});

/* Chamado por id */
app.get("/chamado/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM hotel.chamado where idchamado = ?";
  conexao.query(sql, id, (erro, resultado) => {
    if (erro) {
      console.error(erro);
      // Não localizado
      res.status(404).json({ Erro: erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});

/* Implementando back end */
app.get("/funcionariochamado", (req, res) => {
  const consulta =
    "SELEC nome,descricao FROM hotel.funcionario INNER JOIN hotel.chamado ON hotel.funcionario.idfuncionario = hotel.chamado.idchamado";

  conexao.query(consulta, (erro, resultado) => {
    if (erro) {
      console.error(erro);
      // Não localizado
      res.status(404).json({ Erro: erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});
app.listen(3000, () => {
  console.log("Servidor Node.js iniciado na porta 3000");
});
