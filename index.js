const appRoot = document.querySelector('#app-root');

let pageContentShell = null;
let pageContentName = null;

const renderPageContent = () => {
  document.title = `Figures | ${activePage.data.pageName}`;
  pageContentName.innerText = activePage.data.pageName;
  pageContentShell.innerHTML = activePage.data.renderPage();
};

const renderApp = () => {
  appRoot.innerHTML = `
    <div class="page-container">
      <div class ="page-content">
        <h2 class="page-content-name">${activePage.data.pageName}</h2>
        <div class="page-content-shell"></div>
      </div>
    </div>
  `;

  const pageContainer = appRoot.querySelector('.page-container');
  pageContainer.prepend(getAppHeader({ 
      appName: "Figures", 
      pages, 
      onPageChange: renderPageContent,
    }))

  pageContentShell = appRoot.querySelector('.page-content-shell');
  pageContentName = appRoot.querySelector('.page-content-name');
  renderPageContent();
}

renderApp();
