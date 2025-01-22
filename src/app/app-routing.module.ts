import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { MaterialUiDemoComponent } from './material-ui-demo/material-ui-demo.component';

const routes: Routes = [
  { path: 'animations', component: AnimationsComponent },
  { path: 'material-ui-demo', component: MaterialUiDemoComponent },
  { path: '', redirectTo: '/animations', pathMatch: 'full' }  // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
