class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  containsPoint(point) {
    return this.center.distanceFrom(point) < this.radius;
  }

  containsCircle(circle) {
    const distance = this.center.distanceFrom(circle.center);
    return distance + circle.radius <= this.radius;
  }
}

const circles = [
  new Circle(new Point(4, 8, 'O'), 4),
  new Circle(new Point(5, 6, 'K'), 2),
];


const renderCircle = (circle) =>`
  <div class='el-card'>
    <h2 class='el-card-name'>${circle.center.name} center circle</h2>

    <div class='content-div'>Radius: ${circle.radius} </div>
    <div class='content-div'>Area: ${circle.area().toFixed(2)} </div>
      <div class='content-div-with-chip'>
        Center:
          ${renderPoint(circle.center)}
      </div>  
  </div>
`;

const renderCircleList = (circleList) => `
  <div class ='container'>
    <h2 class='container-name'>Circles</h2>
    ${circleList.map(renderCircle).join('')}
  </div>
`

const appCircle = document.getElementById("app-circle");
appCircle.innerHTML = renderCircleList(circles);

