import express from 'express';
import multer from 'multer';
import path from 'path';
import { auth } from '../middleware/auth.js';
import Document from '../models/Document.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx', '.txt', '.jpg', '.png'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

// Get all documents
router.get('/', auth, async (req, res) => {
  try {
    const { caseId } = req.query;
    const query = caseId ? { case: caseId } : {};
    
    const documents = await Document.find(query)
      .populate('case', 'title caseNumber')
      .populate('uploadedBy', 'name')
      .sort({ uploadedAt: -1 });
    
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get document by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const document = await Document.findById(req.params.id)
      .populate('case', 'title caseNumber')
      .populate('uploadedBy', 'name');
    
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    
    res.json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Upload new document
router.post('/', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const newDocument = new Document({
      name: req.file.originalname,
      type: path.extname(req.file.originalname).substring(1),
      size: req.file.size,
      path: req.file.path,
      case: req.body.caseId,
      uploadedBy: req.user.id,
      metadata: {
        contentType: req.file.mimetype,
        lastModified: new Date()
      }
    });

    const savedDocument = await newDocument.save();
    res.status(201).json(savedDocument);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete document
router.delete('/:id', auth, async (req, res) => {
  try {
    const deletedDocument = await Document.findByIdAndDelete(req.params.id);
    
    if (!deletedDocument) {
      return res.status(404).json({ message: 'Document not found' });
    }
    
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;