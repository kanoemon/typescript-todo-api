import { threadId } from "worker_threads";

class TodoId {
  private _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  equals(other: TodoId): boolean {
    return this._value === other.value;
  }
}

export default TodoId;
