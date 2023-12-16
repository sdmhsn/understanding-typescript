"use strict";
/* Sample 1 (Union type): */
class DataStorage {
    constructor() {
        this.data = []; // This says, we have an array which can have strings, numbers and Booleans mixed.
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
const textStorage = new DataStorage();
textStorage.addItem('Satu');
textStorage.addItem(10); // no error. string, number, boolean types are accept
textStorage.addItem('Dua');
console.log(textStorage.getItems());
textStorage.removeItem('Dua');
console.log(textStorage.getItems());
/* Sample 2 (Generic type):
class DataStorage<T extends string | number | boolean> {
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

const textStorage = new DataStorage<string>(); // only able for string type
textStorage.addItem('Satu');
textStorage.addItem(10); // typescript error. 'number' is not assignable to parameter of type 'string (const textStorage = new DataStorage<string>();)
textStorage.addItem('Dua');
console.log(textStorage.getItems());
textStorage.removeItem('Dua');
console.log(textStorage.getItems());
*/
/*
  Notes:
  Union type
  - with Union types we accept any of these values every time this method gets called, or this method. we're saying,
    "whenever you're calling this method you're free to use any of these types"
  - Union types can be great if we want to have a function which we can call with one of these types (string | number | boolean) every time we call it.
  - Union types when you are flexible to have a different type with every method call, with every function call.

  Generic type
  - with Generic types we're saying, "whenever we're working with this class, you have to decide/choose for one type and stick to it"
  - Generic types are great if we want to lock in a certain type. Use the same type throughout the entire class instance we create.
  - Generic types lock in a type.
*/
