// // We can import from angular because angular is modular - each component in angular is a module; @angular/core, @angular/http, etc.
//
// // import { memberName } from <angular library module name>
//
// import { Component } from "@angular/core";
//
// // We define metadata using the @Component decorator
// // A decorator is a FUNCTION THAT ADDS METADATA TO A CLASS, ITS MEMBERS OR METHOD ARGUMENTS
// // Scope of DECORATOR is limited to the feature that it decorates
// // Always prefixed with @
// // A Java language feature adapted into TypeScript
//
// // The selector defines the directive name for our component, which is a simple html tag embedded into our html page
//
// @Component({
//   selector: "app-root",
//   templateUrl: "./app.component.html",
//   styleUrls: ["./app.component.css"]
// })
// export class AppComponent {
//   title = "Hello world!";
// }

// We can import from angular because angular is modular - each component in angular is a module; @angular/core, @angular/http, etc.

// import { memberName } from <angular library module name>
import { Component } from "@angular/core";

// We define metadata using the @Component decorator
// A decorator is a FUNCTION THAT ADDS METADATA TO A CLASS, ITS MEMBERS OR METHOD ARGUMENTS
// Scope of DECORATOR is limited to the feature that it decorates
// Always prefixed with @
// A Java language feature adapted into TypeScript
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

// The selector defines the directive name for our component, which is a simple html tag embedded into our html page
export class AppComponent {
  title: string = "Acme Product Management";
}
