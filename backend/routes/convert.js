const express = require('express');
const router = express.Router();

/**
 * Task T2.1: Estrutura da rota POST /api/v1/convert
 *
 * Esta rota (ainda) não processa arquivos, apenas confirma
 * que foi alcançada corretamente (placeholder).
 */
router.post('/convert', (req, res) => {
  
  // Retorna HTTP 200 OK com o JSON de placeholder.
  res.status(200).json({
    message: "Endpoint /api/v1/convert alcançado com sucesso."
  });

});

module.exports = router;