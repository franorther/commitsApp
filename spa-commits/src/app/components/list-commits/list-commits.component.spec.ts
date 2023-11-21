import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListCommitsComponent } from './list-commits.component';
import { of } from 'rxjs';
import { AppService } from 'src/app/app.service';

describe('ListCommitsComponent', () => {
  let component: ListCommitsComponent;
  let fixture: ComponentFixture<ListCommitsComponent>;
  let appService: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: [AppService]
    });
    fixture = TestBed.createComponent(ListCommitsComponent);
    component = fixture.componentInstance;
    appService = TestBed.inject(AppService);
    fixture.detectChanges();

  });

  it('should create', fakeAsync(() => {
    spyOn(appService, 'getDataByRepoAndOWner').and.returnValue(of([]));
    fixture.detectChanges();
    tick();
    expect(component).toBeTruthy();
  }));
});
