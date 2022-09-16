const foundPetFormHandler = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#name').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    const breed = document.querySelector('#breed').value.trim();
    const sex = document.querySelector('#sex').value.trim();
    const fixed = document.querySelector('#fixed').value.trim();
    const color = document.querySelector('#color').value.trim();
    const city = document.querySelector('#city').value.trim();
    const dateFound = document.querySelector('#date-found').value.trim();
  
    if (name && weight && breed && sex && fixed && color && city && dateFound) {
      const response = await fetch('/api/found', {
        method: 'POST',
        body: JSON.stringify({ name, weight, breed, sex, fixed, color, city, dateFound }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('it worked!')
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create found pet :(');
      }
    }
    if (name && weight && breed && sex && fixed && color && city && dateFound) {
      const response = await fetch('/api/found', {
        method: 'GET',
        body: JSON.stringify({ name, weight, breed, sex, fixed, color, city, dateFound }),
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
  .addEventListener('click', foundPetFormHandler);