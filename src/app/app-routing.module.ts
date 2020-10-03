import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {path: '', component: InputComponent },
  {path: "sobre", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
