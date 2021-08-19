class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    distanceFrom(point) {
      return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2);
    }
  
    distanceFromOrigin() {
      return this.distanceFrom(Point.origin);
    }
}
  
const points = [new Point(5, 6), new Point(6, 3), new Point(4, 8)];
const appPoint = document.getElementById("app-point");
  
appPoint.innerHTML = `
    <div class="container">
        <h2 class="name">Point</h2>
  
            <div class="point-list">
                ${points.map((point) => `
                    <div class="point-card">
                        <div class="point-info-container">
                            <div>
                                <b>x:</b>
                                <span>${point.x}</span>
                                <b>y:</b>
                                <span>${point.y}</span>
                            </div>
                        </div>
                    </div>`).join("")}
            </div>
    </div>
`;
  