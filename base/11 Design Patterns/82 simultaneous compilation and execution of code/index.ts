interface IUser {
  getUserInfo(): string;
}

class User implements IUser {
  protected username: string;
  protected password: string;
  protected age: number;

  public constructor(username: string, password: string, age: number) {
    this.username = username;
    this.password = password;
    this.age = age;
  }

  public getUserInfo(): string {
    return `username: ${this.username} | password: ${this.password} | age: ${this.age}`;
  }
}

const user: User = new User('apsi', 'apsi2002', 15);
console.log(user.getUserInfo());
