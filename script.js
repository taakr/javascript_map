// JavaScript
import {LeafletMap, TileLayer, Marker, Icon, Circle, Polygon, Popup} from 'leaflet';
const map = new LeafletMap('map').setView([33.58551863080784, 130.37921345481874], 15);

// タイルレイヤーを作成し、地図にセットする
// Open Street Map
// new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 	maxZoom: 19,
// 	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// 国土地理院
// new TileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);

// Open Street Map hot
new TileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);

//アイコン
// const whiteIcon = new Icon({
//   iconUrl: 'images/ico.png',
//   shadowUrl: 'images/ico_shadow.png',

// iconSize:     [40, 40], // size of the icon
// shadowSize:   [40, 40], // size of the shadow
// iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
// shadowAnchor: [20, 40],  // the same for the shadow
// popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
// });

// new Marker([33.67345752177457, 130.44140661378802], {icon: whiteIcon}).addTo(map).bindPopup('こんにちは！');

//複数アイコンをまとめて定義
class circleIcon extends Icon{
  static defaultOptions = {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 60],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  };
}

const 
	pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
	

new Marker([33.58551863080784, 130.37921345481874], { icon: pinkIcon }).addTo(map).bindPopup('大濠公園');
new Marker([33.57547153529967, 130.3877405779742], { icon: pinkIcon }).addTo(map).bindPopup('福岡市動物園');
new Marker([33.56416782328135, 130.37664078097615], { icon: pinkIcon }).addTo(map).bindPopup('友泉亭公園');

const circle = new Circle([33.58551863080784, 130.37921345481874], {
  color: 'pink', //円の輪郭線の色
  fillColor: 'rgba(255, 186, 218, 1)', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 1000 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("半径1kmの範囲");

// 多角形の表示
const polygon = new Polygon([
  [33.58551863080784, 130.37921345481874],
  [33.57547153529967, 130.3877405779742],
  [33.56416782328135, 130.37664078097615]
], {
  color: 'yellow',
  fillColor: 'yellow',
  fillOpacity: 0.2
}).addTo(map);


// クリック位置の緯度経度表示
const popup = new Popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

