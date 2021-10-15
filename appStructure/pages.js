const pages = [
  {
    pageName: 'Points',
    renderPage: () => renderPointList(points),
    renderCreatePage: (params) => createPointForm(params),
  },
  {
    pageName: 'Circles',
    renderPage: () => renderCircleList(circles),
    renderCreatePage: (params) => createCircleForm(params),
  },
  {
    pageName: 'Rectangles',
    renderPage: () => renderRectangleList(rectangles),
    renderCreatePage: (params) => createRectangleForm(params),
  },
  {
    pageName: 'Triangles',
    renderPage: () => renderTriangleList(triangles),
    renderCreatePage: (params) => createTriangleForm(params),
  },
];
