// Sample 1 (using class):
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionTextareaElement: HTMLTextAreaElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    /* --- (start) get the element by id --- */
    this.templateElement = document.getElementById(
      'project-input'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;
    /* --- (end) get the element by id --- */

    /* --- (start) render the element into dom --- */
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    this.titleInputElement = this.element.querySelector(
      '#title'
    )! as HTMLInputElement;
    this.descriptionTextareaElement = this.element.querySelector(
      '#description'
    )! as HTMLTextAreaElement;
    this.peopleInputElement = this.element.querySelector(
      '#people'
    )! as HTMLInputElement;

    // console.log(this.titleInputElement);

    this.configure();
    this.attach();
    /* --- (end) render the element into dom --- */
  }

  // binding using this:
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
    console.log(this.descriptionTextareaElement.value);
    console.log(this.peopleInputElement.value);
  }

  private configure() {
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

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput(); // when we instantiate it, it should render the form.

/*  Notes:
    - 
*/
