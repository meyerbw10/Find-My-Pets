const foundPetFormHandler = async (event) => {
    event.preventDefault();
    
    const id = document.querySelector('#id').value.trim();
    const name = document.querySelector('#name').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    const breed = document.querySelector('#breed').value.trim();
    const sex = document.querySelector('#sex').value.trim();
    const fixed = document.querySelector('#fixed').value.trim();
    const color = document.querySelector('#color').value.trim();
    const city = document.querySelector('#city').value.trim();
    const dateLost = document.querySelector('#dateLost').value.trim();
  
    if (id && name && weight && breed && sex && fixed && color && city && dateLost) {
      const response = await fetch('/api/found', {
        method: 'POST',
        body: JSON.stringify({ id, name, weight, breed, sex, fixed, color, city, dateLost }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('it worked!')
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create found pet :(');
      }
    }
  };

  document
  .querySelector('#create-button')
  .addEventListener('submit', foundPetFormHandler);