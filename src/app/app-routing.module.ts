import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincomponentComponent } from "../app/components/logincomponent/logincomponent.component";
import { RegistercomponentComponent } from "../app/components/registercomponent/registercomponent.component";
const routes: Routes = [
{path:"login",component:LogincomponentComponent},
{path:"register",component:RegistercomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
