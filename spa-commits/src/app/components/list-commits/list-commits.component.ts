import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { AppService } from 'src/app/app.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-commits',
  templateUrl: './list-commits.component.html',
  styleUrls: ['./list-commits.component.css'],
  standalone: true,
  imports: [MatListModule, NgFor],

})
export class ListCommitsComponent implements OnInit {
  @Input() repo: string = 'commitsApp';
  @Input() owner: string = 'franorther';
  responseRequest: any;
  photo: string = '';
  constructor(private appService: AppService,
    private router: Router) { }

  ngOnInit() {
    this.appService.getDataByRepoAndOWner(this.owner, this.repo).subscribe((data) => {
      this.responseRequest = data;
    }
    );
  }

  openExternalPage(url: string): void {
    window.open(url, '_blank');
  }

  onButtonClick(): void {
    this.router.navigate(['/list-data-dynamo']);
  }
}

