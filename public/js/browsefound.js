const browsefound = async () => {
    const response = await fetch('/api/found/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if(response.ok){
        console.log(response)
      }
}

browsefound()