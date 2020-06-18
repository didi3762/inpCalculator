import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalDetailsComponent } from './comps/Administration/cal-details/cal-details.component';
import { CalItemComponent } from './comps/Administration/cal-item/cal-item.component';
import { CalPageComponent } from './comps/Administration/cal-page/cal-page.component';
import { LabelSpanComponent } from './comps/Administration/label-span/label-span.component';

@NgModule({
  declarations: [
    AppComponent,
    CalDetailsComponent,
    CalItemComponent,
    CalPageComponent,
    LabelSpanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
