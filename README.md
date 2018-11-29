# Learning Angular 6

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Legends

*Italic*> I'm not sure about

 - [Knowledgment](#knowledgment)
    - [@Injectable](#injectable)
    - [@Component](#component)
 - [Best Practices](#best-practices)
 - [How to run?](#how-to-run)
    - [Development server](#development-server)
    - [Code scaffolding](#code-scaffolding)
    - [Build](#cuild)
    - [Running unit tests](#running-unit-tests)
    - [Running end-to-end tests](#running-end-to-end-tests)

## Knowledgment

### @Injectable
The **@Injectable** funcionality allow you *pass a reference of a component* to another component in the instantiation of this.

### @Component
With **@Component** funcionality, you define before the Class the target area in the HTML that you will work in the component.

## Best Practices

 - **$ signal (user$)**: Using the dollar sign in the name of a variable that is an observable, is considered best practice. This way it’s easy to identify if your variable is an observable or not.



## How to run?

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
