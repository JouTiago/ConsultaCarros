const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 3000;

const carrosData = JSON.parse(fs.readFileSync('carrosbrasil.json', 'utf-8'));

app.get('/consultarCarro', (req, res) => {
    const input = req.query.input.toLowerCase().replace(/[^a-zA-Z0-9\s]/gi, ''); 
    const palavras = input.split(/\s+/); 

    let marcaEncontrada = false;
    let modeloEncontrado = false;

    
    for (let palavra of palavras) {
        const carro = carrosData.find(carro => carro.marca.toLowerCase() === palavra);
        if (carro) {
            marcaEncontrada = true;
            break;
        }
    }

    
    if (marcaEncontrada) {
        for (let palavra of palavras) {
            const carro = carrosData.find(carro => carro.modelo.toLowerCase() === palavra);
            if (carro) {
                modeloEncontrado = true;
                break;
            }
        }
    }

    
    if (marcaEncontrada && modeloEncontrado) {
        res.json({ mensagem: 'Marca e modelo do carro validados.' });
    } else {
        res.status(404).json({ error: 'Marca ou modelo do carro não encontrados.' });
    }
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
