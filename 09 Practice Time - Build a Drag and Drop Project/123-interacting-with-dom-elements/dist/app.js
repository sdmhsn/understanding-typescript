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
        this.attach();
        /* --- (end) render the element into dom --- */
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput(); // when we instantiate it, it should render the form.
/*  Sample 2 (using function):
function projectInput() {
  const templateElement = document.getElementById(
    'project-input'
  )! as HTMLTemplateElement;
  const hostElement = document.getElementById('app')! as HTMLDivElement;
  const importedNode = document.importNode(templateElement.content, true);
  const element = importedNode.firstElementChild as HTMLFormElement;

  hostElement.insertAdjacentElement('afterbegin', element);
}

projectInput();
*/
/*  Notes:
    -
*/
