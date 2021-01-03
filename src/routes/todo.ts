import * as express from "express";
const router = express.Router();

import TodoApplicationService from '../application/todo/todoApplicationService';
import TodoRepository from '../infrastructure/todo/todoRepository';
import Todo from '../domain/models/todo/todo';

router.get('/:todoId', function(req, res, next) {
  let todoApplicationService: TodoApplicationService = new TodoApplicationService(
    new TodoRepository()
  );
  let todo: Todo = todoApplicationService.get(Number(req.params.todoId));
  res.json({
    id: todo.todoId.id,
    name: todo.name,
    created_at: todo.createdDatetime.toString()
  });
});

router.get('/', function(req, res, next) {
  let todoApplicationService: TodoApplicationService = new TodoApplicationService(
    new TodoRepository()
  );
  let todoList: Todo[] = todoApplicationService.getList();
  
  let data: {id: number, name: string, created_at: string}[] = todoList.map((todo) => {
    return {
      id: todo.todoId.id,
      name: todo.name,
      created_at: todo.createdDatetime.toString()
    };
  });
  res.json(data);
});

router.post('/', function(req, res, next) {
  let todoApplicationService: TodoApplicationService = new TodoApplicationService(
    new TodoRepository()
  );
  todoApplicationService.create(req.body.name);
  res.json({});
});

router.put('/:todoId', (req, res, next) => {
  let todoApplicationService: TodoApplicationService = new TodoApplicationService(
    new TodoRepository()
  );
  todoApplicationService.updateName(Number(req.params.todoId), req.body.name);
  res.json({});
});

router.delete('/:todoId', (req, res, next) => {
  let todoApplicationService: TodoApplicationService = new TodoApplicationService(
    new TodoRepository()
  );
  todoApplicationService.delete(Number(req.params.todoId));
  res.json({});
});

export default router;