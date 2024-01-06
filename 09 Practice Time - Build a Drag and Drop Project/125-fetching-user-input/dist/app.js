"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// AutoBind decorator
function AutoBind(target, methodName, descriptor) {
    // console.log('Autobind decorator!');
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
// ProjectInput class
class ProjectInput {
    constructor() {
        /* --- (start) get the element by id --- */
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        /* --- (end) get the element by id --- */
        /* --- (start) render the element into dom --- */
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionTextareaElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        // console.log(this.titleInputElement);
        this.configure();
        this.attach();
        /* --- (end) render the element into dom --- */
    }
    /* binding using decorator: */
    submitHandler(event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
        console.log(this.descriptionTextareaElement.value);
        console.log(this.peopleInputElement.value);
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
    /* binding using this:
    private submitHandler(event: Event) {
      event.preventDefault();
      console.log(this.titleInputElement.value);
      console.log(this.descriptionTextareaElement.value);
      console.log(this.peopleInputElement.value);
    }
  
    private configure() {
      this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    */
    /* binding using arrow function (my experiment):
    private submitHandler = (event: Event) => {
      event.preventDefault();
      console.log(this.titleInputElement.value);
    };
  
    private configure() {
      this.element.addEventListener('submit', this.submitHandler);
    }
    */
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
__decorate([
    AutoBind // note: when this AutoBind access error (Decorator function return type 'PropertyDescriptor' is not assignable to type 'void | ((event: Event) => void)'), just enable the "experimentalDecorators" in tsconfig.json to true
], ProjectInput.prototype, "submitHandler", null);
const prjInput = new ProjectInput(); // when we instantiate it, it should render the form.
/*  Notes:
    -
*/
