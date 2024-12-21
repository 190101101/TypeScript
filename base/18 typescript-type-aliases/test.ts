type Personal = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

type Candidate = Personal & Contact;

let candidate: Candidate = {
  name: 'pepi',
  age: 25,
  email: 'pepi@gmail.com',
  phone: '999-555',
};

console.log(candidate);
