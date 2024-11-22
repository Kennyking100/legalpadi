import express from 'express';
import { auth } from '../middleware/auth.js';
import Client from '../models/Client.js';
import { z } from 'zod';

const router = express.Router();

const clientSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().optional(),
  address: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zipCode: z.string().optional(),
    country: z.string().optional()
  }).optional()
});

// Get all clients
router.get('/', auth, async (req, res) => {
  try {
    const clients = await Client.find()
      .populate('cases', 'title caseNumber status')
      .sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get client by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const client = await Client.findById(req.params.id)
      .populate('cases', 'title caseNumber status');
    
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new client
router.post('/', auth, async (req, res) => {
  try {
    const validatedData = clientSchema.parse(req.body);
    const newClient = new Client(validatedData);
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors });
    }
    res.status(500).json({ message: error.message });
  }
});

// Update client
router.patch('/:id', auth, async (req, res) => {
  try {
    const validatedData = clientSchema.partial().parse(req.body);
    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      { ...validatedData, updatedAt: new Date() },
      { new: true }
    );
    
    if (!updatedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }
    
    res.json(updatedClient);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors });
    }
    res.status(500).json({ message: error.message });
  }
});

// Delete client
router.delete('/:id', auth, async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    
    if (!deletedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }
    
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;