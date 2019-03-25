import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoichiometryFormComponent } from './stoichiometry-form/stoichiometry-form.component';
import { AnswerKeyComponent } from './answer-key/answer-key.component';
import { ElementsService } from './services/elements.service';
import { MolarityComponent } from './molarity/molarity.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    // this will direct the website's generic URL to our home page, the main app component.
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    // this will redirect to the stoichiometry form.
    path: 'stoichiometry',
    component: StoichiometryFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StoichiometryFormComponent,
    AnswerKeyComponent,
    MolarityComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [ElementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
