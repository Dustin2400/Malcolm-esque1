import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { EmailDirective } from './email.directive';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PasswordDirective } from './password.directive';
import { AddStoryComponent } from './add-story/add-story.component';
import { StoryComponent } from './story/story.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { CancelationComponent } from './cancelation/cancelation.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    EmailDirective,
    PasswordDirective,
    AddStoryComponent,
    StoryComponent,
    DashboardComponent,
    EditStoryComponent,
    CancelationComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
