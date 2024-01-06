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

  /* binding using decorator: */
  @AutoBind // note: when this AutoBind access error (Decorator function return type 'PropertyDescriptor' is not assignable to type 'void | ((event: Event) => void)'), just enable the "experimentalDecorators" in tsconfig.json to true
  submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
    console.log(this.descriptionTextareaElement.value);
    console.log(this.peopleInputElement.value);
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
