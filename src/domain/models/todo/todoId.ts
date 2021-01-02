class TodoId {
  private _id: number;

  constructor(id: number) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  equals(other: TodoId): boolean {
    return this._id === other.id;
  }
}

export default TodoId;
