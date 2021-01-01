class Datetime {
  private _datetime: Date;

  constructor(datetime: Date) {
    this._datetime = datetime;;
  }

  getText(): string {
    return this._datetime.toLocaleString();
  }
}

export default Datetime;
