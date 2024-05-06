const express = require('express');
const app = express();
const fs = require('fs');

// Define a porta para o servidor ou usa a porta fornecida pelo Glitch
const port = process.env.PORT || 3000;

// Carrega os dados do arquivo JSON
const carrosData = JSON.parse(fs.readFileSync('carrosbrasil.json', 'utf-8'));

// Endpoint para consultar carros
app.get('/consultarCarro', (req, res) => {
    const input = req.query.input.toLowerCase().replace(/[^a-zA-Z0-9\s]/gi, ''); // Normaliza o input removendo caracteres especiais
    const palavras = input.split(/\s+/); // Divide o input em palavras separadas

    let marcaEncontrada = false;
    let modeloEncontrado = false;

    // Verifica se alguma palavra corresponde a uma marca válida
    for (let palavra of palavras) {
        const carro = carrosData.find(carro => carro.marca.toLowerCase() === palavra);
        if (carro) {
            marcaEncontrada = true;
            break;
        }
    }

    // Se uma marca válida foi encontrada, verifica se alguma palavra corresponde a um modelo válido
    if (marcaEncontrada) {
        for (let palavra of palavras) {
            const carro = carrosData.find(carro => carro.modelo.toLowerCase() === palavra);
            if (carro) {
                modeloEncontrado = true;
                break;
            }
        }
    }

    // Retorna a resposta adequada
    if (marcaEncontrada && modeloEncontrado) {
        res.json({ mensagem: 'Marca e modelo do carro validados.' });
    } else {
        res.status(404).json({ error: 'Marca ou modelo do carro não encontrados.' });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
