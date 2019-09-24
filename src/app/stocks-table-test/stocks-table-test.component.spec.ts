import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StocksTableTestComponent } from './stocks-table-test.component';

describe('StocksTableTestComponent', () => {
  let component: StocksTableTestComponent;
  let fixture: ComponentFixture<StocksTableTestComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StocksTableTestComponent]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(StocksTableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});