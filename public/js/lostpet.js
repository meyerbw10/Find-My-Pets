const lostPetFormHandler = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#name').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    const breed = document.querySelector('#breed').value.trim();
    const sex = document.querySelector('#sex').value.trim();
    const fixed = document.querySelector('#fixed').value.trim();
    const color = document.querySelector('#color').value.trim();
    const city = document.querySelector('#city').value.trim();
    const dateLost = document.querySelector('#date-lost').value.trim();
    const email = document.querySelector('#email').value.trim();
  
    if (name && weight && breed && sex && fixed && color && city && dateLost && email) {
      const response = await fetch('/api/lost', {
        method: 'POST',
        body: JSON.stringify({ name, weight, breed, sex, fixed, color, city, dateLost, email }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/api/lost/browselost');
      } else {
        alert('Failed to create lost pet :(');
      }
    }
  };

  document
  .querySelector('#create-button')
  .addEventListener('click', lostPetFormHandler);