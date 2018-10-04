var Cirle = function (radius, color) {

  this.getRadius = function () {
    return radius;
  }

  this.getColor = function () {
    return color;
  }

  this.getArea = function () {
    return Math.PI*Math.pow(radius,2);
  }
}
var cirle =  new Cirle(2);
var radius = cirle.getRadius();
var area = cirle.getArea();
alert("radius: " + radius + "; area: " + area);
