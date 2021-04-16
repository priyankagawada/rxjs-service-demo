import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';
import { ProjectDataComponent } from './project-data/project-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
