import express from 'express';
import { auth } from '../middleware/auth.js';
import Case from '../models/Case.js';
import { z } from 'zod';

const router = express.Router();

const caseSchema = z.object({
  title: z.string().min(1),
  caseNumber: z.string().min(1),
  client: z.string(),
  status: z.enum(['Active', 'Pending', 'Closed', 'Discovery']),
  type: z.string(),
  nextHearing: z.string().optional(),
  priority: z.enum(['Low', 'Medium', 'High']),
  description: z.string().optional(),
  judge: z.string().optional(),
  court: z.string().optional()
});

// Get all cases
router.get('/', auth, async (req, res) => {
  try {
    const cases = await Case.find()
      .populate('client', 'name email')
      .populate('assignedTo', 'name email')
      .sort({ createdAt: -1 });
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get case by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const case_ = await Case.findById(req.params.id)
      .populate('client', 'name email')
      .populate('assignedTo', 'name email')
      .populate('documents');
    
    if (!case_) {
      return res.status(404).json({ message: 'Case not found' });
    }
    
    res.json(case_);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new case
router.post('/', auth, async (req, res) => {
  try {
    const validatedData = caseSchema.parse(req.body);
    const newCase = new Case({
      ...validatedData,
      assignedTo: req.user.id
    });
    
    const savedCase = await newCase.save();
    res.status(201).json(savedCase);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors });
    }
    res.status(500).json({ message: error.message });
  }
});

// Update case
router.patch('/:id', auth, async (req, res) => {
  try {
    const validatedData = caseSchema.partial().parse(req.body);
    const updatedCase = await Case.findByIdAndUpdate(
      req.params.id,
      { ...validatedData, updatedAt: new Date() },
      { new: true }
    );
    
    if (!updatedCase) {
      return res.status(404).json({ message: 'Case not found' });
    }
    
    res.json(updatedCase);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors });
    }
    res.status(500).json({ message: error.message });
  }
});

// Delete case
router.delete('/:id', auth, async (req, res) => {
  try {
    const deletedCase = await Case.findByIdAndDelete(req.params.id);
    
    if (!deletedCase) {
      return res.status(404).json({ message: 'Case not found' });
    }
    
    res.json({ message: 'Case deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;