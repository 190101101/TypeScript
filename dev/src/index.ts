// import { getMap } from './code';
import { CustomMap } from './CustomMap';

// const user = new User();
// const company = new Company();
// console.log(company);
// console.log(user.location);

document.addEventListener('DOMContentLoaded', function () {
  const map1 = new CustomMap('map', [40.4672919, 49.8439513]);
  map1.addMarker([40.4672919, 49.8439513]);
  map1.addMarker([40.4672919, 49.8539513]);
});
