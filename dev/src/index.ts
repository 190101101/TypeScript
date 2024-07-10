import { getMap } from './code';
import { Company } from './Company';
import { User } from './User';

const user = new User();
const company = new Company();
console.log(company);
console.log(user.location);

getMap(company);
