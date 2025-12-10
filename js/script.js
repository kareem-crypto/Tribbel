
// Navbar hide/show on scroll
let lastScrollTop = 0;
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  navbar.style.top = (st > lastScrollTop) ? "-5rem" : "0";
  lastScrollTop = st <= 0 ? 0 : st;
});

// Menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.innerHTML = navLinks.classList.contains("active") ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Hero & Card Animations
window.addEventListener("load", () => {
  document.querySelectorAll(".card").forEach(card => card.classList.add("show"));
});

// ===== Location & Map =====
const getLocationBtn = document.getElementById("getLocationBtn");
const locationStatus = document.getElementById("locationStatus");
const mapContainer = document.getElementById("map");
let map;

getLocationBtn.addEventListener("click", () => {
  if (!navigator.geolocation) { locationStatus.textContent = "Browser does not support geolocation."; return; }
  locationStatus.textContent = "Detecting your location...";
  navigator.geolocation.getCurrentPosition(success, error);
});

function success(pos){
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  locationStatus.innerHTML = `Your location detected ✅<br>Lat: ${lat.toFixed(4)}, Lon: ${lon.toFixed(4)}`;
  mapContainer.style.display = "block";

  if(!map){
    map = L.map('map').setView([lat, lon], 14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  } else { map.setView([lat, lon], 14); }

  // User marker
  L.circleMarker([lat, lon], {radius:10,color:"#2196f3",fillColor:"#2196f3",fillOpacity:0.8}).addTo(map).bindPopup("You are here").openPopup();

  // Nearby simulated users
  const nearby = [
    {name:"Ahmed", lat:lat+0.005, lon:lon+0.004},
    {name:"Laila", lat:lat+0.02, lon:lon+0.015}
  ];
  nearby.forEach(u => {
    const dist = getDistance(lat, lon, u.lat, u.lon);
    if(dist<=2000){
      L.circleMarker([u.lat, u.lon], {radius:8,color:"#2ecc71",fillColor:"#2ecc71",fillOpacity:0.9})
        .addTo(map).bindPopup(`${u.name} is nearby (${(dist/1000).toFixed(2)} km)`);
    }
  });
}

function error(err){
  locationStatus.textContent = "Error detecting location.";
  console.error(err);
}

// Distance calculation in meters
function getDistance(lat1, lon1, lat2, lon2){
  const R=6371e3, φ1=lat1*Math.PI/180, φ2=lat2*Math.PI/180, Δφ=(lat2-lat1)*Math.PI/180, Δλ=(lon2-lon1)*Math.PI/180;
  const a = Math.sin(Δφ/2)**2 + Math.cos(φ1)*Math.cos(φ2)*Math.sin(Δλ/2)**2;
  const c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R*c;
}
