class Datetime {
  private _datetime: Date;

  constructor(datetime: string) {
    if (datetime === '') {
      throw new TypeError('invalid datetime');
    }
    this._datetime = new Date(datetime);
  }

  get datetime(): Date {
    return this._datetime;
  }

  equals(other: Datetime): boolean {
    return other.datetime.getTime() == this._datetime.getTime();
  }

  toString(): string {
    return this._datetime.toLocaleString();
  }
}

export default Datetime;
