class Datetime {
  private _datetime: Date;

  constructor(datetime: string) {
    this._datetime = new Date(datetime);
  }

  getText(): string {
    return this._datetime.toLocaleString();
  }
}

export default Datetime;
