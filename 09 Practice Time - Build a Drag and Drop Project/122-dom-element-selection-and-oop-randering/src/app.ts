// Sample 1 (using class):
class ProjectInput {
  templateElement: HTMLTemplateElement; // HTMLTemplateElement etc = type. This type is globally available because in the tsconfig js file, we added the DOM as a lib
  hostElement: HTMLDivElement; // We could also be a bit less specific to use HTMLElement, but we are using HTMLDivElement because we know it with certainty, this is using div element
  element: HTMLFormElement;

  constructor() {
    /* --- (start) get the element by id --- */
    // this.templateElement = document.getElementById(
    //   'project-input'
    // )! as HTMLTemplateElement; // casting using as
    // or
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById('project-input')!
    ); // casting before the document command
    this.hostElement = document.getElementById('app')! as HTMLDivElement;
    /* --- (end) get the element by id --- */

    /* --- (start) render the element into dom --- */
    // console.log(this.templateElement);
    // console.log(this.templateElement.content);

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    ); // source: https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode

    // console.log(importedNode);
    // console.log(importedNode.firstElementChild);

    this.element = importedNode.firstElementChild as HTMLFormElement;
    // console.log(this.element);

    this.attach(); // call attach() method
    // this.hostElement.insertAdjacentElement('afterbegin', this.element); // moved to attach() inside

    /* --- (end) render the element into dom --- */
  }

  // creating attach() method, just to split the randering logic in constructor()
  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element); // this.element = importedNode.firstElementChild --> we wanna insert importedNode however, but a constant (const importedNode) only available in the constructor and second, that's a document fragment. We couldn't insert it to this.hostElement.insertAdjacentElement(). Instead we need to get access to the concrete HTML element in there, which we can store in another property element (this.element).
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
    - HTMLTemplateElement, HTMLDivElement, HTMLFormElement web API interface source: https://developer.mozilla.org/en-US/docs/Web/API#interfaces
*/
