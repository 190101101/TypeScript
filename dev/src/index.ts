import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

document.addEventListener('DOMContentLoaded', function () {
  const map = new CustomMap('map', [40.4672919, 49.8439513]);
  map.addMarker([user.location.lat, user.location.lng]);
  map.addMarker([company.location.lat, company.location.lng]);
});
