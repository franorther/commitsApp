import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListCommitsComponent } from './components/list-commits/list-commits.component';
import { ListDataDynamoComponent } from './components/list-data-dynamo/list-data-dynamo.component';

const routes: Routes = [
  { path: '', component: ListCommitsComponent, },
  { path: 'list-data-dynamo', component: ListDataDynamoComponent, },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
