import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoichiometryFormComponent } from './stoichiometry-form/stoichiometry-form.component';
import { AppModule } from './app.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: AppModule
    },
    {
        path: 'stoichiometry',
        component: StoichiometryFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
