let map = null;


let marker = new google.maps.marker({
    position: {lat: lat, lng: lon},

    map: map
});



function initMap() {
    const siran = {'lat':45.02168727644554,'lng':-0.6342781737820036};
    const pape = {'lat':44.05849314876676,'lng':4.829433418589122};
    const malbec = {'lat':44.91955617145476, 'lng':-0.4707862877901195};
    const laffit = {'lat':45.25223156196399, 'lng':-0.7808811896732198}
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 44.837789, lng: -0.57918 },
      zoom: 8,
    });
    new google.maps.Marker({
        position: siran,
        map,
        title: 'chateau-siran',
    });
    new google.maps.Marker({
        position: pape,
        map,
        title: 'chateau-neuf-du-pape',
    });
    new google.maps.Marker({
        position: malbec,
        map,
        title: 'chateau-malbec',
    });
    new google.maps.Marker({
        position: laffit,
        map,
        title: 'chateau-laffit',
    });
  }
