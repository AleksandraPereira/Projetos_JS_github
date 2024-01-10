const express = require('express');

const app = express();

const jogadores = ["José", "Marian", "João", "Marine", "Fernandez"];
let jogadorDaVez = 0;

app.get('/', (req, res) => {
    const nomeJogador = jogadores[jogadorDaVez];

    jogadorDaVez++

    if (jogadorDaVez >= jogadores.length) {
        jogadorDaVez = 0;
    }

    return res.send(`É a vez de ${nomeJogador} jogar.`);
});

app.listen(3000);