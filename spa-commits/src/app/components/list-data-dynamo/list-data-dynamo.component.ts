import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-list-data-dynamo',
  templateUrl: './list-data-dynamo.component.html',
  styleUrls: ['./list-data-dynamo.component.css']
})
export class ListDataDynamoComponent {

  responseRequest: any;
  photo: string = '';
  constructor(private appService: AppService,
    private router: Router) { }

  ngOnInit() {
    this.appService.getDataFromDynamo().subscribe((data) => {
      this.responseRequest = data.items;
    }
    );
  }

  openExternalPage(url: string): void {
    window.open(url, '_blank');
  }

  onButtonClick(): void {
    this.router.navigate(['/']);
  }
}
