import { threadId } from "worker_threads";

class TodoId {
  private _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }
}

export default TodoId;
