class Triangle {
  constructor(vertex1, vertex2, vertex3, name) {
    this.vertex1 = vertex1;
    this.vertex2 = vertex2;
    this.vertex3 = vertex3;
    this.name = name
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

const triangles = [
  new Triangle(
    new Point(4, 7, 'A'),
    new Point(1, 4, 'B'),
    new Point(5, 4, 'C'),
    'ABC'
  ),
  new Triangle(
    new Point(6, 1, 'E'),
    new Point(2, 5, 'F'),
    new Point(8, 4, 'G'),
    'DEF'
  ),
]

const renderTriangle = (triangle) => `
  <div class='el-card ${triangle.isValid() ? '' : 'invalid'}'>
    <h2 class='el-card-name'>${triangle.name}</h2>

    <div class='content-div'>Area: ${triangle.area().toFixed(2)} </div>
    
    <div class='content-div'>Sides:
      <b>${triangle.vertex1.name}${triangle.vertex2.name}:</b>
      <span class='content-div'>${triangle.firstSide.toFixed(2)}</span>
      <b>${triangle.vertex2.name}${triangle.vertex3.name}:</b>
      <span class='content-div'>${triangle.secondSide.toFixed(2)}</span>
      <b>${triangle.vertex3.name}${triangle.vertex1.name}:</b>
      <span class='content-div'>${triangle.thirdSide.toFixed(2)}</span>
    </div>

    <div class='content-div-with-chip'>
      Vertcies:
        ${renderPoint(triangle.vertex1)}
        ${renderPoint(triangle.vertex2)}
        ${renderPoint(triangle.vertex3)}
    </div>
  </div>
`;

const renderTriangleList = (triangleList) => triangleList.map(renderTriangle).join('');

const createTriangleForm = ({ onSubmit }) => {
  const form = document.createElement('form');
  form.classList.add('create-item-form');
  form.innerHTML = `
    <p class="form-title">Create Triangle</p>
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
      
      <input class="input" placeholder="Name" name="triangleName" />
      <button class="submit-button" type="submit">Submit</button>
    </div>
  `;

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const [vertex1, vertex2, vertex3, triangletName] = [...form.querySelectorAll('select, input')].map((elem) => {
      return elem.value;
    });

    const triangle = new Triangle(points[vertex1], points[vertex2], points[vertex3], triangletName);
    triangles.push(triangle);

    onSubmit(triangle);
  })

  return form;
}