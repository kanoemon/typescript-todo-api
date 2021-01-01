import Datetime from "./datetime";
import TodoId from "./todoId";

class Todo {
  private _todoId: TodoId;
  private _name: string;
  private _createdDatetime: Datetime;

  constructor(todoId: TodoId, name: string, createdDatetime: Datetime) {
    this._todoId = todoId;
    this._name = name;
    this._createdDatetime = createdDatetime;
  }

  get todoId(): TodoId {
    return this._todoId;
  }

  get name(): string {
    return this._name;
  }

  get createdDatetime(): Datetime {
    return this._createdDatetime;
  }
}

export default Todo;
