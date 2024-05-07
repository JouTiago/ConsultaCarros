const express = require("express");
const app = express();
const fs = require("fs");

app.use((req, res, next) => {
  console.log(`Recebida solicitação: ${req.method} ${req.url}`);
  next();
});

const port = process.env.PORT || 3000;

let carrosData;
try {
  carrosData = JSON.parse(fs.readFileSync("carrosbrasil.json", "utf-8"));
} catch (error) {}


app.post("/consultarCarro", (req, res) => {
  console.log("Recebida solicitação para consultar carro.");

  console.log(req.query);
  console.log(req.body);

  const input = (req.query.input || "")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/gi, "");
  const palavras = input.split(/\s+/);
  console.log(req.body);
  console.log("Palavras a serem pesquisadas:", palavras);

  let marcaEncontrada = false;
  let modeloEncontrado = false;

  for (const item of carrosData) {
    for (const pal of palavras) {
      if (pal == item.marca) {
        marcaEncontrada = true;
      }
      if (pal == item.modelo) {
        modeloEncontrado = true;
      }
    }
  }

  console.log("Marca encontrada:", marcaEncontrada);
  console.log("Modelo encontrado:", modeloEncontrado);

  if (marcaEncontrada && modeloEncontrado) {
    const resposta = { mensagem: "Marca e modelo do carro validados." };
    console.log("Enviando resposta:", resposta);
    res.json(resposta);
  } else {
    const erro = { error: "Marca ou modelo do carro não encontrados." };
    console.log("Enviando resposta de erro:", erro);
    res.status(404).json(erro);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});
