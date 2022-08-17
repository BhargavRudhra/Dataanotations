import { CustomLoginComponent } from './shared/custom-login/custom-login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './shared/landing-page/landing-page.component'
import { LoginComponent } from './shared/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { topNavComponent } from "./shared/top-nav/top-nav.component";
import { DemoMaterialModule } from './shared/material/material.module';
import { ClientCardComponent } from './shared/cards/client-card/client-card.component';
import { OnboardedCardComponent } from './shared/cards/onboarded-card/onboarded-card.component';
import { ProfileCardComponent } from './shared/cards/profile-card/profile-card.component';
import { UserCardComponent } from './shared/cards/user-card/user-card.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { CreateClientComponent } from './shared/cards/create-client/create-client.component';
import { UserComponent } from './shared/user/user.component';
import { ClientworkflowComponent } from './shared/clientworkflow/clientworkflow.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ManageclientComponent } from './shared/manageclient/manageclient.component';
import { UserspageComponent } from './shared/userspage/userspage.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    DashboardComponent,
    UserCardComponent,
    ProfileCardComponent,
    OnboardedCardComponent,
    CustomLoginComponent,
    topNavComponent,
    ClientCardComponent,
    CreateClientComponent,
    UserComponent,
    ClientworkflowComponent,
    FooterComponent,
    ManageclientComponent,
    UserspageComponent


 ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
    DemoMaterialModule,
    OverlayModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
