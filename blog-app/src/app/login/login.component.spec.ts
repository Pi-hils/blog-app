import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.loginheading').textContent).toContain('Please enter your login information');
  })

  it('should render login headings', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
   expect(compiled.querySelector('.loginheading').textContent).toContain('Password');
    expect(compiled.querySelector('.loginheading').textContent).toContain('User Name');
  })
});

// it('should give title', () => {
//   const fixture = TestBed.createComponent(AppComponent);
//   fixture.detectChanges();
//   const compiled = fixture.nativeElement;
//   expect(compiled.querySelector('.center').textContent).toContain('Welcome to Pen to Paper');
// })