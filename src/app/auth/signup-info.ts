export class SignupInfo {
  name: string;
  username: string;
  email: string;
  role: string[];
  password: string;
  constructor(name: string, username: string, email: string, pasword: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = pasword;
    this.role = ['user'];
  }
}
