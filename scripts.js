
// Replace your Configuration here..
// var config = {
//     apiKey: "AIzaSyCKp-RwlkZhJBehZLOSLhn1E7WpoXn9xoI",
//     authDomain: "realtime-on-map-example.firebaseapp.com",
//     databaseURL: "https://realtime-on-map-example.firebaseio.com",
//     projectId: "realtime-on-map-example",
//     storageBucket: "",
//     messagingSenderId: "851837622908"
// };

const config = {
      apiKey: "AIzaSyCAnem1AQOz9iWy2f8t8XDBKztK6kvThGs",
  authDomain: "alumbradopte21.firebaseapp.com",
  databaseURL: "https://alumbradopte21-default-rtdb.firebaseio.com",
  projectId: "alumbradopte21",
  storageBucket: "alumbradopte21.appspot.com",
  messagingSenderId: "651178194520",
  appId: "1:651178194520:web:987e5d240f8ab838d3fc2d",
  measurementId: "G-VRH3BTZEQW"

  // apiKey: "AIzaSyBRVBJuvk-Mbxzv2DTx2a18jPaope7gBPY",
  // authDomain: "usrsmty.firebaseapp.com",
  // databaseURL: "https://usrsmty.firebaseio.com",
  // projectId: "usrsmty",
  // storageBucket: "usrsmty.appspot.com",
  // messagingSenderId: "840900135873",
  // appId: "1:840900135873:web:cbcc627858630c625ebd40",
  // measurementId: "G-47LEFJRJCX"


};

firebase.initializeApp(config);




// counter for online cars...
var cars_count = 0;
var pedidos_count = 0;
var colorConductor = "#00023";
// markers array to store all the markers, so that we could remove marker when any car goes offline and its data will be remove from realtime database...
var markers = [];
var conductoresArray = [];

var markersPedidos = [];
var map;

var numDeltas = 100;
var delay = 10; //milliseconds
var i = 0;
var deltaLat;
var deltaLng;
var position = [25.73697098, -100.36744400]; //lat lon CEID

var datos;

function initMap() { // Google Map Initialization... 
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: new google.maps.LatLng(25.73697098, -100.36744400),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
      var polygoneCoords = [
{lat:25.74239616,lng: -100.38486374},
{lat:25.74347979,lng: -100.38581383},
{lat:25.74352980,lng: -100.38589403},
{lat:25.74185156,lng: -100.38763997},
{lat:25.74096241, lng:-100.38681944},
{lat:25.74068455, lng:-100.38633206},
{lat:25.74097353, lng:-100.38684412}, 
{lat:25.74184044, lng:-100.38764614},
{lat:25.74033445, lng:-100.38905276},
{lat:25.73902294, lng:-100.38763380},
{lat:25.74061231, lng:-100.38635674},
{lat:25.74067900, lng:-100.38633823}


   ];

var myPolygon = new google.maps.Polygon({
     paths: polygoneCoords,
     strokeColor: '#FF0000',
     strokeOpacity: 0.8,
     strokeWeight: 2,
     fillColor: '#FF0000',
     fillOpacity: 0.35
   });
myPolygon.setMap(map);

var polygoneCoords2 = [
{lat:25.74346312, lng:-100.38942292}, //otromed
{lat:25.74445227, lng:-100.39039768},
{lat:25.74380210, lng:-100.39121204},
{lat:25.74354092, lng:-100.39168709},
{lat:25.74251841, lng:-100.39076168},
{lat:25.74248507, lng:-100.39039768},
{lat:25.74269068, lng:-100.39041002}

];

var myPolygon2 = new google.maps.Polygon({
     paths: polygoneCoords2,
     strokeColor: '#FF0000',
     strokeOpacity: 0.8,
     strokeWeight: 2,
     fillColor: '#FF0000',
     fillOpacity: 0.35
   });
myPolygon2.setMap(map);
      
var polygoneCoords3 = [
{lat:25.74495796, lng:-100.38725747},
{lat:25.74620272, lng:-100.38831860},
{lat:25.74446894, lng:-100.39036684},
{lat:25.74350202,lng: -100.38944143},
{lat:25.74351313, lng:-100.38862707},
{lat:25.74494684, lng:-100.38724513}


];

var myPolygon3 = new google.maps.Polygon({
     paths: polygoneCoords3,
     strokeColor: '#FF0000',
     strokeOpacity: 0.8,
     strokeWeight: 2,
     fillColor: '#FF0000',
     fillOpacity: 0.35
   });
myPolygon3.setMap(map);   

var polygoneCoords4 = [


{lat:25.74349090, lng:-100.38593722},
{lat:25.74494684, lng:-100.38724513},
{lat:25.74350202, lng:-100.38860239},
{lat:25.74349646, lng:-100.38944760},
{lat:25.74346867, lng:-100.38942292},
{lat:25.74268513, lng:-100.39041619},
{lat:25.74247951, lng:-100.39041002},
{lat:25.74247951, lng:-100.39037301},
{lat:25.74194047, lng:-100.38981159},
{lat:25.74217387, lng:-100.38954014},
{lat:25.74220166,lng: -100.38939207},
{lat:25.74124583, lng:-100.38815203},
{lat:25.74185156, lng:-100.38763997},
{lat:25.74349090, lng:-100.38593105}


];

var myPolygon4 = new google.maps.Polygon({
     paths: polygoneCoords4,
     strokeColor: '#FF0000',
     strokeOpacity: 0.8,
     strokeWeight: 2,
     fillColor: '#FF0000',
     fillOpacity: 0.35
   });
myPolygon4.setMap(map);
      
var polygoneCoords5 = [
{lat:25.73903406, lng:-100.38766465},
{lat:25.74032334, lng:-100.38906510},
{lat:25.73892847, lng:-100.39049639},
{lat:25.73820602, lng:-100.39106398},
{lat:25.73752803, lng:-100.39015091},
{lat:25.73664996, lng:-100.39197705},
{lat:25.73636098, lng:-100.39219915},
{lat:25.73583858, lng:-100.39155753},
{lat:25.73583858, lng:-100.39126140},
{lat:25.73657216, lng:-100.39161922},
{lat:25.73737242, lng:-100.39002752},
{lat:25.73727239, lng:-100.38997817},
{lat:25.73689449, lng:-100.38997817},
{lat:25.73608311, lng:-100.39038535},
{lat:25.73586081, lng:-100.39007688},
{lat:25.73789481, lng:-100.38857155},
{lat:25.73815045, lng:-100.38831243},
{lat:25.73901738, lng:-100.38768315}

];
var myPolygon5 = new google.maps.Polygon({
     paths: polygoneCoords5,
     strokeColor: '#FF0000',
     strokeOpacity: 0.8,
     strokeWeight: 2,
     fillColor: '#FF0000',
     fillOpacity: 0.35
   });
myPolygon5.setMap(map);

var polygoneCoords6 = [


{lat:25.74352980, lng:-100.39168092},
{lat:25.74350757, lng:-100.39177963},
{lat:25.74322972, lng:-100.39191535},
{lat:25.74217387, lng:-100.39298883},
{lat:25.74050672, lng:-100.39140946},
{lat:25.74191269, lng:-100.38980542},
{lat:25.74248507, lng:-100.39036684},
{lat:25.74251286, lng:-100.39076168},
{lat:25.74354092, lng:-100.39169326}


];
var myPolygon6 = new google.maps.Polygon({
     paths: polygoneCoords6,
     strokeColor: '#FF0000',
     strokeOpacity: 0.8,
     strokeWeight: 2,
     fillColor: '#FF0000',
     fillOpacity: 0.35
   });
myPolygon6.setMap(map);      
      
      
      
      
      
}

function transition(result, data) {
    datos = data.val();
    console.log("data Mombre: " + datos);
    i = 0;
    deltaLat = (result[0] - position[0]) / numDeltas;
    deltaLng = (result[1] - position[1]) / numDeltas;
    moveMarker();
}

function moveMarker() {
    console.log("Move Markerr Mombre: " + datos.nombre);
    position[0] += deltaLat;
    position[1] += deltaLng;


    //var latlng = new google.maps.LatLng(position[0], position[1]);

    var longlat = [position[1], position[0]];
    //marker.setTitle("Latitude:"+position[0]+" | Longitude:"+position[1]);
    //marker.setPosition(latlng);

    // marker.setLngLat(longlat)
    // marker.addTo(map);


    if (i != numDeltas) {
        i++;
        setTimeout(moveMarker, delay);
    }
}


// This Function will create a car icon with angle and add/display that marker on the map
function AddMarkerConductor(data) {
    let conductor = data;


    let urlIcon = (conductor.situacion == "Disponible") ? 'lampara.png' : 'lampara.png';
    var result = [parseFloat(conductor.latitud), parseFloat(conductor.longitud)];
    //transition(result,data)

    //#region marker e icono

    var icon = { // car icon

        url: urlIcon,
        //path: 'M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805',
        // scale: 0.6,
        scaledSize: new google.maps.Size(30, 30),
        fillColor: colorConductor, //<-- Car Color, you can change it 
        fillOpacity: 1,
        strokeWeight: 1,
        anchor: new google.maps.Point(0, 5),
        rotation: 44 //<-- Car angle
    };

    //path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',

    // Esta es la información del marker que se va a mostrar, el contenido acepta HTML
    var infowindow = new google.maps.InfoWindow({
        content: `<strong>Medidor: ${conductor.medidor}
                    <p>Lampara ${conductor.lampara}</p>
                    </strong>`
    });
    var uluru = { lat: parseFloat(conductor.latitud), lng: parseFloat(conductor.longitud) };

    var marker = new google.maps.Marker({
        position: uluru,
        icon: icon,
        map: map,
        title: conductor.medidor
    });

    // Al hacer click sobre el marker mostraremos su información en una ventana
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    markers[conductor.key] = marker; // add marker in the markers array...
    document.getElementById("cars").innerHTML = cars_count;
    //#endregion

}


function buildLococationConductoresList(data) {
    let array = data;
    let arraySize = array.length;
    let color;
    var listings = document.getElementById('poimapbox-listings');
    listings.innerHTML = "";
    for (let i = 0; i < arraySize; i++) {
        let element = array[i];
        let conductor = element;

        AddMarkerConductor(element);

        color = (conductor.situacion == "Disponible") ? '#8bc34ba3' : '#ff572287';


        var listing = listings.appendChild(document.createElement('div'));
        listing.innerHTML
        listing.className = 'amenity-poi';


        listing.style.backgroundColor = color;

        listing.id = "listing-" + i;

        var link = listing.appendChild(document.createElement('a'));
        link.innerHTML = "";
        link.href = '#';
        link.className = 'name';
        link.dataPosition = i;

        link.innerHTML =
            // '<img src=' + conductor.properties.imagetmb + '>' +
            '<img src="https://img.icons8.com/officexs/16/000000/lights.png"/>' +
            '<h3>' + conductor.medidor+ '</h3>' +
            '<p>' + conductor.lampara + '</p>' +
            '<p>' + conductor.capacidad + '</p>' +
            '<p>? ' + conductor.fecha_hora + '</p>'

        link.addEventListener('click', function (e) {
            // Update the conductor to the Park associated with the clicked link
            var clickedListing = data[this.dataPosition];
            console.log(clickedListing);
            // // 1. Fly to the point
            flyToStore(clickedListing);

            // // 2. Close all other popups and display popup for clicked Park
            // createPopUp(clickedListing);

            // 3. Highlight listing in sidebar (and remove highlight for all other listings)
            var activeItem = document.getElementsByClassName('amenity-poi active');

            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');

        });

    }
}

function flyToStore(currentFeature) {
    let latitud = parseFloat(currentFeature.latitud);
    let longitud = parseFloat(currentFeature.longitud);
    // map.flyTo({
    //     center: currentFeature,
    //     zoom: 15
    // });

    map.setZoom(17);
    map.panTo({ lat: latitud, lng: longitud });
}

// get firebase database reference...
var cars_Ref = firebase.database().ref('/LAMPARAS_E1');


var dataConductores = firebase.database().ref('/LAMPARAS_E1');
dataConductores.on('value', function (snapshot) {
    //updateStarCount(postElement, snapshot.val());

    let conductores = snapshot.val();
    conductoresArray = [];
    for (const key in conductores) {
        if (conductores.hasOwnProperty(key)) {
            const element = conductores[key];
            //console.log(element);
            conductoresArray.push(element);


        }
    }

    buildLococationConductoresList(conductoresArray);
});

// this event will be triggered when a new object will be added in the database...
cars_Ref.on('child_added', function (data) {
    //console.log(data.val());
    cars_count++;
    //AddMarkerConductor(data);
    let conductor = data.val();

});

// this event will be triggered on location change of any car...
cars_Ref.on('child_changed', function (data) {
    markers[data.key].setMap(null);
    //AddMarkerConductor(data);
    let conductor = data.val();

});

// If any car goes offline then this event will get triggered and we'll remove the marker of that car...  
cars_Ref.on('child_removed', function (data) {
    markers[data.key].setMap(null);
    cars_count--;
    document.getElementById("cars").innerHTML = cars_count;
});


function AddPedido(data) {
    var color = "";
 

    if (data.val().suministro != "BAJABAJA") {

        color = "#09ebcd";
        colorConductor = "#09ebcd";

    } else if (data.val().suministro != "ALTABAJA") {
        color = "#32a856";
        colorConductor = "#32a856";
    } else {
        color = "#151582";
    }

    var icon = { // car icon
      path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
         scale: 0.5,
       
        fillColor: color,
        // strokeWeight: 1,
        // anchor: new google.maps.Point(0, 5),
        // rotation: 44 //<-- Car angle
        fillOpacity: 1,
        strokeWeight: 2,
        anchor: new google.maps.Point(0, 5),
        rotation: data.val().angle //<-- Car angle
    };

    // Esta es la información del marker que se va a mostrar, el contenido acepta HTML
    var infowindow = new google.maps.InfoWindow({
        content: `<strong>Medidor: ${data.val().medidor}
                <p>Facturado: ${data.val().facturado}</p>
                <p>Suministro: ${data.val().suministro}</p>
                </strong>`
    });
    var uluru = { lat: parseFloat(data.val().latitud), lng: parseFloat(data.val().longitud) };

    var marker = new google.maps.Marker({
        position: uluru,
        icon: icon,
        map: map,
        title: data.val().nombre
    });

    // Al hacer click sobre el marker mostraremos su información en una ventana
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    markersPedidos[data.key] = marker; // add marker in the markers array...
    document.getElementById("pedidos").innerHTML = pedidos_count;
}




var pedidos_Ref = firebase.database().ref('/RPUMEDIDOR_E1');

// this event will be triggered when a new object will be added in the database...
pedidos_Ref.on('child_added', function (data) {
    pedidos_count++;
    AddPedido(data);
});

// this event will be triggered on location change of any car...
pedidos_Ref.on('child_changed', function (data) {
    markersPedidos[data.key].setMap(null);
    AddPedido(data);
});

// If any car goes offline then this event will get triggered and we'll remove the marker of that car...  
pedidos_Ref.on('child_removed', function (data) {
    markersPedidos[data.key].setMap(null);
    pedidos_count--;
    document.getElementById("pedidos").innerHTML = pedidos_count;
});



