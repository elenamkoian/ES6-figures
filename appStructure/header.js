const getAppHeader = ({ appName, ...navBarProps }) => {

  const appHeader = document.createElement('div');
  appHeader.className = 'app-header';
  appHeader.innerHTML = `<div class="app-name">${appName}</div>`;
  appHeader.append(getNavBar({ ...navBarProps, pages }));

  const formPlaceholder = document.createComment('form-placeholder');
  appHeader.append(
    getAddNewItemButton({ 
      placeholder: formPlaceholder,
      onItemCreated: () => navBarProps.onPageChange(),
    })
  );

  const fragment = document.createDocumentFragment();
  fragment.append(appHeader);
  fragment.append(formPlaceholder);

  return fragment;
};