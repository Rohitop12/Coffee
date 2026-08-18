import express from 'express';
import { getAllCoffees, getCoffeeById, createCoffee } from '../controllers/coffeeController.js';

const router = express.Router();

router.route('/')
  .get(getAllCoffees)
  .post(createCoffee);

router.route('/:id')
  .get(getCoffeeById);

export default router;
