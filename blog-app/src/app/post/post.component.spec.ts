import { ComponentFixture, TestBed, TestComponentRenderer } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { FormsModule } from '@angular/forms';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent, TestComponentRenderer ],
      imports: [FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PostComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.myClass').textContent).toContain("Title");
  });

  it('should render textbox', () => {
    const fixture = TestBed.createComponent(PostComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.myClass').textContent).toContain('Welcome');
  });

});
