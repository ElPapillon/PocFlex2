import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { RecordListComponent } from './record-list/record-list.component';

const routes: Routes = [
  { path: '', component: UserPageComponent},
  { path: 'record', component: RecordListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
