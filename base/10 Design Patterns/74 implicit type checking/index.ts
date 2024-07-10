import { Map } from './Map';
import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

document.addEventListener('DOMContentLoaded', function () {
  const map = new Map('map', [40.4672919, 49.8439513]);
  map.addMarker(user);
  map.addMarker(company);
});
