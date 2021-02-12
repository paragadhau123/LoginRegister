import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincomponentComponent } from "../app/components/logincomponent/logincomponent.component";
import { RegistercomponentComponent } from "../app/components/registercomponent/registercomponent.component";
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { GethotelsComponent } from './components/gethotels/gethotels.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
const routes: Routes = [
{path:"login",component:LogincomponentComponent},
{path:"register",component:RegistercomponentComponent},
{path:"details",component:EmployeedetailsComponent},
{path:"toolbar",component:ToolbarComponent},
{path:"hotels",component:GethotelsComponent},
{path:"userDashboard",component:UserdashboardComponent},
{path:"adminDashboard",component:AdmindashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
