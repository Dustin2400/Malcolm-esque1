import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { StoryComponent } from './story/story.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { CancelationComponent } from './cancelation/cancelation.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"register", component: RegisterComponent},
  {path:"login", component: LoginComponent},
  {path:"addStory", component: AddStoryComponent},
  {path:"story/:storyName", component: StoryComponent},
  {path:"dashboard/:userId", component: DashboardComponent},
  {path:"editStory/:storyName", component: EditStoryComponent},
  {path:"cancelation", component: CancelationComponent},
  {path:"changePassword", component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
