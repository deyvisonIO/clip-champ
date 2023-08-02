Storage.prototype.setObj = function (key: string, item: any) {
  return this.localStorage.setItem(key, JSON.stringify(item));
}

Storage.prototype.getObj = function (key: string) {
  return JSON.parse(this.localStorage.getItem(key));
}
