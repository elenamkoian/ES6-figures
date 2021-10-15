const setActivePage = (index) => {
  activePage.index = index;
  renderApp();
}

const getNavBar = ({ pages, onPageChange }) => {
  const navBar = document.createElement('div');
  navBar.className = 'nav-bar';

  const pageButtons = pages.map(({ pageName }, index) => {
    const pageButton = document.createElement('button');
    pageButton.className = 'nav-button';
    pageButton.innerText = pageName;

    if(index === activePage.index) {
      pageButton.classList.add('active');
    }

    pageButton.onclick = () => {
      activePage.index = index;

      const oldActiveButton = navBar.querySelector('.active');
      oldActiveButton.classList.remove('active');
      pageButton.classList.add('active');
      
      onPageChange();
    };

    return pageButton;
  });

  navBar.append(...pageButtons);
  return navBar;
};

