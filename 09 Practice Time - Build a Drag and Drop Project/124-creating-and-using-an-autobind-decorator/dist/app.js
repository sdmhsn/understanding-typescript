"use strict";
// Sample 1 (using class):
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
    // binding using this:
    submitHandler(event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
        console.log(this.descriptionTextareaElement.value);
        console.log(this.peopleInputElement.value);
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    /* binding using arrow function:
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
const prjInput = new ProjectInput(); // when we instantiate it, it should render the form.
/*  Notes:
    -
*/
