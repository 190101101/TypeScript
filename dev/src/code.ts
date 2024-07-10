// [40.4672919, 49.8439513];
export const getMap = (p1) => {
  document.addEventListener('DOMContentLoaded', function () {
    // const coords = [p1.location.lat, p1.location.lng];
    const coords = [40.4672919, 49.8439513];

    const map = L.map('map').setView(coords, 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker = L.marker(coords).addTo(map);

    marker.bindPopup('You are here').openPopup();
  });
};
