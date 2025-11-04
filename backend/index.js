const express = require('express');
const cors = require('cors'); 

const convertRoutes = require('./routes/convert');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.VITE_FRONTEND_URL || '*' 
}));

app.use(express.json());

// --- Registro da Rota (T2.1 / Critério de Aceitação 2) ---'.
app.use('/api/v1', convertRoutes);

app.get('/', (req, res) => {
  res.send('API do Conversor de Imagens está no ar!');
});

app.listen(PORT, () => {
  console.log(`[servidor]: Servidor rodando na porta ${PORT}`);
});