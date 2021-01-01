import TodoId from "./todoId";

class Todo {
  private _todoId: TodoId;

  constructor(todoId: TodoId) {
    this._todoId = todoId;
  }

  get todoId(): TodoId {
    return this._todoId;
  }
}

export default Todo;
