'use strict';
class Question {
  constructor(content){
    this.content = content;
    this.save();

  }
  static All() {
    return this._All;
  }
  save() {
    this.constructor._All.push(this)
  }
  static Find(id) {
    return this.All()[id - 1]
}

  }
}
Question._All = []
