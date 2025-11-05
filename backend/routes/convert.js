const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  '/convert', 
  
  upload.fields([{ name: 'image', maxCount: 1 }]), 
  
  (req, res) => {
        
    const imageFile = req.files.image ? req.files.image[0] : null;
    const targetFormat = req.body.targetFormat;

    if (!imageFile || !targetFormat) {
      return res.status(400).json({ error: "Faltando 'image' ou 'targetFormat'." });
    }

    res.status(200).json({
      message: "Upload recebido com sucesso.",
      originalFilename: imageFile.originalname,
      targetFormat: targetFormat
    });

  }
);

module.exports = router;