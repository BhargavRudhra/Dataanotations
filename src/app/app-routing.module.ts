import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ClientworkflowComponent } from './shared/clientworkflow/clientworkflow.component';
import { CustomLoginComponent } from './shared/custom-login/custom-login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPageComponent } from './shared/landing-page/landing-page.component';
import { LoginComponent } from './shared/login/login.component';
import { ManageclientComponent } from './shared/manageclient/manageclient.component';
import { topNavComponent } from "./shared/top-nav/top-nav.component";
import { UserComponent } from './shared/user/user.component';
import { UserspageComponent } from './shared/userspage/userspage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'userspage',
    pathMatch: 'full',

  },
  {
    path: 'login',
    component: LoginComponent ,
  },
  {
    path:'landing-page',component:LandingPageComponent
  },

  {
    path:'dashboard',component:DashboardComponent
  },

  {
    path:'footer',component:FooterComponent
  },

  {
    path:'custom-login', component:CustomLoginComponent
  },
  {
    path:'top-nav', component: topNavComponent
  },
  {
    path:'user', component: UserComponent
  },
  {
    path:'clientworkflow', component: ClientworkflowComponent
  },
  {
    path:'manageclient', component: ManageclientComponent
  },
  {
    path:'userspage', component: UserspageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
