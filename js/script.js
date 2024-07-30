document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector("dialog + button");
  const closeButton = document.querySelector("dialog button");

  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  const form = document.getElementById('form');
  const output = document.getElementById('output');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const outdoors = document.querySelector('input[name="outdoors"]:checked').value;
    const neurotic = document.querySelector('input[name="neurotic"]:checked').value;
    const independent = document.querySelector('input[name="independent"]:checked').value;

    let result = '';

    if (outdoors === 'yes' && neurotic === 'no' && independent === 'yes') {
      result = 'You are a Dog person!';
    } else if (outdoors === 'no' && neurotic === 'yes' && independent === 'no') {
      result = 'You are a Cat person!';
    } else if (outdoors === 'yes' && neurotic === 'no' && independent === 'no') {
      result = 'You are a Reptile person!';
    } else {
      result = 'Your preferences are unique!';
    }

    output.textContent = result;
  });
});
