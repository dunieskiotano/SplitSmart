const dev = {
    ssContext: 'some local host'
  }
  
  const prod = {
    ssContext: 'some aws url'
  }
  
  export let environment = prod;
  
  if (process.env.NODE_ENV === 'production') {
    environment = prod;
  }