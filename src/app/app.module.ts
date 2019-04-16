import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";

// declarations is where our html looks to determine how to draw our component(s)
// imports sets the modules we want to be available for use by our project's components
// bootstrap is the start-up component used when beginning our app
@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
