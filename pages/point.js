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
  
const points = [new Point(5, 6, 'A'), new Point(6, 3, 'B'), new Point(4, 8, 'C'), new Point(5, 6, 'D')];
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
    ${pointList.map(renderPoint).join('')}
  </div>
`;

const createPointForm = ({ onSubmit }) => {
  const form = document.createElement('form');
  form.classList.add('create-item-form');

  form.innerHTML = `
    <p class="form-title">Create Point</p>
    <div class="form-content">
      <input class="input" placeholder="x" name="x" />
      <input class="input" placeholder="y" name="y" />
      <input class="input" placeholder="Name" name="pointName" />
      <button class="submit-button" type="submit">Submit</button>

    </div>
  `;

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const { x, y, pointName } = [...form.querySelectorAll('[name]')].reduce((res, elem) => {
      res[elem.name] = elem.value;
      return res;
    }, {});

    const point = new Point(+x, +y, pointName);
    points.push(point);

    onSubmit(point);
  })

  return form;
};