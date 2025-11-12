const express = require('express');
const router = express.Router();
const multer = require('multer');

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp'
];

const fileFilter = (req, file, cb) => {
  if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    cb(null, true); 
  } else {
    cb(new Error('Formato de arquivo não suportado'), false);
  }
};

const storage = multer.memoryStorage();

const upload = multer({ 
  storage: storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: fileFilter
});

router.post(
  '/convert', 
  
  upload.fields([{ name: 'image', maxCount: 1 }]), 
  
  (req, res, next) => { 
    
    const imageFile = req.files.image ? req.files.image[0] : null;
    const targetFormat = req.body.targetFormat;

    if (!imageFile || !targetFormat) {
      return res.status(400).json({ error: "Faltando 'image' ou 'targetFormat'." });
    }

    res.status(200).json({
      message: "Upload (válido) recebido com sucesso.",
      originalFilename: imageFile.originalname,
      targetFormat: targetFormat,
      mimeType: imageFile.mimetype
    });
  }
);

module.exports = router;