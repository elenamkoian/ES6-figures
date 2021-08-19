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

const circle = new Circle(new Point(3, 2), 4);
const center = [circle.center];

const appCircle = document.getElementById("app-circle");

appCircle.innerHTML = `
    <div class="contanier">
        <h2 class="name">Circle</h2>

        <div class="radius">Radius: ${circle.radius} </div>
            <div class="circle-area">Area: ${circle.area().toFixed(2)} </div>
                <div class="circle-center">Center:
                    <div class="point-card">
                        <div class="point-info-container">
                            <div>
                                <b>x:</b>
                                <span>${circle.center.x}</span>
                                <b>y:</b>
                                <span>${circle.center.y}</span>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
`;
