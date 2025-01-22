const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/webhook', async (req, res) => {
  try {
    await axios.post('https://n8n3.pagplay.org/webhook/assistant', {
      nome: req.body.nome,
      numero: req.body.numero
    });
    res.json({success: true});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.listen(3000);