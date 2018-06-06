export const getElevation = (params) => {
  return fetch('/api/locationdetails/elevation', {
  	method: 'POST',
  	headers: {'Content-Type': 'application/json'},
  	body: JSON.stringify(params)
  });
}