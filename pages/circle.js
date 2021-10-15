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

const renderCircleList = (circleList) => circleList.map(renderCircle).join('');

const createCircleForm = ({ onSubmit }) => {
  const form = document.createElement('form');
  form.classList.add('create-item-form');
  form.innerHTML = `
    <p class="form-title">Create Circle</p>
    <div class="form-content">
      <select  name="center">
        ${
          points.map((point, index) => `
            <option value="${index}">${point.name} (${point.x}, ${point.y})</option>
          `).join('')
        } 
      </sellect>
      
      <input class="input" placeholder="rdius" name="radius" />
      <button class="submit-button" type="submit">Submit</button>


    </div>

  `;

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const { center, radius } = [...form.querySelectorAll('[name]')].reduce((res, elem) => {
      res[elem.name] = elem.value;
      return res;
    }, {});

    const circle = new Circle(points[center], +radius);
    circles.push(circle);

    onSubmit(circle);
  })

  return form;
} 
