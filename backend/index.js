const express = require('express');
const cors = require('cors');
const { MulterError } = require('multer');

const convertRoutes = require('./routes/convert');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.VITE_FRONTEND_URL || '*' 
}));
app.use(express.json());

app.use('/api/v1', convertRoutes);

app.get('/', (req, res) => {
  res.send('API do Conversor de Imagens está no ar!');
});

app.use((err, req, res, next) => {
  
  if (err instanceof MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({ error: "Arquivo excede o limite de 10MB." });
    }
  }

  if (err.message === 'Formato de arquivo não suportado') {
    return res.status(400).json({ 
      error: "Formato de arquivo não suportado. Apenas imagens (JPG, PNG, WEBP) são permitidas." 
    });
  }

  console.error(err.stack);
  res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' });
});

app.listen(PORT, () => {
  console.log(`[servidor]: Servidor rodando na porta ${PORT}`);
});