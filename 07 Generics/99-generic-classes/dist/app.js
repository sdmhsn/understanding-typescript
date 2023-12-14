"use strict";
/* Sample 1 (without generic type):
class DataStorage {
  private data: string[] = [];

  addItem(item: string) {
    this.data.push(item);
  }

  removeItem(item: string) {
    console.log(this.data.indexOf(item));
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const data = new DataStorage();
data.addItem('Satu');
data.addItem('Dua');
console.log(data.getItems());
data.removeItem('Dua');
console.log(data.getItems());
*/
/* Sample 2 (using generic type to class):
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    console.log(this.data.indexOf(item));

    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

string:
const textStorage = new DataStorage<string>();
textStorage.addItem('Satu');
textStorage.addItem('Dua');
console.log(textStorage.getItems());
textStorage.removeItem('Dua');
console.log(textStorage.getItems());

number:
const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(3);
console.log(numberStorage.getItems());
numberStorage.removeItem(3);
console.log(numberStorage.getItems());

object:
const objStorage = new DataStorage<object>();
const nameObj = { name: 'Saddam' };
objStorage.addItem(nameObj);
objStorage.addItem({ name: 'Rahmat' });
objStorage.removeItem(nameObj);
console.log(objStorage.getItems());
*/
// Sample 3 (other way to use generic type to class: generic constraints):
// e.g. class DataStorage<T extends string | number | object> {
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        console.log(this.data.indexOf(item));
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
// string:
const textStorage = new DataStorage();
textStorage.addItem('Satu');
textStorage.addItem('Dua');
console.log(textStorage.getItems());
textStorage.removeItem('Dua');
console.log(textStorage.getItems());
// number:
// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(10);
// numberStorage.addItem(3);
// console.log(numberStorage.getItems());
// numberStorage.removeItem(3);
// console.log(numberStorage.getItems());
// object:
// const objStorage = new DataStorage<object>();
// const nameObj = { name: 'Saddam' };
// objStorage.addItem(nameObj); // typescript error. there is no object type in generic constraint. object not allowed anymore
// objStorage.addItem({ name: 'Rahmat' });
// objStorage.removeItem(nameObj);
// console.log(objStorage.getItems());
/*
  Notes:
  - creating a generic class
*/
