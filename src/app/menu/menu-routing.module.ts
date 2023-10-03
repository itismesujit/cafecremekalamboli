import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';
import { MenuComponent } from './menu.component';

const routes: Routes = [

  {
    path: '',
    component: ShowcaseComponent,
    children: [
      { path: 'kuka', component: MenuComponent },
      { path: 'kukaExclusive', component: MenuComponent },
      { path: 'cremeShakesMastani', component: MenuComponent },
      { path: '', component: MenuComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }




