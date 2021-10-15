const getAddNewItemButton = ({ placeholder, onItemCreated }) => {
  const addNewButton = document.createElement('button');
  addNewButton.type = 'button';
  addNewButton.innerText = 'Add';
  addNewButton.className = 'add-button';

  let creationForm = null;

  addNewButton.addEventListener('click', () => {
    if(creationForm) {
      removeForm();
      return; 
    };

    addNewButton.innerText = 'Cancel';
    creationForm = activePage.data.renderCreatePage({ 
      onSubmit: () => {
        removeForm();
        onItemCreated(); 
      }
    });

    placeholder.nextElementSibling.before(creationForm);
  });
  
  const removeForm = () => {
    addNewButton.innerText = 'Add';
        creationForm.remove();
        creationForm = null;
  }

  return addNewButton;
}

