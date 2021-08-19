class Rectangle {
  constructor(A, B, C, D) {
    this.A = A;
    this.B = B;
    this.C = C;
    this.D = D;
  }

  get AB() {
    return this.A.distanceFrom(this.B);
  }
  get BC() {
    return this.B.distanceFrom(this.C);
  }
  get CD() {
    return this.C.distanceFrom(this.D);
  }
  get DA() {
    return this.D.distanceFrom(this.A);
  }

  area() {
    return (
      Math.max(this.AB, this.BC, this.CD, this.DA) *
      Math.min(this.AB, this.BC, this.CD, this.DA)
    );
  }

  isValid() {
    const firsTriangle = new Triangle(this.A, this.B, this.D);
    const secondTriangle = new Triangle(this.B, this.C, this.D);

    return firsTriangle.area() + secondTriangle.area() === this.area();
  }
}

const rectangle = new Rectangle(
  new Point(4, 2),
  new Point(2, 6),
  new Point(8, 2),
  new Point(1, 8)
);

const vertices = [rectangle.A, rectangle.B, rectangle.C, rectangle.D];
const appRectangle = document.getElementById("app-rectangle");

appRectangle.innerHTML = `
    <div class="container ${rectangle.isValid() ? "" : "invalid"}">
        <h2 class="name">Rectangle</h2>

            <div class="rectangle-area">Area: ${rectangle.isValid() ? rectangle.area().toFixed(2) : "--"} </div>
                <div class="rectangle-sides">Sides: 
                    <b>AB:</b>
                    <span class="sides">${rectangle.isValid() ? rectangle.AB.toFixed(2) : "--"}</span>
                    <b>BC:</b>
                    <span class="sides">${rectangle.isValid() ? rectangle.BC.toFixed(2) : "--"}</span>
                    <b>CD:</b>
                    <span class="sides">${rectangle.isValid() ? rectangle.CD.toFixed(2) : "--"}</span>
                    <b>DA:</b>
                    <span class="sides">${rectangle.isValid() ? rectangle.DA.toFixed(2) : "--"}</span>
                </div>
                <div class="rectangle-vertices">Vertices
                     ${vertices.map((point) => `
                        <div class="point-card">
                            <div class="point-info-container">
                                <div>
                                    <b>x:</b>
                                    <span>${rectangle.isValid() ? point.x : "--"}</span>
                                    <b>y:</b>
                                    <span>${rectangle.isValid() ? point.y : "--"}</span>
                                </div>
                            </div>
                        </div>`).join("")}
             <div>
    </div>
`;
