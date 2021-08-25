class Point {
    constructor(x, y, name) {
      this.x = x;
      this.y = y;
      this.name = name;
    }
  
    distanceFrom(point) {
      return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2);
    }
  
    distanceFromOrigin() {
      return this.distanceFrom(Point.origin);
    }
}
  
const points = [new Point(5, 6, 'A'), new Point(6, 3, 'B'), new Point(4, 8, 'C')];
const appPoint = document.getElementById('app-point');

const renderPoint = (point) => `
    <div class='point-chip'>
            <b>${point.name}</b>
            <b>(</b>
            <span>${point.x}</span>
            <b>,</b>
            <span>${point.y}</span>
            <b>)</b>
    </div>
`;

const renderPointList = (pointList) => `
    <div class='point-list'>
    ${points.map(renderPoint).join('')}
    </div>
`;

appPoint.innerHTML = `
    <div class='container'>
        <h2 class='container-name'>Points</h2>
        ${renderPointList(points)}
    </div>
`;
