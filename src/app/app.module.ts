import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdProgressBarModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdSnackBarModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PasswordComponent } from './components/dialog/password/password.component';
import { ErrorPageComponent } from './components/error.page/error.page.component';

import { DataService } from './services/data.service';
import { AuthService } from './services/auth/auth.service';
import { LocalstorageService } from './services/local.storage/localstorage.service';
import { CookieService } from 'ngx-cookie-service';

import { AuthorizeGuard } from './services/guards/authorize.guard';





// Routes for app
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthorizeGuard]},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorPageComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCardModule, 
    MdMenuModule, 
    MdToolbarModule, 
    MdIconModule,
    MdTabsModule,
    MdProgressBarModule,
    MdTooltipModule,
    MdInputModule,
    MdCheckboxModule,
    MdSnackBarModule,
    MdListModule,
    MdDialogModule,
    MdProgressSpinnerModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, AuthorizeGuard, AuthService, LocalstorageService, CookieService ],
  bootstrap: [AppComponent],
  entryComponents: [PasswordComponent]
})
export class AppModule { }
