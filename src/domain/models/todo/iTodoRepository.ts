import Todo from "./todo";
import TodoId from "./todoId";

interface iTodoRepository {
  find(todoId: TodoId): Todo;
  save(todo:Todo): void;
}

export default iTodoRepository;
