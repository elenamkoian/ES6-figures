class Triangle {
  constructor(vertex1, vertex2, vertex3) {
    this.vertex1 = vertex1;
    this.vertex2 = vertex2;
    this.vertex3 = vertex3;
  }

  get firstSide() {
    return this.vertex1.distanceFrom(this.vertex2);
  }
  get secondSide() {
    return this.vertex2.distanceFrom(this.vertex3);
  }
  get thirdSide() {
    return this.vertex3.distanceFrom(this.vertex1);
  }

  isValid() {
    return (
      this.firstSide < this.secondSide + this.thirdSide &&
      this.secondSide < this.firstSide + this.thirdSide &&
      this.thirdSide < this.firstSide + this.secondSide
    );
  }

  area() {
    const p = (this.firstSide + this.secondSide + this.thirdSide) / 2;

    return Math.sqrt(
      p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide)
    );
  }
}

const triangle = new Triangle(
  new Point(4, 7),
  new Point(1, 4),
  new Point(5, 4)
);

const vertexArr = [triangle.vertex1, triangle.vertex2, triangle.vertex3];
const appTriangle = document.getElementById("app-triangle");

appTriangle.innerHTML = `
    <div class="contanier" ${triangle.isValid() ? "" : "invalid"}>
        <h2 class="name">Triangle</h2>

            <div class="triangle-area">Area: ${triangle.area().toFixed(2)} </div>
        
                <div class="triangle-sides">Sides:
                    <b>Side1:</b>
                    <span class="sides">${triangle.firstSide.toFixed(2)}</span>
                    <b>Side2:</b>
                    <span class="sides">${triangle.secondSide.toFixed(2)}</span>
                    <b>Side3:</b>
                    <span class="sides">${triangle.thirdSide.toFixed(2)}</span>
                </div>

                <div class="triangle-vertices">Vertcies:
                ${vertexArr.map((point) => `
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
            <div>
    </div>
`;
