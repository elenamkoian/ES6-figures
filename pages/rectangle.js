class Rectangle {
  constructor(A, B, C, D, name) {
    this.A = A;
    this.B = B;
    this.C = C;
    this.D = D;
    this.name = name;
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
    const firsTriangle = new Triangle(this.A, this.B, this.C);
    const secondTriangle = new Triangle(this.B, this.C, this.D);

    return firsTriangle.area() + secondTriangle.area() === this.area();
  }
}

const rectangles = [
  new Rectangle(
    new Point(4, 2, 'A'),
    new Point(2, 6, 'B'), 
    new Point(8, 2, 'C'),
    new Point(1, 8, 'C'), 
    'ABCD'
  ),

  new Rectangle(
    new Point(2, 2, 'E'),
    new Point(2, 5, 'F'),
    new Point(6, 2, 'G'),
    new Point(6, 5, 'H'), 
    'EFGH'
  ),
];

const renderRectangle = (rectangle) => `
  <div class='el-card ${rectangle.isValid() ? '': 'invalid'}'>
    <h2 class='el-card-name'>${rectangle.name}</h2>

    <div class='content-div'>Area: ${rectangle.area().toFixed(2)} </div>
      <div class='content-div'>Sides: 
        <b>${rectangle.A.name}${rectangle.B.name}:</b>
        <span class='content-div'>${rectangle.AB.toFixed(2)}</span>
        <b>${rectangle.B.name}${rectangle.C.name}:</b>
        <span class='content-div'>${rectangle.BC.toFixed(2)}</span>
        <b>${rectangle.C.name}${rectangle.D.name}:</b>
        <span class='content-div'>${rectangle.CD.toFixed(2)}</span>
        <b>${rectangle.D.name}${rectangle.A.name}:</b>
        <span class='content-div'>${rectangle.DA.toFixed(2)}</span>
      </div>

      <div class='content-div-with-chip'>
        Vertices:
          ${renderPoint(rectangle.A)}
          ${renderPoint(rectangle.B)}
          ${renderPoint(rectangle.C)}
          ${renderPoint(rectangle.D)}
      </div>
  </div>
`;

const renderRectangleList = (rectangleList) => rectangleList.map(renderRectangle).join('');
 
const createRectangleForm = ({ onSubmit }) => {
  const form = document.createElement('form');
  form.classList.add('create-item-form');
  form.innerHTML = `
    <p class="form-title">Create Rectangle</p>
    <div class="form-content">
      <select>
        ${
          points.map((point, index) => `
            <option value="${index}">${point.name} (${point.x}, ${point.y})</option>
          `).join('')
        } 
      </select>
      <select>
        ${
          points.map((point, index) => `
            <option value="${index}">${point.name} (${point.x}, ${point.y})</option>
          `).join('')
        } 
      </select>
      <select>
        ${
          points.map((point, index) => `
            <option value="${index}">${point.name} (${point.x}, ${point.y})</option>
          `).join('')
        } 
      </select>
      <select>
        ${
          points.map((point, index) => `
            <option value="${index}">${point.name} (${point.x}, ${point.y})</option>
          `).join('')
        } 
      </select>
      
      <input class="input" placeholder="Name" name="rectName" />
      <button class="submit-button" type="submit">Submit</button>
    </div>
  `;

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const [vertex1, vertex2, vertex3, vertex4, rectName] = [...form.querySelectorAll('select, input')].map((elem) => {
      return elem.value;
    });

    const rectangle = new Rectangle(points[vertex1], points[vertex2], points[vertex3], points[vertex4], rectName);
    rectangles.push(rectangle);

    onSubmit(rectangle);
  })

  return form;
}

