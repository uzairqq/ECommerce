import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './couses.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    BootstrapPanelComponent,
    InputFormatDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
