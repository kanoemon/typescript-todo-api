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
    return `${this._datetime.getFullYear()}-${this._datetime.getMonth()+1}-${this._datetime.getDate()} ${this._datetime.getHours()}:${this._datetime.getMinutes().toString().padStart(2, '0')}:${this._datetime.getSeconds().toString().padStart(2, '0')}`;
  }
}

export default Datetime;
