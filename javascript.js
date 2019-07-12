

var colors = ["white","pink","violet","aqua","lavender","plum"]
math.random() = colors
function backgroundChange() {
  var index = Math.floor(Math.random() * 4);
  document.body.style.backgroundColor = colors[index];
}

var view;
var map;
var intialLocation;

function init()  {
    intialLocation = ol.proj.fromLonLat([41.043316, 28.862457])
    london = ol.proj.fromLonLat([-0.12755, 51.507222]);

    view = new.ol.View({
      center: intialLocation,
      zoom: 6
    });

    map = new.ol.Map({
      target: 'map',
      layers: [
        new.ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      loadTilesWhileAnimating: true,
      view: view
    });

}

function panHome() {
  view.animate({
    center: london,
    duration: 2000
  });
}

window.onload = init;
