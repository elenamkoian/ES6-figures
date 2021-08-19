class Point3d {
    constructor(x, y, z) {
      if (
        typeof x !== "number" ||
        typeof y !== "number" ||
        typeof z !== "number"
      ) {
        throw new Error("Point3d requires 3 number arguments");
      }
  
      this.x = x;
      this.y = y;
      this.z = z;
    }
  
    distanceFrom(point) {
      if (!(point instanceof Point3d)) {
        throw new Error("distanceFrom requires a Point3d argument");
      }
  
      return Math.sqrt(
        (this.x - point.x) ** 2 +
          (this.y - point.y) ** 2 +
          (this.z - point.z) ** 2
      );
    }
  
    distanceFromOrigin() {
      return this.distanceFrom(Point3d.origin);
    }
}
  
const points3d = [
    new Point3d(6, 8, 3),
    new Point3d(7, 2, 1),
    new Point3d(7, 4, 9)
];
  
const appPoint3d = document.getElementById("app-point3d");
  
appPoint3d.innerHTML = `
    <div class="container">
        <h2 class="name">3D Point</h2>
  
        <div class="point-list">
        ${points3d.map((point) => `
            <div class="point-card">
                <div class="point-info-container"> 
                    <div>
                        <b>x:</b>
                        <span>${point.x}</span>
                        <b>y:</b>
                        <span>${point.y}</span>
                        <b>z:</b>
                        <span>${point.z}</span>
                        </div>
                    </div>
                </div>`).join("")}
            </div>
    </div>
`;
  