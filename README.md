# Angula18

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Especificações utilizada no projeto

<ul>
  <li>Angular: 18.2.5</li>
  <li>Angular CLI: 18.2.5</li>
  <li>Angular devKit/core: 18.2.5</li>
  <li>Material: </li>
  <li>Node: 20.16.0</li>
</ul>

Caso deseje verificar a sua, utilize o comando `ng version` em seu terminal do projeto.

### Problema em adiciona um Json
Caso esteja tentando importar um arquivo Json para seu projeto, verifique novamente se as declarações feitas no código como também as importações estão mandando para o local exato. Após isso entre no arquivo chama `tsconfig.json` e nele haverá uma sessão denominada de `compilerOptions`, averigue se nela tem alguma importação com o nome `resolveJsonModule` e `esModuleInterop`, se houver apenas modifique seu valor para `true`. Se não houver, adicione eles na sessão:
  `"resolveJsonModule": true,`
  `"esModuleInterop": true,`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
