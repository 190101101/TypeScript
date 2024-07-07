type UserType = {
  username: string;
  email: string;
  age: number;
};

interface IUser {
  username: string;
  email: string;
  age: number;
}

const log = (user: IUser): string => {
  const { username, email, age } = user;
  return `username: ${username}, email:${email}, age:${age}`;
};

const user: IUser = {
  username: 'apsi',
  email: 'apsi@example.com',
  age: 15,
};

const createUser = (user: UserType): UserType => {
  return {
    username: user.username,
    email: user.email,
    age: user.age,
  };
};

const newUser = createUser(user);
console.log(log(newUser));
