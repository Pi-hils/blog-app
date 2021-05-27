import { Login } from './login.model';

describe('Login', () => {
  it('should create an instance', () => {
    expect(new Login("Hilda","pass")).toBeTruthy();
  });
});
