# BlogApp
DESCRIPTION

#### Project objective:

Build an Angular app where users can read and add blog posts.
<br>
<br>
Background of the problem statement:
<br><br>
You are a web developer at a company that provides web solutions. The company was approached by a client to build a food blog app where users can read, write, edit, or delete new and existing posts. During sprint planning, you agree to lead this project and develop the frontend using Angular. The backend developers have agreed to provide you with the required APIs to perform CRUD operations on the data. The tasks you are responsible for include:
<br>
1. Designing the app in Angular
2. Creating routes for navigation between Angular pages and components
3. Creating service for accessing REST API
4. Setting up a JSON server for testing until backend APIs are ready
5. Testing the application

You must use the following tools:

1. Angular: To build the application
2. NgModules: To configure the injector and the compiler and organize related components
3. JSON Server: To build a placeholder backend for app development and testing
4. Angular Router: To navigate within the app using URL links
5. Jasmine/Karma: To test the application

Following requirements should be met:

The app should be responsive.
The app should have functionalities for users to create, view, update, and delete posts.
The app should have a contact form, a header, and a nav component.
## To Run the Server
- Clone this repository
- cd into the folder - `cd blog-app`
- Run `ng serve` in terminal. Navigate to `http://localhost:4200/` on your browser. The app will automatically reload if you change any of the source files.
- Run `json-server login.json` in parallel to ng serve. Open `http://localhost:3000/blogs`
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Code scaffolding

Run `ng generate component component-name` to generate a new component.
<br>
ng g c login<br>
<!-- login leads to post page -->
ng g c post

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### How app looks
[![Image from Gyazo](https://i.gyazo.com/5e9f130835d86863d21e875a4575a027.jpg)](https://gyazo.com/5e9f130835d86863d21e875a4575a027)
<br>

[![Image from Gyazo](https://i.gyazo.com/e2ea36d5c350a0914a63b0adb7d55e4b.png)](https://gyazo.com/e2ea36d5c350a0914a63b0adb7d55e4b)