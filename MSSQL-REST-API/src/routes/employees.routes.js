import { Router } from 'express';
import { createNewEmployee, getProducts } from '../controllers/employees.controller'
import {validateCreate} from '../validators/employeesValidator'

const router = Router();

router.get('/employees', getProducts);

//router.get("/employees/:id", getProducts);

router.post('/employees',validateCreate ,createNewEmployee);

//router.delete('/employees', getProducts);


export default router;