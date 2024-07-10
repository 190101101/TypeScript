export const getMap = (p1) => {
  document.addEventListener('DOMContentLoaded', function () {
    // const coords = [p1.location.lat, p1.location.lng];
    const coords1 = [40.4672919, 49.8439513]; // İlk koordinat seti
    const coords2 = [40.4672919, 49.8539513]; // İkinci koordinat seti

    const map = L.map('map').setView(coords1, 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // İlk marker
    const marker1 = L.marker(coords1).addTo(map);
    marker1.bindPopup('You are here').openPopup();

    // İkinci marker
    const marker2 = L.marker(coords2).addTo(map);
    marker2.bindPopup('Second location');
  });
};
