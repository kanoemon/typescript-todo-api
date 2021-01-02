import Todo from "./todo";
import TodoId from "./todoId";

interface iTodoRepository {
  find(todoId: TodoId): Todo | null;
  findAll(): Todo[];
  save(todo:Todo): void;
  delete(todo:Todo): void;
  nextId(): TodoId;
}

export default iTodoRepository;
