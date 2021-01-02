class Datetime {
  private _datetime: Date;

  constructor(datetime: string) {
    if (datetime === '') {
      throw new TypeError('invalid datetime');
    }
    this._datetime = new Date(datetime);
  }

  toString(): string {
    return this._datetime.toLocaleString();
  }
}

export default Datetime;
