import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { DataComponent } from './data/data.component';
import { DirectiveComponent } from './directive/directive.component';


@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    DataComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
