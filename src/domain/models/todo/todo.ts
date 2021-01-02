import Datetime from "./datetime";
import TodoId from "./todoId";

class Todo {
  private _todoId: TodoId;
  private _name: string;
  private _createdDatetime: Datetime;

  constructor(todoId: TodoId, name: string, createdDatetime: Datetime) {
    if (name === '') {
      throw new TypeError('empty name');
    }
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

  equals(other: Todo): boolean {
    return this._todoId.equals(other.todoId);
  }

  changeName(name: string): void {
    if (name === '') {
      throw new TypeError('empty name');
    }
    this._name = name;
  }
}

export default Todo;
