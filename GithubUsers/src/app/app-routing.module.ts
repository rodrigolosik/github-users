import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: ListUsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
