import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();
stage.add(layer);

// create group
const group = new Konva.Group({
  x: stage.width() / 2,
  y: stage.height() / 2,
  draggable: true,
  });

// create circle
const circle = new Konva.Ellipse({
  radiusX: 90,
  radiusY: 70,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 0
});

// TESTING 
const edge1 = new Konva.Circle({
  x: 80,
  radius: 30,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 0
});

const edge2 = new Konva.Circle({
  x: -80,
  radius: 30,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 0
});

const anim1 = new Konva.Animation(function(frame) {
  group.scale({x: 5, y: 5});
}, layer);

const anim2 = new Konva.Animation(function(frame) {
  group.scale({x: 1, y: 1});
}, layer);

group.on('mouseover', function (e) {
  e.target.getStage().container().style.cursor = 'pointer';
});
group.on('mouseout', function (e) {
  e.target.getStage().container().style.cursor = 'default';
});

group.on('mousedown', function(e){
  anim1.start();
  anim2.stop();
})

group.on('mouseup', function(e){
  anim2.start();
  anim1.stop();
})

// add shapes to group
group.add(circle);
group.add(edge1);
group.add(edge2);

// add the shape to the layer
layer.add(group);

// add the layer to the stagec
stage.add(layer);