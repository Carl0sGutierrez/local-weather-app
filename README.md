# LocalWeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Architecture
The following high-level architecture shows that this Angular web application is completely decoupled from any backend. It is hosted on its web server, can comunicate with 
a web API such as `OpendWeatherMap`, or optionally be paired with a backend infrastructure to unlock rich and custumized features that a web API alone can not provide,
such as storing per-user preferences or complementing the OpenWeatherMap API's dataset with our own.

![Untitled Workspace](https://user-images.githubusercontent.com/16527110/139997312-f0d54831-680e-485b-928a-ad243e050739.png)
