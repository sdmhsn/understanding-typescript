// AutoBind decorator
function AutoBind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // console.log('Autobind decorator!');
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
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

  private gatherUserInput(): [string, string, number] | void {
    // [string, string, number] --> tuple type
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionTextareaElement.value;
    const enteredPeople = this.peopleInputElement.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredPeople.trim().length === 0
    ) {
      alert('Invalid input, please try again!');
      return; // we should add union void (| void) on the gatherUserInput() function, to avoid "Type 'undefined' is not assignable to type '[string, string, number]'" error
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople]; // +enteredPeople: will convert it into a number
    }
  }

  /* to clear all the inputs */
  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionTextareaElement.value = '';
    this.peopleInputElement.value = '';
  }

  /* binding using decorator: */
  @AutoBind // note: when this AutoBind access error (Decorator function return type 'PropertyDescriptor' is not assignable to type 'void | ((event: Event) => void)'), just enable the "experimentalDecorators" in tsconfig.json to true
  submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    // console.log(userInput); // e.g. ['Title', 'Sample Description', 3]

    if (Array.isArray(userInput)) {
      /*
        Note: 
        - tuple is not a JavaScript type, its only exists in TypeScript. We can't check the if (typeof userInput === 'tuple') like this.
        - there is also no if (userInput instanceof Tuple)
        -  tuples in the end are just arrays.
        - all we need to check here is whether it's an array, and for that, we can use the array object in JavaScript, and there the isArray method. (e.g. Array.isArray(userInput))
        - isArray() is a method built into Vanilla JavaScript which allows us to check whether this here is an array.
        */
      const [title, desc, people] = userInput;
      console.log(title, desc, people);

      this.clearInputs(); // to clear all inputs
    }
  }

  private configure() {
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

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput(); // when we instantiate it, it should render the form.

/*  Notes:
    - 
*/
