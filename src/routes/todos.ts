import { Router } from 'express';

// import { createTodo } from '../controllers/todosController';
import * as todosController from '../controllers/todosController';

const router = Router();

router.post('/', todosController.createTodo);
router.get('/', todosController.getTodo);
router.patch('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);

export default router;
