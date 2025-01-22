app.post('/webhook', async (req, res) => {
    console.log('Requisição recebida:', req.body);
    try {
      const response = await axios.post('https://n8n3.pagplay.org/webhook/assistant', {
        nome: req.body.nome,
        numero: req.body.numero
      });
      console.log('Resposta n8n:', response.data);
      res.json({success: true});
    } catch (error) {
      console.error('Erro:', error.message);
      res.status(500).json({error: error.message});
    }
  });