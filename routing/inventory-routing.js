import { Router } from 'express';
import { getInventory } from '../response/inventory-response';
export const inventoryRouter = Router();

inventoryRouter.get('/test', (req, res) => {
  console.log('Inventory /test WORK!!!');
});

inventoryRouter.get('/method', (req, res) => {
  console.log('=== getInventory Request ===' + JSON.stringify(req.query));

  res.status(getInventory.httpStatus).json(getInventory.body);
});
