class valuationJokes {
  constructor(joke, score, date) {
    (this._joke = joke), (this._score = score), (this._date = date);
  }
  get joke() {
    return this._joke;
  }

  set joke(newJoke) {
    this._joke = newJoke;
  }
  get score() {
    return this._score;
  }

  set score(newScore) {
    this._score = newScore;
  }
  get date() {
    return this._date;
  }

  set date(newDate) {
    this._date = newDate;
  }
}
