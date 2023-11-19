import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCommitsComponent } from './list-commits.component';
import { NgFor } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListCommitsComponent,
    NgFor,
    MatDialogModule
  ]
})
export class ListCommitsModule { }
