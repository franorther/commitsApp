import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list-commits',
  templateUrl: './list-commits.component.html',
  styleUrls: ['./list-commits.component.css'],
  standalone: true,
  imports: [CommonModule]

})
export class ListCommitsComponent implements OnInit {
  @Input() repo: string = 'commitsApp';
  @Input() owner: string = 'franorther';
  responseRequest: any[] = [];
  photo: string = '';
  constructor(private appService: AppService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.appService.getDataByRepoAndOWner(this.owner, this.repo).subscribe((data) => {
      console.log(data);
      this.responseRequest = data;
    }
    );
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
  openExternalPage(url: string): void {
    window.open(url, '_blank');
  }


}
