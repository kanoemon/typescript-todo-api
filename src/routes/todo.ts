import * as express from "express";
const router = express.Router();

import TodoApplicationService from '../application/todo/todoApplicationService';
import TodoRepository from '../infrastructure/todo/todoRepository';

router.get('/:todoId', function(req, res, next) {
  let todoApplicationService = new TodoApplicationService(
    new TodoRepository()
  );
  let todo = todoApplicationService.get(req.params.todoId);
  res.json({
    id: todo.todoId.value
  });
  res.send('success');
});

router.get('/', function(req, res, next) {
  res.send('success');
});

export default router;